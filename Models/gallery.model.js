const mongoose = require('mongoose');
const galleryschema = mongoose.Schema;
const gallerySchema = new galleryschema({
    title: {
        type: String,
        required: true},
    img:{
        type: String,
        required: true},
});
const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;