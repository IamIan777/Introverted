const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSeed = [
    {
        username: "FreeWilly",
        email: "thewhalen@example.com"
    },
    {
        username: "BuggsBunny",
        email: "carrot@example.com"
    },
    {
        username: "Wolverine",
        email: "wolverine@example.com"
    }
];

const thoughtSeed = [
    {
        thoughtText: "Happy noises",
        username: "FreeWilly",
        reactions: [{
            reactionBody: "Is that a freaking orca?",
            username: "worlverine",
        }]
    },
    {
        thoughtText: "Eh, whats up doc?",
        username: "BuggsBunny",
        reactions: [{
            reactionBody: "loud orca sounds",
            username: "FreeWilly",
        },{
            reactionBody: "A talking rabbit? Are you a mutant?",
            username: "Wolverine",
        }]
    },
    {
        thoughtText: "I'm the best at what I do and what I do isnt very nice.",
        username: "Wolverine",
        reactions: [{
            reactionBody: "I'll be scared later.",
            username: "BuggsBunny",
        },{
            reactionBody: "Scared whale noises",
            username: "FreeWilly",
        }]
    }   
];

User.deleteMany({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
    })
    .then(() => Thought.deleteMany({}))
    .then(() => Thought.collection.insertMany(thoughtSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });