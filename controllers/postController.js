import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user._id,
      caption: req.body.caption,
      image: req.file ? req.file.path : null,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name");
  res.json(posts);
};