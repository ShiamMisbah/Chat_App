import Message from "../models/message.model.js";

export const deleteAllMessages = async (req,res) => {
    try {

        const result = await Message.deleteMany({});
        res.status(200).json({ message: 'All documents deleted', deletedCount: result.deletedCount });

    } catch (error) {
        console.log("Error in dev tool delete", error.message);
        res.status(500).json({error: "Internal Server Error"});    }
}