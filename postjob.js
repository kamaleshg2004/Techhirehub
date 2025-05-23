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
  window.location.href = "/index.html"; 
}
document.addEventListener("DOMContentLoaded", () => {
  const postJobForm = document.getElementById("postJobForm");

  postJobForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values (correct IDs)
    const title = document.getElementById("title").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const type = document.getElementById("type").value;
    const salary = document.getElementById("salary").value;
    const description = document.getElementById("description").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
    const category = document.getElementById("category").value;
    const remote = document.getElementById("remote").value;
    const applyLink = document.getElementById("applyLink").value;
    const logo = document.getElementById("logo").value;

    // Validate required fields
    if (!title || !company || !location || !applyLink || !type || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create job object
    const job = {
      title,
      company,
      location,
      type,
      salary,
      description,
      experience,
      skills,
      category,
      remote,
      applyLink,
      logo
    };

    // Save to localStorage
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));

    // Show success message
    const oldMessage = document.querySelector(".success-message");
    if (oldMessage) oldMessage.remove();

    const successMessage = document.createElement("div");
    successMessage.textContent = "✅ Job posted successfully! Redirecting...";
    successMessage.className = "success-message";
    document.body.appendChild(successMessage);

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "jobs.html";
    }, 2000);
  });
});
