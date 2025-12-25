const bankData = [
  { title: "ابوياشيكي", rank: "الإمبراطور", money: "10000K" },
  { title: "كيرا", rank: "نائب الإمبراطور", money: "1000K" },
  { title: "يوريتشي", rank: "البارون", money: "1000K" },
  { title: "--", rank: "نواب البارون", money: "--" },
  { title: "--", rank: "الملك", money: "--" },
  { title: "--", rank: "نائب الملك", money: "--" },
  { title: "--", rank: "الدوق", money: "--" },
  { title: "--", rank: "نائب الدوق", money: "--" },
  { title: "--", rank: "الكونت", money: "--" },
  { title: "--", rank: "نائب الكونت", money: "--" },
  { title: "--", rank: "مسؤول السفاره", money: "--" },
  { title: "--", rank: "اللورد", money: "--"},
  { title: "--", rank: "الوزير", money: "--" },
  { title: "--", rank: "السفير", money: "--" },
  { title: "ناروتو", rank: "الأدميرال", money: "35k" },
  { title: "سوهو", rank: "نواب الأدميرال", money: "30k" },
  { title: "ايتشيغو", rank: "نواب الأدميرال", money: "30k" },
  { title: "--", rank: "عميد", money: "--" },
  { title: "--", rank: "تشيبوكاي", money: "--" },
  { title: "--", rank: "ملازم", money: "--" },
  { title: "--", rank: "حامل بيرق", money: "--" },
  { title: "--", rank: "حامل رايه", money: "--" },
  { title: "اوسوب", rank: "مشرف متدرب", money: "20K" },
  { title: "ساسكي", rank: "مشرف متدرب", money: "20K" },
  { title: "يامي", rank: "عضو", money: "5K" },
  { title: "يوها باخ", rank: "عضو", money: "5K" },
  { title: "يوليوس", rank: "عضو", money: "5K" },
  { title: "هيماواري", rank: "عضو", money: "5K" },
  { title: "ميغومي", rank: "عضو", money: "5K" },
  { title: "مايكي", rank: "عضو", money: "5K" },
  { title: "مادارا", rank: "عضو", money: "5K" },
  { title: "لوفي", rank: "عضو", money: "5K" },
  { title: "لويد", rank: "عضو", money: "5K" },
  { title: "كانيكي", rank: "عضو", money: "5K" },
  { title: "كاكاشي", rank: "عضو", money: "5K" },
  { title: "غوجو", rank: "عضو", money: "5K" },
  { title: "غوكو", rank: "عضو", money: "5K" },
  { title: "شادو", rank: "عضو", money: "5K" },
  { title: "سوكونا", rank: "عضو", money: "5K" },
  { title: "سابو", rank: "عضو", money: "5K" },
  { title: "سينكو", rank: "عضو", money: "5K" },
  { title: "زاوفان", rank: "عضو", money: "5K" },
  { title: "روبي", rank: "عضو", money: "5K" },
  { title: "جينوو", rank: "عضو", money: "5K" },
  { title: "توجي", rank: "عضو", money: "5K" },
  { title: "تانجيرو", rank: "عضو", money: "5K" },
  { title: "بلاك", rank: "عضو", money: "5K" },
  { title: "ايلينا", rank: "عضو", money: "5K" },
  { title: "ايس", rank: "عضو", money: "5K" },
  { title: "اكازا", rank: "عضو", money: "5K" },
  { title: "ايزن", rank: "عضو", money: "5K" }
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
