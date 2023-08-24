"use strict";
const guestList = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie"
];
for (const guest of guestList) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner gathering. It would be an honor to have you join us for an evening of enlightening conversation and camaraderie.\n\nDate: [Insert Date]\nTime: [Insert Time]\nLocation: [Insert Location]\n\nPlease let us know if you can attend. We eagerly await your response.\n\nSincerely,\n[Your Name]`);
    console.log("------------------");
}
