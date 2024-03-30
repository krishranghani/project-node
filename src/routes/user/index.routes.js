const usersRoutes = require('express').Router();
const userRoutes = require('../user/user.routes');
const cartRoutes = require('../../routes/user/cart.routes');
const favoriteRoutes  = require('../user/favorite.routes');
const orderRoutes = require('./order.routes');
const reviewRoutes = require('./review.routes');


usersRoutes.use('/users',userRoutes);
// usersRoute.use('/product', productRoute);
usersRoutes.use('/cart', cartRoutes);
usersRoutes.use('/favorite',favoriteRoutes);
usersRoutes.use('/order', orderRoutes);
usersRoutes.use('/review', reviewRoutes);




module.exports = usersRoutes;