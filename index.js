require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
const GITHUB_OWNER = "EminHaziyev";
const GITHUB_REPO = "DsaClub-Peerstack";
const BRANCH = "main";

app.use(express.static("public"));
app.get("/", async (req, res) => {
  try {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "EminHaziyev-App",
      },
    });

    const folders = data
      .filter((item) => item.type === "dir" && item.name)
      .map((item) => item.name);

    res.render("dsa", { folders });
  } catch (err) {
    res
      .status(500)
      .json({
        error: err.message,
        details: err.response ? err.response.data : "No response from server",
      });
  }
});

app.get("/week/:name", async (req, res) => {
  try {
    const folderName = req.params.name;
    const url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${BRANCH}/${folderName}/data.json`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "EminHaziyev-App",
      },
    });
    // res.json(data);
    res.render("week", { folder: folderName, data });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Cannot fetch week data", details: err.message });
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
