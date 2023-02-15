import Post from "../models/Post";
import Roles from "../models/Roles"
import User from "../models/User";

export const createRoles = async () => {

  try {
    const count = await Roles.estimatedDocumentCount()

    if(count > 0)return;

    const values = await Promise.all([
        new Roles({name: 'user'}).save()
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
          author: '63ed08a884f9b19803393620', 
          text: "Los gatos son los mejores", 
          image: "http://localhost:3000/posts/cat-551554_960_720.jpg"
        }).save(),
        new Post({
          author: '63ed08a884f9b19803393620', 
          text: "Qué lío con esto del login"
        }).save(),
        new Post({
          author: '63ed08a884f9b19803393621', 
          text: "Qué os parece esto?",
          image: "http://localhost:3000/posts/mejores-playas-de-bali.jpg"
        }).save(),
        new Post({
          author: '63ed08a884f9b19803393622', 
          text: "Qué bien comimos el otro día en Restaurante Rufino!!",
          image: "http://localhost:3000/posts/gente-saludable-ensalada-comida-mujer.jpg"
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
          password: "$2a$10$BJFjDseaKR6uLDjjPRuA5uQ4fwyfy5DChU5jHYqiAX8mGLE7MqA/e",
          roles: [],
          avatar: "http://localhost:3000/users/senora-riendo-peinado-moda-posando-fascinante-modelo-femenino-camiseta-blanca-divirtiendose.jpg"
        }).save(),
        new User({
          username: 'marta_lg', 
          email: "marta@email.com",
          password: "$2a$10$IscoGZRg7u02RhR1uWJZuuzKYgiPfRV1nZVRWhVjQranYgZ6eQ1K2",
          roles: [],
          avatar: "http://localhost:3000/users/retrato-joven-sonriente-senalando-dedo.jpg"
        }).save(),
        new User({
          username: 'carl', 
          email: "carl29@email.com",
          password: "$2a$10$xDy.c/2un652KHc5RMS4o.y4egyQnGzGoFKKCH50G7R64J6t7Uy1y",
          roles: [],
          avatar: "http://localhost:3000/users/feliz-sonriente-guapo-contra-fondo-azul.jpg"
        }).save()

    ])

    console.log(users)
  } catch(error) {
    console.error(error)
  }
}