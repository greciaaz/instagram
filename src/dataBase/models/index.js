    
// importamos los paquetes que vamos a utilizar
const mongoose = require('mongoose');
//importamos los esquemas
const UserSchema = require('../schemas/userSchema');
const PostSchema = require('../schemas/postSchema');
const CommentSchema = require('../schemas/commentSchema');

// creacion de models, crea un model con el nombre de la coleccion y el esquema
// name, [schema], [collection]
const UserModel = mongoose.model("usersCintaNegra", UserSchema, 'usersCintaNegra');
const PostModel = mongoose.model('postsCintaNegra', PostSchema, 'postCintaNegra')
const CommentModel = mongoose.model('commentsCintaNegra', CommentSchema, 'commentsCintaNegra')

// exporta un objeto de modelos
module.exports = {
  UserModel,
  PostModel,
  CommentModel,
}