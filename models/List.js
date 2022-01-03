const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        image: {
            type: String
        },
        nameUser: {
            type: String
        },
        info: {
            type: String
        },
        comment: {
            type: String
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("List", ListSchema);