const { UserModel }= require('../dataBase/models');

const {
    loginAction,
    signupAction,
} = require('../actions/userActions');
const {
    createPostAction
}= require('../actions/postActions');
const {
    addPostToUserAction
}= require('../actions/userActions');
const{
    createCommentAction
}=require('../actions/commentsActios');

const resolvers = {
    Query: {
        queryWhithLogin: (parent, args, context, info) =>{
            return {message: 'este es un query con login'}
        },
        simpleQuery:(parent, args, context, info)=>{
            return{massage: 'este es un simple query'}
        }
    },
    mutation: {
        signup:(parent, args, context, info)=>{
            return signupAction({...args.data }).then(result => {
                return result;
            }).catch(err =>{
                return err;
            });
        },
        login: (parent, args, context, info) =>{
            const {email, password } =args;
            return loginAction(email, password).then(result => {
                return result;
            }).catch(error =>{
                return error;
            })
        },
        createPost: (parent, args, context, info) =>{
            const { user } = context;
            console.log("TLC: user", user)
            return createPostAction({...args.postData}).then(postInfo => {
                console.log("TLC: postInfo", postInfo)
                return addPostToUserAction(postInfo, user).then((message)=>{
                    return (message)
                });
            })
            .catch(err =>{return err});
        },

        createComment: (parent, args, context, info) => {
            const { user } = context;
            const data = {...args.commentData, author: user._id}
            return createCommentAction(data).then(() => {
                return { message: `se ha registrado el comentario correctaemente` };
    }).catch(err => { return err });
        }
    }
}

module.exports = resolvers;
