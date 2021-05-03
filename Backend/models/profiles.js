import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
    profileName: String,
    imgUrl: String,
   
})

const Profile = mongoose.model('profiles', profileSchema)

export default Profile