const adminsroutes = require('express').Router();
const userRoutes = require('./admin.routes');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const reviewRoutes = require('./review.routes');

adminsroutes.use('/user-admin', userRoutes);
adminsroutes.use('/product',productRoutes)
adminsroutes.use('/cart', cartRoutes);
adminsroutes.use('/review', reviewRoutes);


module.exports = adminsroutes;