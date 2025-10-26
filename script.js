document.addEventListener('DOMContentLoaded', () => {
  // Animation fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  fadeEls.forEach(el => observer.observe(el));

  // Formulaire Google Apps Script
  const form = document.getElementById('programForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message');
    const scriptURL = "https://script.google.com/macros/s/AKfycbyXATQQwmfBDQ0wqjIFfJHNhwf9JtHXLu6cdKJOKmaQmxUGh7lVBKDuzwu34sKNLtNb0w/exec";

    if (!name || !email) {
      message.textContent = "Veuillez remplir tous les champs.";
      message.style.color = "red";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.textContent = "Adresse e-mail invalide.";
      message.style.color = "red";
      return;
    }

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({ name, email }),
      });
      const result = await response.json();

      if (result.result === "success") {
        message.textContent = "✅ Merci ! Redirection vers ton programme...";
        message.style.color = "lightgreen";
        setTimeout(() => {
          window.location.href = "https://docs.google.com/spreadsheets/d/1jdNHHfwt9xcQX8ieAnfXIOFeX9q6s9unamM_Pbi-FPY/edit?usp=drivesdk";
        }, 1500);
      } else {
        message.textContent = "Erreur, réessaye.";
        message.style.color = "red";
      }
    } catch (err) {
      message.textContent = "Erreur de connexion.";
      message.style.color = "red";
    }
  });
});
