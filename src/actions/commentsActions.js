const { CommentModel } = require('../dataBase/models');

const createCommentAction = (commentData) => {
    return new Promise((resolve, reject) => {
    CommentModel.create(commentData).then(infoComment => {
        resolve(infoComment)
    }).catch(err => reject(err));
});
};

module.exports = {
    createCommentAction,
}