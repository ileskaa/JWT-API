const options = {
    // GET is the default method. Therefore no need to specify it
    headers: {
        //'Host': 'localhost:5000',
        //'Accept': 'text/plain',
        'Accept': ['application/json', 'text/plain'],
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vY2VydC5wZW0ifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2MTM4ODQ0MDJ9.Egq3FzoKPlJ4lRyF0tF2Ug1kUThTTd-0MmlvDjAh-tvPflDpXq0YkxOKv_k4RGy7qGLK2h1fyKAg23Ijv84rd0Wdp_nU4b16Le8BX6EM',
    }
}

fetch('http://localhost:5000/auth', options)
    .then((resp)=>resp.json())
    .then((json)=>console.log(json))
