import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const {fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword){
            return res.status(400).json({error: "Passwords dont match"});
        }
        const user = await User.findOne({userName});

        if (user) {
            return res.status(400).json({error: "Username Exists"});
        }

        // Hass Pass here

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            password: newUser.password,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup Controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = (req, res) => {
    console.log("login User");
}

export const logout = (req, res) => {
    console.log("logout User");
}