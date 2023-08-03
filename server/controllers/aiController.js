```javascript
const AIModel = require('../models/AI');
const { interactWithAI } = require('../utils/helpers');

exports.getAIInteraction = async (req, res) => {
    try {
        const aiInteraction = await AIModel.findById(req.params.id);
        if (!aiInteraction) {
            return res.status(404).json({ message: 'AI Interaction not found' });
        }
        res.status(200).json(aiInteraction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAIInteraction = async (req, res) => {
    try {
        const aiInteraction = new AIModel({
            userId: req.body.userId,
            interaction: req.body.interaction
        });
        const savedAIInteraction = await aiInteraction.save();
        res.status(201).json(savedAIInteraction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAIInteraction = async (req, res) => {
    try {
        const updatedAIInteraction = await AIModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAIInteraction) {
            return res.status(404).json({ message: 'AI Interaction not found' });
        }
        res.status(200).json(updatedAIInteraction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAIInteraction = async (req, res) => {
    try {
        const deletedAIInteraction = await AIModel.findByIdAndRemove(req.params.id);
        if (!deletedAIInteraction) {
            return res.status(404).json({ message: 'AI Interaction not found' });
        }
        res.status(200).json({ message: 'AI Interaction deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.interactWithAI = async (req, res) => {
    try {
        const response = await interactWithAI(req.body.interaction);
        res.status(200).json({ AIResponse: response });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```