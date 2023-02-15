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

Port
```sh
http://localhost:3000/
```

Log in
```sh
Sending an object like:
{
"enmail": "carl"
"password": "1234"
}
to
[POST] /api/signin
Response:
{token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI5ZTEyNWE0NDMzNGJjNDg1ZDQ2ZSIsImlhdCI6MTY3NjQxMjAwMSwiZXhwIjoxNjc2NDk4NDAxfQ.1b2ytWhZK9lQxUp-hKo8cDH21ikfTBhgCTiXKSempII'}
```

Register
```sh
[POST] /api/signup
```

Profile ans posts of the logged in user
```sh
Include header 'x-access-token' and send a token like:
token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI5ZTEyNWE0NDMzNGJjNDg1ZDQ2ZSIsImlhdCI6MTY3NjQxMjAwMSwiZXhwIjoxNjc2NDk4NDAxfQ.1b2ytWhZK9lQxUp-hKo8cDH21ikfTBhgCTiXKSempII'
to: 
[GET] /api/profile
```

Post/Update profile picture
```sh
Send a file to
[POST] /api/profile
```

Post list
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

Create new post
```sh
Only the logged in user can send an object like:
{
"text": "string"
"image": "file"
}
to
[POST] /api/posts/
```

Delete a post
```sh
[DELETE] /api/posts/(id)
```

List of users
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
