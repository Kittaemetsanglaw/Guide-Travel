const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

// เพิ่ม event listener เมื่อโฮเวอร์ที่ box1
box1.addEventListener('mouseover', function () {
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


