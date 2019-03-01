const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');
const fs = require('fs');

const recipes = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: {
    type: Array
  },
  cuisine: {
    type: String,
    require: true
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    minimum: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipes);

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });



const ourRecipe = {
  title: 'Gazapacho Andalú',
  level: 'UltraPro Chef',
  ingredients: ['6 mature tomatoes', '1/2 onion', '1 garlic tooth', '1/2 big pepper', 'a little piece of cucumber', 'oil', 'salt', 'vinegar', 'water'],
  cuisine: 'Spanish',
  dishType: ['Dish'],
  image: 'https://ihttps://s14-eu5.startpage.com/cgi-bin/serveimage?url=https:%2F%2Fwww.tasteoftheplace.com%2Fwp-content%2Fuploads%2F2016%2F07%2FGazpacho-Andaluz-at-TasteOfThePlace.com-inline.jpg&sp=8dac40e4a33fea5180ed460c5049235cmages.media-allrecipes.com/userphotos/720x405/815964.jpg',
  duration: 15,
  creator: 'Chef Jesús'
}

// Recipe.create(ourRecipe)
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => console.log(err));



// Recipe.find({}, { title: true })
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));



// Recipe.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

// Recipe.findOneAndUpdate({_id: '5c7915c1fc13811fb9ad88d6'}, { duration: 100 }, { new: true })
//   .then(result => {
//     console.log('Your recipe was updated');
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

Recipe.findByIdAndDelete('5c7915c1fc13811fb9ad88d5')
  .then(result => {
    console.log('Your recipe was deleted');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));


module.export = Recipe;