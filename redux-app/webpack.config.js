let path = require("path");

module.exports = {
   entry:"./src/playground/redux-101.js" ,
   output:{
       path: path.join(__dirname, "public"),
       filename:"bundle.js"
   }, mode: 'development'
}