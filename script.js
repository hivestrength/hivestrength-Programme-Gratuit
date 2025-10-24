// Script handles form validation, POST to Apps Script and redirect to Drive program
const scriptURL = 'https://script.google.com/macros/s/AKfycbz-sgcc3671Qx06QdWObJ6feh_BnzTqs2UpJqenElCJg1WjAUC-awgVajFQdMpl7_30Jg/exec';
const driveLink = 'https://docs.google.com/spreadsheets/d/1jdNHHfwt9xcQX8ieAnfXIOFeX9q6s9unamM_Pbi-FPY/edit?usp=drivesdk';

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const msgEl = document.getElementById('form-msg');

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();

  if (!name) {
    msgEl.textContent = 'Merci d’indiquer ton nom et prénom.';
    nameEl.focus();
    return;
  }
  if (!email || !isValidEmail(email)) {
    msgEl.textContent = 'Merci d’indiquer une adresse e‑mail valide.';
    emailEl.focus();
    return;
  }

  // Disable UI while sending
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';

  // Send to Apps Script
  try {
    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ name: name, email: email })
    });
    // Show success message then redirect to Drive
    msgEl.textContent = '✅ Inscription enregistrée — redirection vers le programme...';
    // small delay to ensure Apps Script receives the request
    setTimeout(function() {
      window.location.href = driveLink;
    }, 700);
  } catch (err) {
    console.error(err);
    msgEl.textContent = '❌ Erreur lors de l\'envoi, réessaie plus tard.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Accéder au programme';
  }
});
