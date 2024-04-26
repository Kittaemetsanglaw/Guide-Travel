const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

// เพิ่ม event listener เมื่อโฮเวอร์ที่ box1
box1.addEventListener('mouseover', function () {
  // เลือกอิลิเมนต์ <p>
  const paragraph = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "ภาคเหนือ"
  paragraph.textContent = "ยินดีต้อนรับ สู่ภาคเหนือสวัสดีตอนเช้าภาคเหนือ! ท้องฟ้าสีครามทำให้เราตื่นเต้นเสียบัตรเข้าสู่โลกของภูเขาและป่าไม้อันงดงาม. ที่นี่เป็นที่บ้านของธรรมชาติที่สุดแสนสวย และเต็มไปด้วยสีสันที่เหมือนไม่จบไม่สิ้น. การเดินทางมาถึงที่นี่ คือการเริ่มต้นของการผจญภายแห่งความงดงามและประสบการณ์ที่ล้ำค่า เพราะในภาคเหนือ มีทุกอย่างที่ทำให้ใจเต้นสนุกสนาน!\n\nที่นี่ไม่ได้มีแค่ธรรมชาติที่สวยงามเท่านั้น แต่ยังมีวัฒนธรรมและประเพณีที่น่าสนใจมากมาย จากการลอยกระทงในงานประเพณีลอยกระทงที่น่าตื่นเต้น ไปจนถึงการชิมอาหารเหนืออร่อย ซึ่งเต็มไปด้วยรสชาติที่ไม่เหมือนใคร\n\nแต่ที่นี่ไม่ได้มีแต่สิ่งที่สวยงามและอร่อยเท่านั้น ยังมีความเป็นส่วนตัวและเป็นกันเองของคนในภาคเหนือ ที่อบอุ่นเหมือนครอบครัว ซึ่งทำให้การเดินทางมาที่นี่เป็นประสบการณ์ที่ไม่มีที่ไหนเทียบได้";
  paragraph.style.transition = "4s";
});

// เพิ่ม event listener เมื่อโฮเวอร์ที่ box2
box2.addEventListener('mouseover', function () {
  // เลือกอิลิเมนต์ <p>
  const paragraph = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "ภาคใต้"
  paragraph.textContent = "ยินดีต้อนรับสู่ภาคใต้! ที่นี่เป็นแดดร้อนแสนจะเผาผลาญ แต่ก็เป็นที่บ้านของความสดชื่นและความสุขอันเป็นเอกลักษณ์ เมื่อคุณให้ตัวเองได้สัมผัสกับประสบการณ์ที่สัมผัสได้จริงของชีวิตใต้แดนซึ่งแตกต่างอย่างมหาศาลจากที่ใดมากกว่า!และเราไม่สามารถพูดถึงภาคใต้โดยไม่พูดถึงอาหารอร่อยและหอยที่อร่อยที่สุดในโลกได้ที่นี่คุณจะได้สัมผัสรสชาติที่หวานนุ่มของกุ้ง, ปู, และหอยที่ถูกต้องที่สุดจนคุณจะลืมความหิวได้อย่างไม่มีวันลืม";
  paragraph.style.transition = "4s";
});

// เพิ่ม event listener เมื่อไม่มีการโฮเวอร์ที่ box1
box3.addEventListener('mouseout', () => {
  // เลือกอิลิเมนต์ <p>
  const paragraph = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "ยินดีตอนรับ"
  paragraph.textContent = "ยินดีต้อนรับสู่ภาคตะวันออก! ที่นี่เป็นแดนแห่งความสดชื่นและความอบอุ่น ด้วยอากาศที่เย็นสบายและแสงแดดที่ส่องประกายอย่างสวยงาม การเดินทางมายังภาคตะวันออกเหมือนการเดินทางมาสู่โลกใบใหม่ที่ออกแบบมาเพื่อให้คุณได้สัมผัสความประทับใจและประสบการณ์ที่ลืมไม่ลง!ที่นี่คุณจะได้พบกับสถานที่ท่องเที่ยวที่น่าทึ่งมากมาย ตั้งแต่เมืองโบราณที่เต็มไปด้วยประวัติศาสตร์ ไปจนถึงชายหาดที่สวยงามและน้ำทะเลที่ใสจนเห็นใต้น้ำได้ชัดเจน เป็นเพียงส่วนหนึ่งของความสวยงามแห่งภาคตะวันออกที่คุณจะได้สัมผัสได้ในทุกมุมมองของการเดินทางของคุณ";
});

// เพิ่ม event listener เมื่อไม่มีการโฮเวอร์ที่ box2
box4.addEventListener('mouseout', () => {
  // เลือกอิลิเมนต์ <p>
  const paragraph = document.querySelector('.phuket p');
  // เปลี่ยนข้อความใน <p> เป็น "ยินดีตอนรับ"
  paragraph.textContent = "ยินดีต้อนรับสู่ภาคตะวันตก! ที่นี่เป็นแดนแห่งความสดชื่นและความสงบสุข ด้วยพรรคเย็นสบายและอากาศที่ดีตลอดปี การเดินทางมายังภาคตะวันตกเหมือนการเดินทางมาสู่โลกที่ผ่องใสและเต็มไปด้วยความสุขและความสุขอันไม่มีวันสิ้นสุด!ที่นี่คุณจะได้พบกับสถานที่ท่องเที่ยวที่น่าทึ่งและมหัศจรรย์มากมาย ตั้งแต่เมืองเก่าที่มีประวัติศาสตร์เป็นที่น่าสนใจ ไปจนถึงภูเขาที่สวยงามและทะเลที่สวยงามที่ทำให้ใจเต้นสนุกสนาน ทุกสิ่งทุกอย่างในภาคตะวันตกจะทำให้คุณรู้สึกสนุกสนานและประทับใจได้อย่างไม่มีที่สิ้นสุด";
});

// เพิ่ม event listener เมื่อไม่มีการโฮเวอร์ที่ box3



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


