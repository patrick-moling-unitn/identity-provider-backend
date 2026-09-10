const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Code', new Schema({ 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuthenticatedUser'
    },
    codeHash: {
        type: String,
        unique: true
    },
    expireDate: {
        type: Date,
        index: { expires: 0 }
    }
}));