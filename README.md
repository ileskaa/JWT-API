# JSON Web Token Validation API

What is the purpose of this API?

This API is intended to verify the validity of your JSON Web Tokens (JWT) based on the following:
- validity of the signature
- date of issue
- expiration date

venv to avoid possible dependency conflicts.
requirements.txt to be used with pip.

Explain how to encode

python -m venv jwt-venv
source jwt-venv/bin/activate

Start the API with python main.py

openssl req -x509 -sha256 -noenc -newkey rsa:4096 -keyout example.com.key -days 365 -out example.com.pem

openssl x509 -in example.com.pem -pubkey -noout > public_key.pem