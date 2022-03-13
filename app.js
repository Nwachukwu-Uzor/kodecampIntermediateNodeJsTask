const express = require('express');
const mongoose = require('mongoose');


// Routes
const MessageRoute = require('./Routes/Message.js');


const PORT = 5000;
const CONNECTION_STRING = 'mongodb+srv://javacriptMS:rJTY3Cc14rIhgKkc@cluster0.4p5te.mongodb.net/kodecamp?retryWrites=true&w=majority';

const app = express();
mongoose.connect(CONNECTION_STRING, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Connection Successful'))
.catch(error => console.log(error.message));

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})

app.get("/", (req, res) => {
  res.status(200).json({message: 'Reached the home route'})
})

app.use('/messages', MessageRoute);