const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Thought Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],
    },

    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Virtual reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;