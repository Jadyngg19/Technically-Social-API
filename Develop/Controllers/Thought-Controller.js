const Thought = require('../Models/Thoughts-Model');
const User = require('../Models/User-Model');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().exec();
      res.json(thoughts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch thoughts.' });
    }
  },

  getThoughtById: async ({ params }, res) => {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id })
        .populate({
          path: "reactions",
          select: "-__v",
        })
        .select("-__v");

      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this ID :(" });
      }

      res.json(dbThoughtData);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },

  createThought: async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
      const thought = await Thought.create({ thoughtText, username });

      const user = await User.findOne({ username: username });
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      user.thoughts.push(thought._id);
      await user.save();

      res.status(201).json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create a thought.' });
    }
  },

  addReaction: async ({ params, body }, res) => {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $addToSet: { reactions: body } },
        { new: true, runValidators: true }
      );

      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(dbThoughtData);
    } catch (error) {
      res.json(error);
    }
  },

  updateThought: async ({ params, body }, res) => {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.id },
        body,
        { new: true, runValidators: true }
      );

      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought found with this ID :(" });
      }

      res.json(dbThoughtData);
    } catch (error) {
      res.json(error);
    }
  },

  deleteThought: async ({ params }, res) => {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });

      if (!dbThoughtData) {
        return res.status(404).json({ message: "Thought ID doesn't exist" });
      }

      const dbUserData = await User.findOneAndUpdate(
        { thoughts: params.id },
        { $pull: { thoughts: params.id } },
        { new: true }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "User ID doesn't exist" });
      }

      res.json({ message: "Thought deleted" });
    } catch (error) {
      res.json(error);
    }
  },

  deleteReaction: async ({ params }, res) => {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      );
      res.json(dbThoughtData);
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = thoughtController; 