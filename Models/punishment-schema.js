const mongoose = require("mongoose");
const { Schema } = mongoose;

const reqString = {
    type: String,
    required: true,
}

const schema = new Schema(
    {
        userID: reqString,
        staffID: reqString,
        reason: reqString,
        expires: Date,
        type: {
            type: String,
            required: true,
            enum: ['ban', 'mute', 'kick'],
        },
    },
    {
        timestamps: true,
    }
)

const name = 'punishments'

module.exports = mongoose.models[name] || mongoose.model(name, schema)