# JSON Web Token Validation API

This API is intended to verify the validity of your JSON Web Tokens (JWT) based on the following:
- validity of the signature
- date of issue
- expiration date

## How to use the API

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

This reposipository contains a file named example-request.js that can be used to send requests to the API, but feel free to use any method you like. If you use example-request.js, please make sure the port indicated in the file (port 5000 by default) matches the port your server started on. If it looks good, and if you have node installed, you can send a request by simply typing  
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

That's it! Do not hesitate to open an issue if you encountered any problem when using this API.
