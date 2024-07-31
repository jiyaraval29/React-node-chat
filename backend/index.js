const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username},
        { headers: { "private-key":"137b4c7a-c6bc-45ce-b1f3-165b9a79df2c " } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // return res.status(e.respones.status).json(e.respones.data); 
    console.log('error occured in /authenticate', e);
    return res.status(500).json({ error: "Error occurred while authenticating" });
    
  }
});

app.listen(3001);
console.log('listening at 3001');