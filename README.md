# JWT-API

venv to avoid possible dependency conflicts.
requirements.txt to be used with pip.

Start the API with python main.py

openssl req -x509 -sha256 -noenc -newkey rsa:4096 -keyout example.com.key -days 365 -out example.com.pem

openssl x509 -in example.com.pem -pubkey -noout > public_key.pem