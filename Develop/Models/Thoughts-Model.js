const {Schema, Model, Types} = require("mongoose");
const dateFormat = require("../Utils/Thought-Dates");

const commentSchema = new Schema(
    {
        commentId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        commentBody: {
            type: String,
            required: true,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "A Thought is Rrequired",
            minlength: 1,
            maxlength: 280,
        },

        creattedAt: {
            type: Date,
            default:  Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

        username: {
            type: String,
            required: true,
        },
        comments: [commentSchema],
    },

    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

commentSchema.virtual("commentCount").get(function () {
    return this.comments.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;