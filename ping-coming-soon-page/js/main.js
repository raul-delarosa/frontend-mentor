const form  = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
  const email = document.querySelector('[data-email]');
  const emailError = document.querySelector('[data-email-error]');

  event.preventDefault();

  if (!email.validity.valid) {
    emailError.className = 'container__form__email-wrapper__email-error active';
    return;
  }

  emailError.className = 'container__form__email-wrapper__email-error';
});