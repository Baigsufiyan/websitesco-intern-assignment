document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("❌ Please fill in both fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("❌ Email must contain '@'.");
    return;
  }

  alert(`✅ Success! Form submitted:\nName: ${name}\nEmail: ${email}`);
});
