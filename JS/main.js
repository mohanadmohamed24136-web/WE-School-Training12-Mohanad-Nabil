const body = document.body;
const themeBtn = document.getElementById("themeToggle");
const reveals = document.querySelectorAll(".reveal");
const form = document.getElementById("contactForm");
const toastEl = document.getElementById("successToast");

// Dark mode
themeBtn.onclick = () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
};

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Scroll reveal
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Form validation
form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  let valid = true;

  document.querySelectorAll(".error-text").forEach(e => e.style.display = "none");

  if (name.value.trim() === "") {
    name.nextElementSibling.style.display = "block";
    valid = false;
  }

  if (!email.value.includes("@")) {
    email.nextElementSibling.style.display = "block";
    valid = false;
  }

  if (valid) {
    const toast = new bootstrap.Toast(toastEl, { delay: 1500 });
    toast.show();
    setTimeout(() => location.reload(), 1600);
  }
});
