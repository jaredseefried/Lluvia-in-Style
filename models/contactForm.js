const mongoose = require("mongoose");

const Schema = mongoose.Schema

const contactFormSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  },
})
const contactForm = mongoose.model("contactForm", contactFormSchema)

module.exports = contactForm;