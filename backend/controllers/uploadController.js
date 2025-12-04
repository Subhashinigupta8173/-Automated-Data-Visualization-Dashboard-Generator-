import Data from "../models/dataModel.js";
import csv from "csvtojson";

export const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const filePath = `uploads/${req.file.filename}`;

        // Convert CSV → JSON
        const jsonArray = await csv().fromFile(filePath);

        // Store in DB
        const savedData = await Data.create({ rawData: jsonArray });

        res.status(200).json({
            message: "File uploaded and data saved",
            dataId: savedData._id
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
