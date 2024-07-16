import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },

      avatar: {
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocLZ9hSofcfrCZojtfOchfj7ct_G2HESCldWjZ3VWdXM7Ab1zeY5=s360-c-no"
      },

    }, { timestamps: true } );
    
    const User = mongoose.model('User', userSchema);
    
    export default User;