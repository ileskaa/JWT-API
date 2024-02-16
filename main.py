from flask import Flask, request, jsonify, send_from_directory, url_for
import jwt
from cryptography import x509
from cryptography.hazmat.primitives import serialization
import urllib.request

app = Flask(__name__)


# API root
@app.route("/")
def home():
    return "Hello there 👋"


@app.route("/auth")
def authentication():
    host = request.headers.get('Host')
    accept = request.headers.get('Accept')
    auth = request.headers.get('Authorization')

    with open('example.com.key') as f:
        private_key = f.read()

    private_key_as_bytes = str.encode(private_key)
    encoded = jwt.encode({"some": "payload"}, private_key_as_bytes, algorithm="RS256")

    with open('public_key.pem') as fi:
        public_key = fi.read()

    public_key_as_bytes = str.encode(public_key)
    decoded = jwt.decode(encoded, public_key_as_bytes, algorithms=["RS256"])

    token = auth.split(' ')[1]
    decoded_header = jwt.get_unverified_header(token)
    decoded_payload = jwt.decode(token, options={"verify_signature": False})

    if accept == '*/*' or 'application/json' in accept:
        return {
            "Host": host,
            "Accept": accept,
            "Authorization": auth,
            "token": token,
            "decoded payload": decoded_payload,
            "decoded header": decoded_header,
            "encoded": encoded,
            "public key": public_key,
            "decoded": decoded,
        }
    elif accept == 'text/plain':
        return 'valid/unvalid'

    # return {
    #         "Host": host,
    #         "Accept": accept,
    #         "Authorization": auth,
    #     }


@app.route("/cert.pem")
def pem_certificate():
    with open('example.com.pem') as f:
        pem = f.read()

    cert_as_bytes = str.encode(pem)
    # create a Certificate object
    x509_cert = x509.load_pem_x509_certificate(cert_as_bytes)
    public_key = x509_cert.public_key()

    # convert the RSAPublickKey object into a PEM written in bytes
    public_pem = public_key.public_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PublicFormat.SubjectPublicKeyInfo
    )

    # convert from bytes tp utf-8
    public_key_str = public_pem.decode("utf-8")
    return public_key_str


if __name__ == "__main__":
    app.run(debug=True)
