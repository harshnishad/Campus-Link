const bcrypt = require('bcrypt');
const Admin = require('../models/adminSchema');

const adminRegister = async (req, res) => {
    try {
        const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
        const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

        if (existingAdminByEmail) {
            return res.status(400).send({ message: 'Email already exists' });
        }
        if (existingSchool) {
            return res.status(400).send({ message: 'School name already exists' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const admin = new Admin({
            ...req.body,
            password: hashedPassword
        });

        let result = await admin.save();
        result.password = undefined; // Do not send password in response
        res.status(201).send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const adminLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            const isPasswordValid = await bcrypt.compare(req.body.password, admin.password);
            if (isPasswordValid) {
                admin.password = undefined; // Do not send password in response
                res.send(admin);
            } else {
                res.status(401).send({ message: "Invalid password" });
            }
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } else {
        res.status(400).send({ message: "Email and password are required" });
    }
};

const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined; 
            res.send(admin);
        } else {
            res.status(404).send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { adminRegister, adminLogIn, getAdminDetail };
