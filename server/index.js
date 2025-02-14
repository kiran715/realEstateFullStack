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
    .connect("mongodb://127.0.0.1:27017/sampleDB")
    .then((res) => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("Error connecting in DB" + err);
    });

const applicationSchema = new mongoose.Schema({
    applicantName: { type: String, required: true },
    position: { type: String, required: true },
    skills: { type: String, required: true },
    experience: { type: String, required: true },
    phoneNo: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String, required: true },
});

const Application = mongoose.model("Application", applicationSchema);

app.post("/add", async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        console.log("Data Stored");
        res.status(200).json({ message: "New jobData added!!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating jobData" });
    }
});

app.get("/", async (req, res) => {
    try {
        const applicationData = await Application.find();
        res.status(200).send(applicationData);
    } catch (err) {
        console.log(err);
        res.send(500).json({ message: "Error in getting data", error: err });
    }
});

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const appData = await Application.findById(id);
        // console.log(propData);
        res.status(200).json(appData);
    } catch (error) {
        res.status(500).json({ message: "Error in getting by id" });
    }
});

app.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedData = await Application.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        // await updatedData.save();
        res.status(200).json({ message: "Data Updated!!!" });
    } catch (error) {
        res.status(500).json({ message: "Error in updating data" });
    }
});

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Application.findByIdAndDelete(id);
        res.status(200).json({ message: "Data deleted!!!" });
    } catch (error) {
        res.status(500).json({ message: "Error in Deleting!!!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
