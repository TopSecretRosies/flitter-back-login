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
{token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI5ZTEyNWE0NDMzNGJjNDg1ZDQ2ZSIsImlhdCI6MTY3NjQxMjAwMSwiZXhwIjoxNjc2NDk4NDAxfQ.1b2ytWhZK9lQxUp-hKo8cDH21ikfTBhgCTiXKSempII}
```

Register
```sh
[POST] /api/signup
```

Perfil y publicaciones del usuario que ha hecho log in
```sh
Include header 'x-access-token' and send a token like:
token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI5ZTEyNWE0NDMzNGJjNDg1ZDQ2ZSIsImlhdCI6MTY3NjQxMjAwMSwiZXhwIjoxNjc2NDk4NDAxfQ.1b2ytWhZK9lQxUp-hKo8cDH21ikfTBhgCTiXKSempII'
to: 
[GET] /api/profile
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
    author: object.id,
    text: string,
    image: string,
    createdAt: Date ,
    updatedAt: Date,
    id: string
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
```

Borrar una publicación
```sh
[DELETE] /api/posts/(id)
```

Listado de usuarios
```sh
[GET] /api/users

user Schema ({
    username: string
    email: string
    password: string
    avatar: string
    role: object.id
    id: string
})
```
