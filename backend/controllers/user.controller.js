import TryCatch from "../middlewares/TryCatch.js";

export const registerUser = TryCatch(async (req, res) => {
    console.log(req.body)

    const { name, email, password } = req.body;

    return res.json({ name, email, password })
})