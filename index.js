const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose');
const { addChef, getChef, getphotos, addPhotos } = require('./Controllers/ChefControllers');
const { addFeedback, getFeed } = require('./Controllers/FeedBackController');
const { addBreakfast, getBreakfast } = require('./Controllers/Breakfast');
const { addLunch, getLunch } = require('./Controllers/Lunch');
const { addDinner, getDinner } = require('./Controllers/dinner');
const { addBev, getBev } = require('./Controllers/Bev');
const { getbooking, addbooking, getBookings, addBooking } = require('./Controllers/booking');


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})



mongoose.connect('mongodb+srv://Rest123:myrest456@rest.0zotr.mongodb.net/?retryWrites=true&w=majority&appName=Rest')
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err))





// -----------------chefs------------------------------------------------------------------------
app.post('/addchef',addChef);
app.get('/getchefs',getChef);


app.post('/addfeedback',addFeedback)
app.get('/getfeedbacks',getFeed)


app.get('/getphotos',getphotos)
app.post('/addphotos',addPhotos)


app.post('/addbreak',addBreakfast)
app.get('/getbreakfast',getBreakfast);

app.post('/addlunch',addLunch)
app.get('/getlunch',getLunch)


app.post('/adddinner',addDinner)
app.get('/getdinner',getDinner)


app.post('/addbev',addBev);
app.get('/getbev',getBev);
  

app.get('/getbooking',getBookings);
app.post('/addbooking',addBooking);