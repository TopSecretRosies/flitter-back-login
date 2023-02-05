
import {ROLES} from '../models/Roles'
import User from '../models/User'

// Para ver si el usuario ya está repetido
export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'The user already exists'})

    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).json({message: 'The email already exists'})

    next();
}


// Para ver si los datos del usuario ya existen
export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(404).json({
                    message: `Role ${req.body.roles[i]} does not exist}`
                })
            }
        }
    }

    next();
}