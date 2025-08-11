const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;


const GITHUB_OWNER = "EminHaziyev";
const GITHUB_REPO = "DsaClub-Peerstack";
const BRANCH = "main"; 


app.get("/", async (req, res) => {
  try {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;
    const { data } = await axios.get(url);

    const folders = data
      .filter(item => item.type === "dir" && item.name)
      .map(item => item.name);

    res.json(folders);
  } catch (err) {
    res.status(500).json({ error: "week doesnt exists"});
  }
});


app.get("/week/:name", async (req, res) => {
  try {
    const folderName = req.params.name;
    const url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${BRANCH}/${folderName}/data.json`;

    const { data } = await axios.get(url);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch week data", details: err.message });
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
