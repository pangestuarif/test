const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        books_id: {
            type: Number,
            required:true,
        },
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        url_playbook: {
            type: String,
            required: false,
        },
        url_image: {
            type: String,
            required: false,
        },
        synopsis: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;