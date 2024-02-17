# JSON Web Token Validation API

This API is intended to verify the validity of your JSON Web Tokens (JWT) based on the following:
- validity of the signature
- date of issue
- expiration date

## How to Use the API

Notes:
- The commands that follow have only been tested on a Linux-based environment. They should also work on Mac, but some commands will likely differ on a Windows system.
- Depending on your setup it might be necessary to replace `python` with `python3` when running the commands.
That being said, let's see how to use this API.

Start by cloning this repository, then `cd` into it. At this point, it might be a good idea to use a virtual environment to avoid potential dependency conflict. To create a virtual environment, run  
`python -m venv jwt-venv`.  
Now activate the virtual environment with  
`source jwt-venv/bin/activate`.  
Next, install the packages required by this project:  
`pip install -r requirements.txt`.

You are now ready to start your localhost server. Simply run `python main.py`. By default, the server should be running on port 5000.

An example request would like this:  
```
GET http://localhost:5000/auth HTTP/1.1
Host: localhost
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jZXJ0LnBlbSJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzMyNjMyMDB9.VwThyTU9_H0VO8HVSFzQsU0ZHqKTdd2EMMRu7zEJSDxVMj4Ghlt2QYFvyvbxQcIKuLHRKi4u6Zcu3HxvFNOY4p-rFLK0xFJynBfDGQXKtYUT0TCaSylPNC2xWK0CET-d7Hkl1yXMqhiGLBstO-7HhNLNyeSlGeHrmZQvPOAvqJe1KHDY-V1DDrWU3tn1ijYIjjohjK2l_zNHfNaNgsqpwnRz90wwLbIEDLR0Gr0HBN5AzyU70-pid0mDZh9or5sXrsmoXcX-RcfcwSKFWl5ppFPNwBXlP0YNGlxQ4ZJdQ0bVSr14enUTpGzXttUCkfhNIF2HotWkC71W5dYDQmmAAAZwRdoG2DW506CPOZL8-5tL7m5Hq9kP2wQcF-mN9FM7dIPEg1FSnbsJPhOIBKfNbQ7w3nMUSeaHH5NdiUKLP_76kRlStQAsb7ykiE20uQl6n1guM8cBFupnQVo8vkNC7fZ1S7vqjqHbosGJ6lcfl7ybVEJsFqb6RdW3GehSylfsZYLAMlHB3EvB9sBwmUjTLPyINBm2i3fVQtVqfxITK6PusDvrCfVtWBVO6wYeYN1PmJFTjQ0FH6wtGxw9MoIqIGGvupfYYIMGB6u93YM6f9N9WboLDCsnLrAYb7igg45nHQzCxMpBHZu0eatqBcM-u-hUSHTBsqO8uYuArPnla24
```

The API will then respond with a JSON. If the JWT is valid, the response will look like this:  
`{ valid: 'true' }`.  
And if the JWT is not valid, the response will look somethig like the following:  
`{ 'not valid': "The token's signature has expired" }`.

This repository contains a file named example-request.js that can be used to send requests to the API, but feel free to use any method you like. If you use example-request.js, please make sure the port indicated in the file (port 5000 by default) matches the port your server started on. If it looks good, and if you have node installed, you can send a request by simply typing  
`node example-request.js`.  
Feel free to open example-request.js and modify the headers inside the options object. The file contains 4 different tokens that can be used to test the API. You can change the `token_value` variable inside the Authorization header to one of the predefined tokens, or use your own token!

This repository also contains the tools to create your own tokens. Open the file named RS256_encoding.py: there, you can customize the header and the payload according to your needs.  
If you want to customize the 'iat' and 'exp' fields, this repo provides a very simple program to convert dates to their numeric format. Open dateconversion.py, and change the date_string variable to the date you want. Then run `python dateconversion.py`. This will print an integer corresponding to your date. Now you can paste this value to RS256_encoding.py, inside the payload.  
Once you have set the desired values, run `python RS256_encoding.py`. This will print a JWT token value that can be used when requesting the API.

This repository contains by default a private key, stored in `example.com.key`, and an X.509 certificate in PEM format, stored in `example.com.pem`. This provides a quick way to test the API.  
You can however create your own own key and certificate. To do so, first make sure you have openssl installed. Then run (on a single line)  
`openssl req -x509 -sha256 -noenc -newkey rsa:4096 -keyout example.com.key -days 365 -out example.com.pem`.  
This will create both a private key, and a PEM certificate matching that private key. Tested with openssl 3.2.1.

If you wish the extract the public key from the certifcate, you can use following command:  
`openssl x509 -in example.com.pem -pubkey -noout > public_key.pem`  
Extracting the public key is however not necessary when testing the API, since the endpoint will take care of extracting the public key from the PEM certificate.

That's it! Do not hesitate to open an issue if you encountered any problem while using this API.
