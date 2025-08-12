const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");
const GITHUB_OWNER = "EminHaziyev";
const GITHUB_REPO = "DsaClub-Peerstack";
const BRANCH = "main"; 

app.use(express.static('public'));
app.get("/", async (req, res) => {
  try {
    // const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;
    // const { data } = await axios.get(url);
    const data = [
  {
    "name": "Arrays & Basic Complexity",
    "path": "Arrays & Basic Complexity",
    "sha": "0cc98f02217c9e64fcc94d5d2c88db8cc5191abb",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Arrays%20&%20Basic%20Complexity?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Arrays%20&%20Basic%20Complexity",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/0cc98f02217c9e64fcc94d5d2c88db8cc5191abb",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Arrays%20&%20Basic%20Complexity?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/0cc98f02217c9e64fcc94d5d2c88db8cc5191abb",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Arrays%20&%20Basic%20Complexity"
    }
  },
  {
    "name": "Hashing & Hash Maps",
    "path": "Hashing & Hash Maps",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Hashing%20&%20Hash%20Maps?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Hashing%20&%20Hash%20Maps",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Hashing%20&%20Hash%20Maps?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Hashing%20&%20Hash%20Maps"
    }
  },
  {
    "name": "Linked Lists",
    "path": "Linked Lists",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Linked%20Lists?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Linked%20Lists",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Linked%20Lists?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Linked%20Lists"
    }
  },
  {
    "name": "Recursion & Basic Backtracking",
    "path": "Recursion & Basic Backtracking",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Recursion%20&%20Basic%20Backtracking?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Recursion%20&%20Basic%20Backtracking",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Recursion%20&%20Basic%20Backtracking?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Recursion%20&%20Basic%20Backtracking"
    }
  },
  {
    "name": "Stacks & Queues",
    "path": "Stacks & Queues",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Stacks%20&%20Queues?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Stacks%20&%20Queues",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Stacks%20&%20Queues?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Stacks%20&%20Queues"
    }
  },
  {
    "name": "Strings",
    "path": "Strings",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Strings?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Strings",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Strings?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Strings"
    }
  },
  {
    "name": "Trees (Binary Trees & BST Basics)",
    "path": "Trees (Binary Trees & BST Basics)",
    "sha": "b409e853f38c71feece5db041e87f4c83ccb6642",
    "size": 0,
    "url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Trees%20(Binary%20Trees%20&%20BST%20Basics)?ref=main",
    "html_url": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Trees%20(Binary%20Trees%20&%20BST%20Basics)",
    "git_url": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
    "download_url": null,
    "type": "dir",
    "_links": {
      "self": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/contents/Trees%20(Binary%20Trees%20&%20BST%20Basics)?ref=main",
      "git": "https://api.github.com/repos/EminHaziyev/DsaClub-Peerstack/git/trees/b409e853f38c71feece5db041e87f4c83ccb6642",
      "html": "https://github.com/EminHaziyev/DsaClub-Peerstack/tree/main/Trees%20(Binary%20Trees%20&%20BST%20Basics)"
    }
  }
]
    const folders = data
      .filter(item => item.type === "dir" && item.name)
      .map(item => item.name);

    res.render('dsa', { folders });
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
});


app.get("/week/:name", async (req, res) => {
  try {
    const folderName = req.params.name;
    const url = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${BRANCH}/${folderName}/data.json`;

    const { data } = await axios.get(url);
    // res.json(data);
    res.render('week', { folder: folderName, data });
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch week data", details: err.message });
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
