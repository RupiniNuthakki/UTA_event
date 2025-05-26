
const schedule = [
  { dayNumber: 1, title: "Day 1 - Idol Installation", date: "2022-08-31", time: "5:00 PM", description: "Start with Ganesha idol sthapana and light decorations.", icon: "idol.jpg" },
  { dayNumber: 2, title: "Day 2 - Flower Offering", date: "2022-09-01", time: "5:30 PM", description: "Flowers offering to Ganesha by students.", icon: "flower.jpg" },
  { dayNumber: 3, title: "Day 3 - Aarti & Prasadam", date: "2022-09-02", time: "5:30 PM", description: "Perform aarti and distribute prasadam.", icon: "aarti.jpg" },
  { dayNumber: 4, title: "Day 4 - DIY Modak Workshop", date: "2022-09-03", time: "5:00 PM", description: "Make modaks together and offer to Ganesha.", icon: "modak.jpg" },
  { dayNumber: 5, title: "Day 5 - Cultural Event", date: "2022-09-04", time: "6:00 PM", description: "Music, dance and devotional skits by students.", icon: "music.jpg" },
  { dayNumber: 6, title: "Day 6 - Drawing Competition", date: "2022-09-05", time: "4:30 PM", description: "Ganesha-themed art contest with prizes.", icon: "drawing.jpg" },
  { dayNumber: 7, title: "Day 7 - Group Chanting", date: "2022-09-06", time: "5:30 PM", description: "Chant Ganapati Atharvashirsha together.", icon: "chanting.jpg" },
  { dayNumber: 8, title: "Day 8 - Lamp Decoration", date: "2022-09-07", time: "5:00 PM", description: "Decorate lamps and pray together.", icon: "diya.jpg" },
  { dayNumber: 9, title: "Day 9 - Grand Celebration & Visarjan", date: "2022-09-08", time: "6:00 PM", description: "Final day celebration with visarjan and cultural fest.", icon: "visarjan.jpg" }
];

const container = document.getElementById('days-container');
schedule.forEach((day) => {
  const card = document.createElement('div');
  card.classList.add('fade-in');
  card.className = 'day-card layout-right-image';
  if (day.dayNumber % 2 === 0) {
    card.className = 'day-card layout-left-image';
  }
  if (day.dayNumber === 9) {
    card.classList.add('highlight-day');
  }

  const iconContainer = document.createElement('div');
  iconContainer.className = 'icon-container';

  const iconImg = document.createElement('img');
  iconImg.src = `assets/${day.icon}`;
  iconImg.alt = "Event Icon";
  iconContainer.appendChild(iconImg);

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  textContainer.innerHTML = `
    <h3>${day.title}</h3>
    <p><strong>Date:</strong> ${day.date}</p>
    <p><strong>Time:</strong> ${day.time}</p>
    <p>${day.description}</p>
  `;

  card.appendChild(iconContainer);
  card.appendChild(textContainer);
  container.appendChild(card);
});

// Countdown Timer
const eventDate = new Date("2022-09-09T18:00:00");
const now = new Date();

if (eventDate < now) {
  document.getElementById("timer").textContent =
    "🙏 This year's Vinayaka Chavithi celebrations concluded. Stay tuned for next year!";
} else {
  function updateCountdown() {
    const diff = eventDate - new Date();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
// Scroll-triggered fade-in effect
function handleScrollAnimations() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    if (isVisible) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations); // Run on page load
function scrollGallery(direction) {
  const track = document.querySelector('.carousel-track');
  const scrollAmount = 270; // width + gap
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function scrollGallery(direction) {
  const track = document.querySelector('.carousel-track');
  const scrollAmount = 270; // Adjust if needed
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
