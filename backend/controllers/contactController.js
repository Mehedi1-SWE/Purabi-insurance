
const Contact = require("../models/Contact");

const createContact = async (req, res) => {
    try {
        const { fullName, email, phone, subject, message } = req.body;

        const contact = await Contact.create({
            fullName,
            email,
            phone,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Your message has been sent successfully.",
            data: contact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to send your message.",
            error: error.message,
        });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: contacts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to fetch contact messages.",
            error: error.message,
        });
    }
};

module.exports = {
    createContact,
    getContacts,
};

