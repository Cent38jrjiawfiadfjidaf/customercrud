const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        id: {
            type:String,
            required: true,
        },

        firstname: {
            type: String,
            required: true,
            default: 0
        },

        lastname: {
            type: String,
            required: true,
            default: 0 
        },

        address: {
            type: String,
            required: true,
            default: 0
        },

        bday: {
            type: String,
            required: true,
            default: 0
        },

        username: {
            type: String,
            required: true,
            default: 0
        },

        password: {
            type: String,
            required: true,
            default: 0
        },

        status: {
            type: String,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true
    }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;