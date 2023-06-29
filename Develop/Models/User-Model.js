const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: "A Username is Required",
        },

        email: {
            type: String,
            unique: true,
            trim: true,
            required: "Your Email is Required",
            match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i]
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],

        friends: [
            {
                type:  Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;