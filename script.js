const bankData = [
{ title: "هانكوك", rank: "المؤسسة", money: "∞" },
{ title: "روكيا", rank: "المؤسسة", money: "∞" },
{ title: "اليساندرو", rank: "المؤسسة", money: "∞" },
{ title: "كاناو", rank: "المؤسسة", money: "∞" },
{ title: "سوكونا", rank: "المستشارة", money: "--" },
{ title: "--", rank: "الجنراله", money: "--" },
{ title: "--", rank: "رئيسة الوزراء", money: "--" },
{ title: "--", rank: "شينغامي", money: "--" },
{ title: "--", rank: "هاشيرا", money: "--" },
{ title: "--", rank: "ڤالكو", money: "--" },
{ title: "--", rank: "راين", money: "--" },
{ title: "--", rank: "راين", money: "--" },
{ title: "--", rank: "هوميز", money: "--" },
{ title: "ايرين", rank: "مشرفه متدربة", money: "--" },
{ title: "ايساغي", rank: "عضوة", money: "--" },
{ title: "تشوسو", rank: "عضوة", money: "--" },
{ title: "يومي", rank: "عضوة", money: "--" },
{ title: "ميريكو", rank: "عضوة", money: "--" },
{ title: "ميديا", rank: "عضوة", money: "--" },
{ title: "نوروي", rank: "عضوة", money: "--" },
{ title: "سو اي", rank: "عضوة", money: "--" },
{ title: "اوليفيا", rank: "عضوة", money: "--" },
{ title: "ديون هارت", rank: "عضوة", money: "--" },
{ title: "ايتاتشي", rank: "عضوة", money: "--" },
{ title: "ليسا", rank: "عضوة", money: "--" },
{ title: "يور", rank: "عضوة", money: "--" },
{ title: "ليفاي", rank: "عضوة", money: "--" },
{ title: "كيتا", rank: "عضوة", money: "--" },
{ title: "سينجو", rank: "عضوة", money: "--" },
{ title: "ميريوليونا", rank: "عضوة", money: "--" },
{ title: "اكاني", rank: "عضوة", money: "-" }
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
