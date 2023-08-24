const guestList: string[] = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie"
];

// Print the guest who can't make it
const unableToAttend = "Marie Curie";
console.log(`${unableToAttend} is unable to attend the dinner.`);

// Replace the guest who can't make it with the new invitee
const newInvitee = "Isaac Newton";
const indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    guestList[indexOfUnableToAttend] = newInvitee;
}

// Send out new invitations
for (const guest of guestList) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to a dinner gathering. It would be an honor to have you join us for an evening of enlightening conversation and camaraderie.\n\nDate: [Insert Date]\nTime: [Insert Time]\nLocation: [Insert Location]\n\nPlease let us know if you can attend. We eagerly await your response.\n\nSincerely,\n[Your Name]`);
    console.log("------------------");
}
