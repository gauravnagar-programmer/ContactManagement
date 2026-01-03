import formModel from "../model/ContactForm.js";
import mongoose from "mongoose";

const contactData = async (req, res) => {
  try {


    const Data = await formModel.find();
    res.status(200).json(Data);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const deleted = await formModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getSortData = async (req, res) => {
  try {
    const { sort } = req.query;
    console.log(sort)

    let query = formModel.find();

    if (sort === "az") {
      query = query
        .collation({ locale: "en", strength: 2 })
        .sort({ name: 1 });
    }

    const data = await query;
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


export { contactData ,deleteContact ,getSortData };
