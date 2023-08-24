"use strict";
const guestList = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Isaac Newton"
];
// Print the message about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add new guests to the list
guestList.unshift("Marie Curie"); // Add at the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla"); // Add to the middle
guestList.push("Ada Lovelace"); // Add to the end
// Send out invitations to all guests, including the new ones
for (const guest of guestList) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner gathering. It would be an honor to have you join us for an evening of enlightening conversation and camaraderie.\n\nDate: [Insert Date]\nTime: [Insert Time]\nLocation: [Insert Location]\n\nPlease let us know if you can attend. We eagerly await your response.\n\nSincerely,\n[Your Name]`);
    console.log("------------------");
}
