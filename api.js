const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const dateStr = `${yyyy}-${mm}-${dd}`;

fetch(`https://digidates.de/api/v1/week?date=${dateStr}`)
  .then(response => response.json())
  .then(data => {
    const badge = document.createElement("div");
    badge.className = "week-badge";
    badge.innerHTML = `
      <span class="material-symbols-outlined">calendar_today</span>
      <span>Week <strong>${data.week}</strong></span>
    `;

    document.querySelector(".nav-action").prepend(badge);
  })
  .catch(err => console.error("API error:", err));