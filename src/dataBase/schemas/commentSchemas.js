const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
    type: String,
    require: true,
},
    postId: {
    type: String,
    require: true,
},
    author: {
    type: Schema.Types.ObjectId,
    ref: 'usersCintaNegra',
    require: true,
}
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
return this.toString();
};

module.exports = CommentSchema;