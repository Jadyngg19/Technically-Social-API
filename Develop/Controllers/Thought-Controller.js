const Thought = require('../Models/Thoughts-Model');

const thoughtController = {
  // Controller function to get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thoughts.' });
    }
  },

  // Controller function to create a new thought
  createThought: async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
      const thought = await Thought.create({ thoughtText, username });
      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create a thought.' });
    }
  },

  // Controller function to add a comment to a thought
  addComment: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { commentBody, username } = req.body;

      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found.' });
      }

      thought.comments.push({ commentBody, username });
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add a comment.' });
    }
  },

// Controller function to update a thought
updateThought: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { thoughtText } = req.body;

      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { thoughtText },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found.' });
      }

      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the thought.' });
    }
  },

  // Controller function to delete a thought
  deleteThought: async (req, res) => {
    try {
      const { thoughtId } = req.params;

      const thought = await Thought.findByIdAndDelete(thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found.' });
      }

      res.json({ message: 'Thought deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete the thought.' });
    }
  },
};

module.exports = thoughtController;