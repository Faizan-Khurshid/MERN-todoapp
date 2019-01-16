const mongoose = require('mongoose')
mongoose.connect('mongodb://faizan23:faizan23@ds157544.mlab.com:57544/todoapp', { useNewUrlParser: true }); //<---//ta k warning na de 


module.exports = mongoose;