// Fade-in effect for landing text
window.addEventListener('load', () => {
  document.getElementById('heading2').classList.add('fade-in');
});

// Typewriter effect
const texts = ["Student", "Developer", "Innovator", "Quick Learner", "Curious Mind"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typewriter').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause before next word
  } else {
    setTimeout(type, 150);
  }
}

type();


document.querySelector("#lkdin-btn").onclick = () => {
  window.open("https://www.linkedin.com/in/prthm-jain?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BOjuHn6zoQvG4EZUmYjPW3g%3D%3D", "_blank");
};

document.querySelector("#resume-btn").onclick = () => {
  window.open("PJ_RESUME.pdf", "_blank");
};

//projects
document.querySelector("#proj1-btn").onclick = () => {
  window.open("https://imfocused.github.io/TicTacToe/", "_blank");
}
document.querySelector("#proj2-btn").onclick = () => {
  window.open("https://imfocused.github.io/RockPaperScissors-Game/", "_blank");
}
document.querySelector("#proj3-btn").onclick = () => {
  window.open("https://imfocused.github.io/CurrencyConverter/", "_blank");
}
document.querySelector("#view-more-a").onclick = () => {
  window.open("https://github.com/ImFocused", "_blank");
}

// certificates
document.querySelector("#certi1").onclick = () => {
  window.open("ibm_certi.pdf", "_blank");
}
document.querySelector("#certi2").onclick = () => {
  window.open("Microsoftey_certi.pdf", "_blank");
}
document.querySelector("#certi3").onclick = () => {
  window.open("infosyspython.pdf", "_blank");
}
document.querySelector("#certi4").onclick = () => {
  window.open("1m1bibmskils.pdf", "_blank");
}
document.querySelector("#certi5").onclick = () => {
  window.open("excelr_certi.pdf", "_blank");
}
document.querySelector("#view-more-certi").onclick = () => {
  window.open("https://www.linkedin.com/in/prthm-jain?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3Ba9HpHvFjR%2B2VPzUoWmO%2Brg%3D%3D", "_blank");
}



const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted!");
  console.log("Name:", document.getElementById("name").value);
  console.log("Email:", document.getElementById("email").value);
  console.log("Message:", document.getElementById("message").value);

  successMessage.style.display = "block";
  form.reset();
});