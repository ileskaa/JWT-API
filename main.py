from flask import Flask, request, jsonify
import jwt
from cryptography import x509
from cryptography.hazmat.primitives import serialization
import urllib.request

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello there 👋"


def jsonResponse(key, value, status):
    return jsonify({key: value}), status


@app.route("/auth")
def authentication():
    accept = request.headers.get('Accept')
    auth = request.headers.get('Authorization')

    # verify MIME type compatibility
    if accept != '*/*' and 'application/json' not in accept:
        return jsonResponse('Unsupported media type', 'This endpoint only serves application/json', 415)

    # get JWT token
    token = auth.split(' ')
    keyword = token[0]
    if keyword != 'Bearer':
        response_str = "This endpoint only accepts Bearer tokens in the following format: Bearer <token_value>"
        return jsonResponse('Bad request', response_str, 400)
    token_value = token[1]

    # read token header
    decoded_header = jwt.get_unverified_header(token_value)
    try:
        algo = decoded_header['alg']
    except KeyError:
        return jsonResponse("Bad request", "You need to specify an encyption algorithm", 400)
    try:
        pem_cert_url = decoded_header['x5u']
    except KeyError:
        return jsonResponse("Bad request", "You need to specify the x5u header", 400)

    # verify if algorithm supported by the API
    if algo != "RS256":
        return jsonResponse("Not acceptable", "This API only supports tokens encrypted with RS256", 406)

    # get the certificate indicated in the header
    with urllib.request.urlopen(pem_cert_url) as resp:
        # the response is in bytes because urlopen() returns a bytes object
        pem_cert = resp.read()

    try:
        public_key_as_bytes = extract_publ_key_from_cert(pem_cert)
    except ValueError:
        return jsonResponse("not valid", "Incorrect certificate format", 200)

    try:
        jwt.decode(token_value, public_key_as_bytes, algorithms=["RS256"])
    except jwt.exceptions.ExpiredSignatureError:
        return jsonResponse("not valid", "The token's signature has expired", 200)
    except jwt.exceptions.ImmatureSignatureError:
        return jsonResponse("not valid", "The token is immature (not yet valid)", 200)
    except jwt.exceptions.InvalidSignatureError:
        return jsonResponse("not valid", "Signature verification failed", 200)

    # if no errors were raised at this point, the JWT is valid
    return jsonResponse('valid', 'true', 200)


def extract_publ_key_from_cert(pem_cert_as_bytes):
    # create a Certificate object
    try:
        x509_cert = x509.load_pem_x509_certificate(pem_cert_as_bytes)
    except ValueError:
        raise ValueError

    public_key = x509_cert.public_key()

    # convert the RSAPublickKey object into a PEM written in bytes
    public_pem = public_key.public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo
    )

    return public_pem


@app.route("/cert.pem")
def pem_certificate():
    with open('example.com.pem') as f:
        pem = f.read()
    return pem


if __name__ == "__main__":
    app.run(debug=True)
