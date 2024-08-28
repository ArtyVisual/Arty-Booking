const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const FlightModel = require('./models/Flight'); // Import Flight model
const HotelModel = require('./models/Hotel'); // Import Hotel model
const TrainModel = require('./models/Train'); // Import Train model

const app = express();

// CORS configuration using 'cors' middleware
const corsOptions = {
  origin: 'https://arty-booking.vercel.app', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies or HTTP authentication
  optionsSuccessStatus: 204, // For legacy browser support
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(express.json()); // Parse incoming JSON requests

// Handle preflight (OPTIONS) requests
app.options('*', cors(corsOptions)); // For all routes

// Connect to MongoDB
mongoose.connect("mongodb+srv://abbasvajwana1:abbasatlas77@cluster1.0bhubyy.mongodb.net/travelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
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
app.post('/FindHotels', (req, res) => {
    const { city } = req.body;
    HotelModel.find({ city: city })
        .then(hotels => {
            if (hotels.length > 0) {
                res.json(hotels);
            } else {
                res.json("no hotels available");
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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
