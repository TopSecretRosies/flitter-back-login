import Post from "../models/Post";
import Roles from "../models/Roles"
import User from "../models/User";

export const createRoles = async () => {

  try {
    const count = await Roles.estimatedDocumentCount()

    if(count > 0)return;

    const values = await Promise.all([
        new Roles({name: 'user'}).save(),
        new Roles({name: 'moderator'}).save(),
        new Roles({name: 'admin'}).save()

    ])

    console.log(values)
  } catch(error) {
    console.error(error)
  }
};

export const createPosts = async () => {

  try {
    const count = await Post.estimatedDocumentCount()

    if(count >= 3)return;

    const posts = await Promise.all([
        new Post({
          author: 'sonia', 
          text: "Los gatos son los mejores", 
          image: "http://localhost:3000/posts/cat-551554_960_720.jpg"
        }).save(),
        new Post({
          author: 'carol', 
          text: "Qué lío con esto del login"
        }).save(),
        new Post({
          author: 'estela', 
          text: "Qué os parece esto?",
          image: "http://localhost:3000/posts/mejores-playas-de-bali.jpg"
        }).save()

    ])

    console.log(posts)
  } catch(error) {
    console.error(error)
  }
};

export const createUsers = async () => {
  
  try {
    const count = await User.estimatedDocumentCount()

    if(count >= 3)return;

    const users = await Promise.all([
        new User({
          username: "sonia",
          email: "sonia@email.com",
          password: "sonia123",
          roles: [],
        }).save(),
        new User({
          username: 'carol', 
          email: "carol@email.com",
          password: "carol123",
          roles: []
        }).save(),
        new User({
          username: 'carlos86', 
          email: "calrlos86@email.com",
          password: "password",
          roles: []
        }).save()

    ])

    console.log(users)
  } catch(error) {
    console.error(error)
  }
}