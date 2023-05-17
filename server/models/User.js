const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const roles = ['citizen','employee','admin']

//User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an Email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an Email'],
        minlength: [6, "Minimum password length is 6 characters"]
    },
    role: {
        type: String,
        required: true,
        enum: roles
    }
});

//hash the user password before saving user to DB
userSchema.pre('save', async function(next) {

    // Only hash the password if it has been modified
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();

});

// Create a middleware function for hashing the password before updating the user
userSchema.pre('findOneAndUpdate', async function (next) {

    if (this._update.password) {
      const salt = await bcrypt.genSalt();
      this._update.password = await bcrypt.hash(this._update.password, salt);
    }
    next();
    
});

//static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        
        if(auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}

const User = mongoose.model('user', userSchema);

module.exports = User;