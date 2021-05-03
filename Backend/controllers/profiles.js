import ProfileData from '../models/profiles.js'

export const getProfiles = async (req, res) => {
    try {
        const allProfiles = await ProfileData.find()

        res.status(200).json(allProfiles);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createProfile = async (req, res) => {
    const profile = req.body

    const newProfile = new ProfileData(profile)

    try {
        await newProfile.save()

        res.status(201).json(newProfile);
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}

export const deleteProfile = async (req, res) => {
    const id = req.params.id
    try {
        await ProfileData.findByIdAndRemove(id).exec()
        res.send('succesfully deleted');
    } catch (error) {
        console.log(error);
    }
}