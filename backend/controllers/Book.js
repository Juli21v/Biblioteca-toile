import book from "../models/Book.js";

const registerBook = async(req,res) =>{
    if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data")

    const existingb = await book.findOne({name: req.body.name});
    if (existingb)return res.status(400).send("This book is already exist");

    const bookSchema = new book({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
    });

    const result = await bookSchema.save();
    if (!result)return res.status(400).send("Failed to register this book");

    res.status(200).send({book});
}

export default {registerBook};