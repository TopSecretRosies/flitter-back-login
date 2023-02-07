import express  from "express";
import morgan from "morgan";
import pkg from '../package.json'
import postsRoutes from './routes/posts.routes'
import authRoutes from './routes/auth.routes'
import { createRoles, createPosts, createUsers } from "./libs/initialSetup";
import userRoutes from "./routes/user.routes";
var cors = require('cors-express');
const multer  = require('multer')
const upload = multer({ dest: './public/images' })

const app = express(),
    options = {allow : {
        origin: '*',
        methods: 'GET,PATCH,PUT,POST,DELETE,HEAD,OPTIONS',
        headers: 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-Method-Override, x-access-token'
    },
    expose :{
        headers : null
    },
    max : {
        age : null
    },
    options : function(req, res, next){
        if (req.method == 'OPTIONS') {
            res.status(200).end();
        } else {
            next();
        }
    },
    specials : {
        powered : null
    }};
createRoles();
createPosts();
createUsers();

app.set('pkg', pkg)


app.use(cors(options));
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/posts', upload.single('imgURL'), postsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app
