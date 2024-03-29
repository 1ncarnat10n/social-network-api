const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createAt: {
            type: Date,
            default: Date.now,
        }
    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;