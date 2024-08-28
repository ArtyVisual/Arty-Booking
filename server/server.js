const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const FlightModel = require('./models/Flight'); // Import Flight model
const HotelModel = require('./models/Hotel'); // Import Hotel model
const TrainModel = require('./models/Train'); // Import Train model

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'https://arty-booking-app.vercel.app', // Corrected origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};


// Handle preflight requests for CORS
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Connect to MongoDB
mongoose.connect("mongodb+srv://abbasvajwana1:abbasatlas77@cluster1.0bhubyy.mongodb.net/travelDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB...", err));

// Default route
app.get("/", (req, res) => {
    res.json("Hello");
});

// Flight search endpoint
app.post('/findFlights', (req, res) => {
    const { from, to } = req.body;
    FlightModel.find({ from: from, to: to })
        .then(flights => {
            if (flights.length > 0) {
                res.json(flights);
            } else {
                res.json("no flights available");
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

// Hotel search endpoint
app.post('/findHotels', (req, res) => {
    const { city } = req.body;
    HotelModel.find({ city: city })
        .then(hotels => {
            if (hotels.length > 0) {
                res.json(hotels);
            } else {
                res.json("no hotel available");
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

// Train search endpoint
app.post('/findTrains', (req, res) => {
    const { from, to } = req.body;
    TrainModel.find({ from: from, to: to })
        .then(trains => {
            if (trains.length > 0) {
                res.json(trains);
            } else {
                res.json("no trains available");
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

