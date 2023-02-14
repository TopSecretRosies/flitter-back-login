Flitter Backend
Deploy:

```sh
npm install
```

Start application in developer mode:

```sh
npm run dev

```

Start application:

```sh
npm start
```

Puerto
```sh
http://localhost:3000/
```

Log in
```sh
Sending an object like:
{
"enmail":
"password":
}
to
[POST] /api/signin
Response:
{token: }
```

Register
```sh
[POST] /api/signup
```

Perfil y publicaciones del usuario que ha hecho log in
```sh
Include header 'x-access-token' and send a token like:
token: ''
to: 
[GET] /api/profile
Response:
```

Subir/Actualizar imagen de perfil
```sh
Send a file to
[POST] /api/profile
```

Listado de publicaciones
```sh
[GET] /api/posts

post Schema ({
    author: ,
    text: ,
    image: ,
    createdAt: ,
    updatedAt: ,
    id: 
})
```

Crear una publicación nueva
```sh
Solo el usuario registrado puede mandar un objeto tipo:
{
"text": "string"
"image": "file"
}
a
[POST] /api/posts/
Response:
```
Borrar una publicación
```sh
[DELETE] /api/posts/(id)
```

Listado de usuarios
```sh
[GET] /api/users

user Schema ({
    username:
    email:
    password:
    avatar:
    role:
    id:
})
```
