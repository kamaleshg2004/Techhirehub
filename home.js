document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


// Logout function - you can modify this to suit your actual logout mechanism
function logout() {
  // Redirect directly to the login page (change URL if needed)
  window.location.href = "/login/login.html"; 
}


const counters = document.querySelectorAll(".counter");
const statsSection = document.getElementById("statsSection");

const animateCounters = () => {
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statsSection.classList.add("show");
      animateCounters();
      observer.unobserve(statsSection);
    }
  });
}, { threshold: 0.5 });

observer.observe(statsSection);

  document.querySelector('.footer-links a[href="/"]').addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("aboutModal").style.display = "block";
  });

  document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("aboutModal").style.display = "none";
  });

  window.addEventListener("click", function (e) {
    const modal = document.getElementById("aboutModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  document.querySelector('.footer-links a[href="#"]').addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contactModal").style.display = "block";
  });

  function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
  }

  // Optional: Handle form submit (you can connect to backend/email later)
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    closeContactModal();
  });


  const privacyLink = document.querySelector('.footer-links a:nth-child(3)');
  privacyLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("privacyModal").style.display = "block";
  });

  function closePrivacyModal() {
    document.getElementById("privacyModal").style.display = "none";
  }

