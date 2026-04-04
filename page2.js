const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const locationInput = document.getElementById("location");
const professionInput = document.getElementById("profession");

// LIVE PREVIEW
nameInput.oninput = () =>
  previewName.innerText = nameInput.value || "Your Name";

emailInput.oninput = () =>
  previewEmail.innerText = emailInput.value || "email@example.com";

phoneInput.oninput = () =>
  previewPhone.innerText = phoneInput.value || "+91 00000 00000";

locationInput.oninput = () =>
  previewLocation.innerText = locationInput.value || "City";

professionInput.oninput = () =>
  previewProfession.innerText = professionInput.value || "Profession";


// NEXT BUTTON
document.querySelector(".next-btn").onclick = () => {

  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("phone", phoneInput.value);
  localStorage.setItem("location", locationInput.value);
  localStorage.setItem("profession", professionInput.value);

  window.location.href = "page3.html";
};