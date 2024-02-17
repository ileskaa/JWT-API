# JSON Web Token Validation API

This API is intended to verify the validity of your JSON Web Tokens (JWT) based on the following:
- validity of the signature
- date of issue
- expiration date

## How to use the API

Note: the commands that follow have only been tested on a Linux-based environment. They should also work on Mac, but some commands will likely differ on a Windows system. That being said, let's see how to use this API.

Start by cloning this repository, then `cd` into it. Now, I recommend you to venv, to avoid potential dependency conflict. To create a virtual environment, run  
`python -m venv jwt-venv`

venv to avoid possible dependency conflicts.
requirements.txt to be used with pip.

Explain how to encode


source jwt-venv/bin/activate

Start the API with python main.py

openssl req -x509 -sha256 -noenc -newkey rsa:4096 -keyout example.com.key -days 365 -out example.com.pem

openssl x509 -in example.com.pem -pubkey -noout > public_key.pem