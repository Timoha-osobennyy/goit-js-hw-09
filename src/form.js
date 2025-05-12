import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
if (!form) return;

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email || '';
      messageInput.value = message || '';
      formData.email = email || '';
      formData.message = message || '';
    } catch (e) {
      console.error('Помилка при зчитуванні з localStorage', e);
    }
  }
}
