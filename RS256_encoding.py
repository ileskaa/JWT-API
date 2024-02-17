import jwt

payload = {
    "sub": "1234567890",
    "name": "John Doe",
    # "iat": 1733263100,
    "iat": 1516239022,
    # "exp": 1613884402,
    "exp": 1733263200
}

headers = {
    "alg": "RS256",
    "typ": "JWT",
    "x5u": "http://localhost:5000/cert.pem"
}

with open('example.com.key') as f:
    private_key = f.read()

private_key_as_bytes = str.encode(private_key)

encoded = jwt.encode(
    payload,
    private_key_as_bytes,
    algorithm="RS256",
    headers=headers,
)

print(encoded)
