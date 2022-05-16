const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/risk-rating-tool', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;