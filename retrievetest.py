import urllib.request
with urllib.request.urlopen('http://localhost:5000/cert.pem') as f:
    # html = f.read().decode('utf-8')
    html = f.read()
print(html)
