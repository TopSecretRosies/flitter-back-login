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

Listado de publicaciones
```sh
[GET] /api/posts

post Schema ({

})
```
Mostrar una sola publicación
```sh
[GET] /api/posts/(id)
```

Modificar/actualizar una publicación
```sh
Mandar un objeto tipo:
{
    "text": "new text"
}
a
[PUT] /api/posts/(id)

```
Crear una publicación nueva
```sh
Mandar un objeto tipo:
{

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

})
```
