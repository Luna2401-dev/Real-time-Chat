// LOAD personal info from Page 1

document.getElementById("pName").innerText =
  localStorage.getItem("name") || "Your Name";

document.getElementById("pEmail").innerText =
  localStorage.getItem("email") || "";

document.getElementById("pPhone").innerText =
  localStorage.getItem("phone") || "";

document.getElementById("pLocation").innerText =
  localStorage.getItem("location") || "";

document.getElementById("pProfession").innerText =
  localStorage.getItem("profession") || "";


// LIVE UPDATE FUNCTION
function updatePreview() {
  document.getElementById("pEducation").innerText =
    document.getElementById("education").value;

  document.getElementById("pSkills").innerText =
    document.getElementById("skills").value;

  document.getElementById("pExperience").innerText =
    document.getElementById("experience").value;
}

// LISTEN FOR INPUT
document.querySelectorAll("input, textarea")
  .forEach(el => el.addEventListener("input", updatePreview));


// SAVE DATA
document.querySelector(".save-btn").onclick = () => {

  localStorage.setItem("education",
    document.getElementById("education").value);

  localStorage.setItem("skills",
    document.getElementById("skills").value);

  localStorage.setItem("experience",
    document.getElementById("experience").value);

  alert("Saved! Ready for next step.");
};

window.onload = function () {

  document.getElementById("previewName").innerText =
    localStorage.getItem("fullName");

  document.getElementById("previewEmail").innerText =
    localStorage.getItem("email");

  document.getElementById("previewPhone").innerText =
    localStorage.getItem("phone");

  document.getElementById("previewCity").innerText =
    localStorage.getItem("city");
};