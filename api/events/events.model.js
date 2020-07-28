const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  
  
    title: {
      type: String,
      unique: false,
      //required: true,
    },
    start: {
      type: Date,
      unique: false,
      //required: true,
    },
    end: {
      type: Date,
      unique: false,
      //required: false,
    },
    desc: {
      type: String,
      unique: false,
      //required: true,
    },
    openSlot: {
      type: Boolean,
      unique: false,
      //required: false,
    },
    openEvent: {
      type: Boolean,
      unique: false,
      //required: false,
    },
    category: {
      type: String,
      unique: false,
      //required: true,
    }  
})
      
module.exports = eventsSchema;