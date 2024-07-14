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

      password: {
        type: String,
        default: "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=q6RTyRcP6Lli25bBXmKz3F3sIAVSu5PthcuOiAniHzE="
      },

    }, { timestamps: true } );
    
    const User = mongoose.model('User', userSchema);
    
    export default User;