// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');




//This helps identify Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//This helps define many foreign keys
Category.hasMany(Product, {
  foreignKey: 'category_id',
  
});

// There are many tags with product


 Product.belongsToMany(Tag, {

   through: ProductTag, 
   foreignKey: 'product_id',
 
 });

// more info on  the ragas

Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id',
 
  
});












module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
