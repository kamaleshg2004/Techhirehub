const formTitle = document.getElementById('formTitle');
const toggleText = document.getElementById('toggleText');
const toggleLink = document.getElementById('toggleLink');
const emailGroup = document.getElementById('emailGroup');
const submitBtn = document.getElementById('submitBtn');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

let isLogin = true;

// Toggle between Login and SignUp
function toggleLinkEvent(e) {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login to TechHireHub";
    submitBtn.textContent = "Login";
    toggleText.innerHTML = `New user? <a href="#" id="toggleLink">Sign Up</a>`;
    emailGroup.style.display = "none";
  } else {
    formTitle.textContent = "Sign Up for TechHireHub";
    submitBtn.textContent = "Sign Up";
    toggleText.innerHTML = `Already registered? <a href="#" id="toggleLink">Login</a>`;
    emailGroup.style.display = "block";
  }
  
  document.getElementById('toggleLink').addEventListener('click', toggleLinkEvent);
}

toggleLink.addEventListener('click', toggleLinkEvent);

// Handle Password Show/Hide
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle icon
  if (type === 'text') {
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  } else {
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  }
});

// 👉 Form Submit Event
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const selectedRole = document.getElementById("userType").value;

  if (username && password && selectedRole) {
    // ✅ Save the role in localStorage
    localStorage.setItem("role", selectedRole);
    console.log("Role saved:", selectedRole);

    // ✅ Redirect to your main page
    window.location.href = "home.html"; // change to home.html if needed
  } else {
    alert("Please fill in all fields and select a role.");
  }
});


