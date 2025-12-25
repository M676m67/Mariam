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
  { title: "غوجو", rank: "الوزير", money: "40k" },
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
  { title: "ساسكي", rank: "مشرف متدرب", money: "20K" }
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
