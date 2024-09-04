import User from "../../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from 'cookie';

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });


        if (!user) {
            return res.status(404).send({ success: false, message: "email or password is incorrect" })
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(404).send({ success: false, message: "Username or password is incorrect" })
        }
        // console.log("before token")
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY
        );
        // console.log("token", token)
        // console.log("after token")

        const { password, ...otherDetails } = user._doc;
        res.setHeader('Set-Cookie', cookie.serialize('access_token', token, {
            httpOnly: true,
            path: '/'
        }));

        res.status(200).send({ details: { ...otherDetails }, token: token });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message })
    }
};

export default login