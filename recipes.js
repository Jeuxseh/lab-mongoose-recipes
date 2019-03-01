const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

const recipes = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']
  },
  ingredients: {
    type: Array
  },
  cuisine:{
    type: String,
    require: true
  },
  dishType:{
    type: String,
    enum:['Breakfast','Dish','Snack','Drink','Dessert','Other']
  },
  image:{
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration:{
    type: Number,
    minimum: 0
  },
  creator:{
    type: String
  },
  created:{
    type: Date,
    default: Date.now
  }
})




mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });
