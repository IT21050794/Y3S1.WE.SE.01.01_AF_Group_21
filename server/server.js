const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config/serverConfig'); //import server configuration file

//import route files
const authRoutes = require('./routes/authRoutes');
const citizenRoutes = require('./routes/citizen/v1/citizenRoutes');
const payMethodRoutes = require('./routes/payment/v1/paymentMethods');
const paymentRoutes = require('./routes/payment/v1/payments');
const tenderRoutes = require('./routes/tender/v1/tenders');
const bidRoutes = require('./routes/tender/v1/bids');
const approvalRoutes = require('./routes/approvals/v1/approvals');
const complainRoutes = require('./routes/complains-proposals/v1/complains');
const proposalRoutes = require('./routes/complains-proposals/v1/proposals');
const employeeRoutes = require('./routes/employee/v1/employees');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use(authRoutes);
app.use('/api/citizens', citizenRoutes);
app.use('/api/payMethods', payMethodRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/tenders', tenderRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/approvals', approvalRoutes);
app.use('/api/complains', complainRoutes);
app.use('/api/suggestions', proposalRoutes);
app.use('/api/employees', employeeRoutes);

//mongoDB connection
mongoose.set('strictQuery', false);
mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((err) => console.log('DB connction faliure', err));

//server
app.listen(config.PORT,() => {
    console.log(`Server is running on port ${config.PORT}`);
});