const formData = {
  email: "",
  message: "",
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.assign(formData, parsedData);
      form.elements.email.value = formData.email.trim() || '';
      form.elements.message.value = formData.message.trim() || '';
    }
  } catch (error) {
    console.error("Error loading data from local storage:", error);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = "";
  formData.message = "";
});

document.addEventListener('DOMContentLoaded', loadFormData);
