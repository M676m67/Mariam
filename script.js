const bankData = [
{ title: "ايزن", rank: "المؤسسة", money: "∞" },
{ title: "روكيا", rank: "المؤسسة", money: "∞" },
{ title: "لينور", rank: "المؤسسة", money: "∞" },
{ title: "كيرا", rank: "النواب", money: "∞" },
{ title: "--", rank: "المستشارة", money: "--" },
{ title: "--", rank: "الجنراله", money: "--" },
{ title: "السيسي", rank: "رئيسة الوزراء", money: "--" },
{ title: "--", rank: "شينغامي", money: "--" },
{ title: "--", rank: "هاشيرا", money: "--" },
{ title: "غيو", rank: "ڤالكو", money: "--" },
{ title: "سوكونا", rank: "راين", money: "--" },
{ title: "ايرين", rank: "راين", money: "--" },
{ title: "ناغي", rank: "هوميز", money: "--" },
{ title: "--", rank: "مشرفه متدربة", money: "--" },
{ title: "ايزن", rank: "السفارة", money: "--" },
{ title: "روكيا", rank: "السفارة", money: "--" },
{ title: "ايرين", rank: "المتجر", money: "--" },
{ title: "ايرين", rank: "البنوك", money: "--" },
{ title: "ايزن", rank: "الانذات", money: "--" },
{ title: "سوكونا", rank: "الالقاب", money: "--" },
{ title: "السيسي", rank: "الترفيه", money: "--" },
{ title: "ايساغي", rank: "عضوة", money: "--" },
{ title: "ادريانا", rank: "عضوة", money: "--" },
{ title: "ارتيزيا", rank: "عضوة", money: "--" },
{ title: "ايما", rank: "عضوة", money: "--" },
{ title: "ارمين", rank: "عضوة", money: "--" },
{ title: "ايلومي", rank: "عضوة", money: "--" },
{ title: "اماني", rank: "عضوة", money: "--" },
{ title: "آني", rank: "عضوة", money: "--" },
{ title: "إينو", rank: "عضوة", money: "--" },
{ title: "اتسوشي", rank: "عضوة", money: "--" },
{ title: "اهيون", rank: "عضوة", money: "--" },
{ title: "اوباناي", rank: "عضوة", money: "--" },
{ title: "ألوكا", rank: "عضوة", money: "--" },
{ title: "اليا", rank: "عضوة", money: "--" },
{ title: "اكازا", rank: "عضوة", money: "--" },
{ title: "اريكينو", rank: "عضوة", money: "--" },
{ title: "اومارو", rank: "عضوة", money: "--" },
{ title: "اومي", rank: "عضوة", money: "--" },
{ title: "بانكيك", rank: "عضوة", money: "--" },
{ title: "باتشيرا", rank: "عضوة", money: "--" },
{ title: "تاماكي", rank: "عضوة", money: "--" },
{ title: "توكيتو", rank: "عضوة", money: "--" },
{ title: "توجي", rank: "عضوة", money: "--" },
{ title: "تيتو", rank: "عضوة", money: "--" },
{ title: "تشويوان", rank: "عضوة", money: "--" },
{ title: "تشا هاي وو", rank: "عضوة", money: "--" },

{ title: "تايهيونغ", rank: "عضوة", money: "--" },
{ title: "توكا", rank: "عضوة", money: "--" },
{ title: "دوما", rank: "عضوة", money: "--" },
{ title: "داكي", rank: "عضوة", money: "--" },
{ title: "ديكو", rank: "عضوة", money: "--" },
{ title: "جونغكوك", rank: "عضوة", money: "--" },
{ title: "جيمين", rank: "عضوة", money: "--" },
{ title: "ران", rank: "عضوة", money: "--" },
{ title: "رورا", rank: "عضوة", money: "--" },
{ title: "روبين", rank: "عضوة", money: "--" },
{ title: "رين", rank: "عضوة", money: "--" },
{ title: "ريزي", rank: "عضوة", money: "--" },
{ title: "رييونا", rank: "عضوة", money: "--" },
{ title: "ريو", rank: "عضوة", money: "--" },
{ title: "رودو", rank: "عضوة", money: "--" },
{ title: "زورو", rank: "عضوة", money: "--" },
{ title: "ساكورا", rank: "عضوة", money: "--" },
{ title: "سيلفيا", rank: "عضوة", money: "--" },
{ title: "سايفا", rank: "عضوة", money: "--" },
{ title: "سيت", rank: "عضوة", money: "--" },
{ title: "شينوبو", rank: "عضوة", money: "--" },
{ title: "شانكس", rank: "عضوة", money: "--" },
{ title: "شادو", rank: "عضوة", money: "--" },
{ title: "غيو", rank: "عضوة", money: "--" },
{ title: "غامبول", rank: "عضوة", money: "--" },
{ title: "فينتي", rank: "عضوة", money: "--" },
{ title: "فيرموث", rank: "عضوة", money: "--" },
{ title: "فانا", rank: "عضوة", money: "--" },
{ title: "فايلوت", rank: "عضوة", money: "--" },
{ title: "كارينا", rank: "عضوة", money: "--" },
{ title: "كاغو", rank: "عضوة", money: "--" },
{ title: "كيلوا", rank: "عضوة", money: "--" },
{ title: "كاناي", rank: "عضوة", money: "--" },
{ title: "كوشينا", rank: "عضوة", money: "--" },
{ title: "كوهينو", rank: "عضوة", money: "--" },
{ title: "ليلي", rank: "عضوة", money: "--" },
{ title: "ماكي", rank: "عضوة", money: "--" },
{ title: "مايكل جاكسون", rank: "عضوة", money: "--" },
{ title: "مايك", rank: "عضوة", money: "--" },
{ title: "ميتسوري", rank: "عضوة", money: "--" },
{ title: "مارنا", rank: "عضوة", money: "--" },
{ title: "مينوري", rank: "عضوة", money: "--" },
{ title: "ماو ماو", rank: "عضوة", money: "--" },
{ title: "ميكاسا", rank: "عضوة", money: "--" },
{ title: "مابيل", rank: "عضوة", money: "--" },
{ title: "نيزوكو", rank: "عضوة", money: "--" },
{ title: "نامي", rank: "عضوة", money: "--" },
{ title: "ميناتو", rank: "عضوة", money: "--" },
{ title: "موزان", rank: "عضوة", money: "--" },
{ title: "ميليز", rank: "عضوة", money: "--" },
{ title: "ماي", rank: "عضوة", money: "--" },
{ title: "نيفير", rank: "عضوة", money: "--" },
{ title: "نيشيميا", rank: "عضوة", money: "--" },
{ title: "نانامي", rank: "عضوة", money: "--" },
{ title: "ناغي", rank: "عضوة", money: "--" },
{ title: "نيل", rank: "عضوة", money: "--" },
{ title: "نامجون", rank: "عضوة", money: "--" },
{ title: "نوبارا", rank: "عضوة", money: "--" },
{ title: "هانابي", rank: "عضوة", money: "--" },
{ title: "هانجي", rank: "عضوة", money: "--" },
{ title: "هرقل", rank: "عضوة", money: "--" },
{ title: "واغوري", rank: "عضوة", money: "--" },
{ title: "هيماوراي", rank: "عضوة", money: "--" },
{ title: "باكوغو", rank: "عضوة", money: "--" }
];

const tableBody = document.getElementById("bankTable");

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.rank}</td>
      <td>${item.money}</td>
    `;
    tableBody.appendChild(row);
  });
}

renderTable(bankData);

document.getElementById("searchInput").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const filtered = bankData.filter(item =>
    item.title.toLowerCase().includes(value)
  );
  renderTable(filtered);
});

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";
  
  const duration = 12 + Math.random() * 10;
  
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = duration + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
  
  document.body.appendChild(snowflake);
  
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

setInterval(createSnowflake, 350);
