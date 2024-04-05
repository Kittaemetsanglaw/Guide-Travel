const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');
const axios = require('axios');
//const Cores = require('cores')

//MongoDB Connection
// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:1234@cpe302.pkvnn8b.mongodb.net/?retryWrites=true&w=majority&appName=CPE302', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// URL สำหรับเรียกใช้งาน API ของ OpenStreetMap เพื่อดึงข้อมูลแผนที่ของประเทศไทย
const apiUrl = 'https://nominatim.openstreetmap.org/search?country=Thailand&format=json';

global.loggedIn = null

//Contrroller
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')
const homeController = require('./controllers/homeController')

//Middleware
const redirectifAuth = require('./middleware/redirectifAuth')
const authMiddleware = require('./middleware/authMiddleware')
const { Mongoose } = require('mongoose')

app.use(express.static('public'))
app.use(express.json)
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
	secret: "node secret"
}))
app.use('*', (req, res, next) => {
	loggedIn = req.session.userId
})
app.set('view engine', 'ejs');

app.get('/', indexController)
app.get('/home', authMiddleware, homeController)
app.get('/login', redirectifAuth, loginController)
app.get('/register', redirectifAuth, registerController)
app.post('/user/register', redirectifAuth, storeUserController)
app.post('/user/login', redirectifAuth, loginUserController)
app.get('/logout', logoutController)


// เรียกใช้งาน API เพื่อดึงข้อมูลแผนที่
axios.get(apiUrl)
    .then(response => {
        const data = response.data;
        console.log(data); // แสดงข้อมูลที่ได้รับจาก API
    })
    .catch(error => {
        console.error('Error fetching map data:', error);
    });

app.listen(1410, () => {
	console.log("App listening on port 1410")
})

/*
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

// เพิ่ม event listener เมื่อโฮเวอร์ที่ box1
box1.addEventListener('mouseover', function(){
  // เลือกอิลิเมนต์ <p>
  const innerText = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "สวัสดีครับ"
  text.innerText = "ภาคเหนือ";
  paragraph.style.transittion = "4s";
  
});

// เพิ่ม event listener เมื่อไม่มีการโฮเวอร์ที่ box1
box1.addEventListener('mouseout', () => {
  // เลือกอิลิเมนต์ <p>
  const paragraph = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatem iure sunt praesentium repellat, quaerat, non at quam, saepe fugit labore consequuntur sequi repudiandae ab adipisci quae distinctio dolorem ducimus?"
  paragraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatem iure sunt praesentium repellat, quaerat, non at quam, saepe fugit labore consequuntur sequi repudiandae ab adipisci quae distinctio dolorem ducimus?";
});
*/


// // เลือกอิลิเมนต์ที่มีคลาสว่า box1
// const box1 = document.querySelector('.box1');

// // เพิ่ม event listener เมื่อโฮเวอร์ที่ box1
// box1.addEventListener('mouseover', () => {
//   // เลือกอิลิเมนต์ <p>
//   const paragraph = document.querySelector('.phuket p');
//   // เปลี่ยนข้อความใน <p> เป็น "สวัสดีครับ"
//   paragraph.textContent = "สวัสดีครับ";
// });

// // เพิ่ม event listener เมื่อไม่มีการโฮเวอร์ที่ box1
// box1.addEventListener('mouseout', () => {
//   // เลือกอิลิเมนต์ <p>
//   const paragraph = document.querySelector('.phuket p');
//   // เปลี่ยนข้อความใน <p> เป็น "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatem iure sunt praesentium repellat, quaerat, non at quam, saepe fugit labore consequuntur sequi repudiandae ab adipisci quae distinctio dolorem ducimus?"
//   paragraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatem iure sunt praesentium repellat, quaerat, non at quam, saepe fugit labore consequuntur sequi repudiandae ab adipisci quae distinctio dolorem ducimus?";
// });


