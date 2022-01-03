const router = require("express").Router();
const Lists = require("../models/List");


//Create
router.post("/", async (req, res) => {
    const newList = new Lists(req.body);
    try {
        const savedList = await newList.save();
        res.status(201).json(savedList)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Update
router.patch("/:id", async (req, res) => {
    try {
        const updatedList = await Lists.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(201).json(updatedList)
    } catch (err) {
        res.status(500).json(err)
    }
});


//Delete
router.delete("/:id", async (req, res) => {
    try {
        await Lists.findByIdAndDelete(req.params.id);
        res.status(201).json("deleted")
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get All
router.get("/", async (req, res) => {
    try {
        const lists = await Lists.find();
        res.status(200).json(lists)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get
router.get("/find/:id", async (req, res) => {
    try {
        const lists = await Lists.findById(req.params.id);
        res.status(200).json(lists)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;