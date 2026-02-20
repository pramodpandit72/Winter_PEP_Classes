import express from "express";
import Confession from "../models/confession.js";

const router = express.Router();

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Please login to continue" });
};

// POST /confessions - Create a new confession
router.post("/", isAuthenticated, async (req, res) => {
  try {
    const { text, secretCode } = req.body;

    if (!text || !secretCode) {
      return res.status(400).json({ message: "Text and secret code are required" });
    }

    if (secretCode.length < 4) {
      return res.status(400).json({ message: "Secret code must be at least 4 characters" });
    }

    const confession = new Confession({
      text,
      secretCode,
      userId: req.user.id,
      reactions: { like: 0, dislike: 0, love: 0, laugh: 0 },
      comments: []
    });

    await confession.save();
    
    // Return confession without secretCode
    const confessionResponse = confession.toObject();
    delete confessionResponse.secretCode;
    
    res.status(201).json(confessionResponse);
  } catch (error) {
    res.status(500).json({ message: "Error creating confession", error: error.message });
  }
});

// GET /confessions - Get all confessions
router.get("/", async (req, res) => {
  try {
    const confessions = await Confession.find()
      .select("-secretCode")
      .sort({ createdAt: -1 });
    res.json(confessions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching confessions", error: error.message });
  }
});

// PUT /confessions/:id - Update confession with secret code verification (owner only)
router.put("/:id", isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const { text, secretCode } = req.body;

    if (!secretCode) {
      return res.status(400).json({ message: "Secret code is required" });
    }

    const confession = await Confession.findById(id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    // Check if the user is the owner of the confession
    if (confession.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only edit your own confessions" });
    }

    if (confession.secretCode !== secretCode) {
      return res.status(403).json({ message: "Invalid secret code" });
    }

    confession.text = text || confession.text;
    await confession.save();

    const confessionResponse = confession.toObject();
    delete confessionResponse.secretCode;

    res.json(confessionResponse);
  } catch (error) {
    res.status(500).json({ message: "Error updating confession", error: error.message });
  }
});

// DELETE /confessions/:id - Delete confession with secret code verification (owner only)
router.delete("/:id", isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const { secretCode } = req.body;

    if (!secretCode) {
      return res.status(400).json({ message: "Secret code is required" });
    }

    const confession = await Confession.findById(id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    // Check if the user is the owner of the confession
    if (confession.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own confessions" });
    }

    if (confession.secretCode !== secretCode) {
      return res.status(403).json({ message: "Invalid secret code" });
    }

    await Confession.findByIdAndDelete(id);
    res.json({ message: "Confession deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting confession", error: error.message });
  }
});

// POST /confessions/:id/react - Add reaction to confession (requires authentication)
router.post("/:id/react", isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!["like", "dislike", "love", "laugh"].includes(type)) {
      return res.status(400).json({ message: "Invalid reaction type" });
    }

    const confession = await Confession.findById(id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    // Initialize dislike if it doesn't exist (for backward compatibility)
    if (confession.reactions.dislike === undefined) {
      confession.reactions.dislike = 0;
    }

    confession.reactions[type] += 1;
    await confession.save();

    const confessionResponse = confession.toObject();
    delete confessionResponse.secretCode;

    res.json(confessionResponse);
  } catch (error) {
    res.status(500).json({ message: "Error adding reaction", error: error.message });
  }
});

// POST /confessions/:id/comment - Add comment to confession
router.post("/:id/comment", isAuthenticated, async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const confession = await Confession.findById(id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    const newComment = {
      text: text.trim(),
      userId: req.user.id,
      userName: req.user.displayName || "Anonymous",
      userPhoto: req.user.photos?.[0]?.value || null,
      createdAt: new Date()
    };

    confession.comments.push(newComment);
    await confession.save();

    const confessionResponse = confession.toObject();
    delete confessionResponse.secretCode;

    res.json(confessionResponse);
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
});

// DELETE /confessions/:id/comment/:commentId - Delete own comment
router.delete("/:id/comment/:commentId", isAuthenticated, async (req, res) => {
  try {
    const { id, commentId } = req.params;

    const confession = await Confession.findById(id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    const comment = confession.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own comments" });
    }

    confession.comments.pull(commentId);
    await confession.save();

    const confessionResponse = confession.toObject();
    delete confessionResponse.secretCode;

    res.json(confessionResponse);
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error: error.message });
  }
});

export default router;