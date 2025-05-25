const schedule = [
  { day: 1, title: "Day 1 - Idol Installation", date: "2022-08-31", time: "5:00 PM", description: "Start with Ganesha idol sthapana and light decorations.", icon: "idol.jpg" },
  { day: 2, title: "Day 2 - Flower Offering", date: "2022-09-01", time: "5:30 PM", description: "Flowers offering to Ganesha by students.", icon: "flower.jpg" },
  { day: 3, title: "Day 3 - Aarti & Prasadam", date: "2022-09-02", time: "5:30 PM", description: "Perform aarti and distribute prasadam.", icon: "aarti.jpg" },
  { day: 4, title: "Day 4 - DIY Modak Workshop", date: "2022-09-03", time: "5:00 PM", description: "Make modaks together and offer to Ganesha.", icon: "modak.jpg" },
  { day: 5, title: "Day 5 - Cultural Event", date: "2022-09-04", time: "6:00 PM", description: "Music, dance and devotional skits by students.", icon: "music.jpg" },
  { day: 6, title: "Day 6 - Drawing Competition", date: "2022-09-05", time: "4:30 PM", description: "Ganesha-themed art contest with prizes.", icon: "drawing.jpg" },
  { day: 7, title: "Day 7 - Group Chanting", date: "2022-09-06", time: "5:30 PM", description: "Chant Ganapati Atharvashirsha together.", icon: "chanting.jpg" },
  { day: 8, title: "Day 8 - Lamp Decoration", date: "2022-09-07", time: "5:00 PM", description: "Decorate lamps and pray together.", icon: "diya.jpg" },
  { day: 9, title: "Day 9 - Grand Celebration & Visarjan", date: "2022-09-08", time: "6:00 PM", description: "Final day celebration with visarjan and cultural fest.", icon: "visarjan.jpg" }
];

const container = document.getElementById("schedule-container");

schedule.forEach(event => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="assets/${event.icon}" alt="${event.title}" />
    <h3>${event.title}</h3>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Time:</strong> ${event.time}</p>
    <p>${event.description}</p>
  `;
  container.appendChild(card);
});
