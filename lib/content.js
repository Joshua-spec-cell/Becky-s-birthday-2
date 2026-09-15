// ============================================================
//  EDIT EVERYTHING HERE.
//  You should almost never need to touch the other files.
// ============================================================

export const person = {
  name: "Becky Esther",
  initials: "B.E.",
  heroPhoto: "/images/becky-hero.jpg", // put the cut-out / portrait here
  heroKicker: "September 15",
  heroLine:
    "A little celebration of the beautiful moments, memories, laughter and person that is Becky Esther.",
};

export const music = {
  src: "/audio/birthday-song.mp3",
  volume: 0.45, // 0 to 1
};

// ------------------------------------------------------------
//  GALLERY — "A Collection of Moments"
//  Drop your files in public/images/ and list them here.
//  Images are never cropped; they keep their real shape.
//  `wide: true` makes a photo span two columns on desktop.
// ------------------------------------------------------------
export const memories = [
  { image: "/images/photo1.jpg", caption: "The smile that needed no explanation.", tilt: -2 },
  { image: "/images/photo2.jpg", caption: "Dressed up and living for it.", tilt: 1.5 },
  { image: "/images/photo3.jpg", caption: "A pop of colour, always.", tilt: -1 },
  { image: "/images/photo4.jpg", caption: "Good food, better company.", tilt: 2 },
  { image: "/images/photo5.jpg", caption: "Main character energy.", tilt: -1.5 },
  { image: "/images/photo6.jpg", caption: "One of those moments worth keeping.", tilt: 1 },
  { image: "/images/photo7.jpg", caption: "Sunshine behaves differently around her.", tilt: -2.5 },
  { image: "/images/photo8.jpg", caption: "No notes. None at all.", tilt: 1.8 },
];

// ------------------------------------------------------------
//  TIMELINE — "The Moments Along the Way"
// ------------------------------------------------------------
export const timeline = [
  {
    year: "2021",
    title: "Where it started",
    text: "Replace this with what made that year matter.",
    image: "/images/photo1.jpg",
  },
  {
    year: "2022",
    title: "Finding the rhythm",
    text: "A year of figuring things out and doing it anyway.",
    image: "/images/photo3.jpg",
  },
  {
    year: "2023",
    title: "Bigger rooms",
    text: "New people, new places, same unmistakable laugh.",
    image: "/images/photo5.jpg",
  },
  {
    year: "2024",
    title: "Hitting her stride",
    text: "The year things clicked into place.",
    image: "/images/photo6.jpg",
  },
  {
    year: "2025",
    title: "Still going",
    text: "And somehow only getting better at it.",
    image: "/images/photo8.jpg",
  },
];

// ------------------------------------------------------------
//  MESSAGE CARDS — "A Few Words For You"
// ------------------------------------------------------------
export const messages = [
  { text: "May this new chapter bring you more reasons to smile.", from: "" },
  { text: "May you keep becoming the person you're meant to be.", from: "" },
  { text: "May the memories ahead be even better than the ones behind.", from: "" },
  { text: "Keep being wonderfully you. It's working.", from: "" },
  { text: "Here's to the plans that work out and the detours that turn out better.", from: "" },
];

// ------------------------------------------------------------
//  "WANT ANOTHER MEMORY?" — each tap shows a photo + a line
// ------------------------------------------------------------
export const randomMemories = [
  { image: "/images/photo2.jpg", text: "Remember this day? 😂" },
  { image: "/images/photo4.jpg", text: "This picture deserves its own museum." },
  { image: "/images/photo6.jpg", text: "Proof that Becky Esther has never had a bad photo." },
  { image: "/images/photo1.jpg", text: "Okay, this one is definitely going in the archives." },
  { image: "/images/photo7.jpg", text: "Unreasonably photogenic. It's genuinely unfair." },
  { image: "/images/photo3.jpg", text: "Screenshotted. Saved. Framed. Sorry." },
];

// ------------------------------------------------------------
//  WISH + FINALE
// ------------------------------------------------------------
export const wish = {
  heading: "For The Year Ahead",
  main:
    "May the year ahead bring you growth, laughter, meaningful moments, answered prayers, beautiful surprises and plenty of reasons to smile.",
  personal:
    "Replace this paragraph with something only you would say to her — the inside joke, the thing you're proud of her for, the thing you've never actually said out loud. That's the part she'll reread.",
  signoff: "— Replace with your name",
};

export const finale = {
  headline: "HAPPY BIRTHDAY, BECKY ESTHER",
  sub: "Here's to another chapter, another collection of memories, and many more reasons to celebrate.",
  button: "Replay the memories",
  footer: "Made with ❤️ for Becky Esther",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "memories", label: "Memories" },
  { id: "timeline", label: "Timeline" },
  { id: "messages", label: "Messages" },
  { id: "wish", label: "Final Wish" },
];
