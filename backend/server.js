const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection success!");
})

const announcementRouter = require("./routes/announcements.js");

app.use("/announcement", announcementRouter);

/*// Search route
app.get("/announcement/search", async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from && !to) {
      return res.status(400).json({ msg: "Please provide a search query." });
    }

    let query = {};
    if (from) {
      query.from = { $regex: from, $options: "i" };
    }
    if (to) {
      query.to = { $regex: to, $options: "i" };
    }

    const notices = await notice.find(query);
    if (notices.length === 0) {
      const error = new Error("No notices found");
      error.status = 404;
      throw error;
    }

    res.json(notices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
*/
app.listen(PORT, ()=> {
    console.log(`Server is up and runing in port: ${PORT}`);
})
