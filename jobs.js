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

document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.getElementById("jobsContainer");
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  if (jobs.length === 0) {
    jobsContainer.innerHTML = "<p>No jobs posted yet.</p>";
    return;
  }

  jobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p><strong>Category:</strong> ${job.category}</p>
      <p><strong>Experience:</strong> ${job.experience || 'N/A'}</p>
      <p><strong>Skills:</strong> ${job.skills.join(", ")}</p>
      <p><strong>Salary:</strong> ${job.salary || 'N/A'}</p>
      <p><strong>Remote:</strong> ${job.remote === "true" ? "Yes" : "No"}</p>
      <p><strong>Description:</strong> ${job.description || 'N/A'}</p>
      <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
    `;
    jobsContainer.appendChild(jobCard);
  });
});
