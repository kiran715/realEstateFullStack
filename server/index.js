import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("Error connecting in DB" + err);
    });

const propertySchema = new mongoose.Schema({
    buyerName: { type: String, required: true },
    propertyType: { type: String, required: true },
    priceRange: { type: String, required: true },
    location: { type: String, required: true },
    phoneNo: { type: String, required: true },
    email: { type: String, required: true },
    propertyImage: { type: String, required: true },
});

const propertyModel = mongoose.model("property", propertySchema);

app.post("/add", async (req, res) => {
    try {
        const newProperty = new propertyModel(req.body);
        await newProperty.save();
        console.log("Data Stored");
        res.status(200).json({ message: "New property added!!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating property" });
    }
});

app.get("/", async (req, res) => {
    try {
        const propertyData = await propertyModel.find();
        res.status(200).send(propertyData);
    } catch (err) {
        console.log(err);
        res.send(500).json({ message: "Error in getting data", error: err });
    }
});

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const propData = await propertyModel.findById(id);
        // console.log(propData);
        res.status(200).json(propData);
    } catch (error) {
        res.status(500).json({ message: "Error in getting by id" });
    }
});

app.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedData = await propertyModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        // await updatedData.save();
        res.status(200).json({ message: "Data Updated!!!" });
    } catch (error) {
        res.status(500).json({ message: "Error in updating data" });
    }
});

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await propertyModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Data deleted!!!" });
    } catch (error) {
        res.status(500).json({ message: "Error in Deleting!!!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
