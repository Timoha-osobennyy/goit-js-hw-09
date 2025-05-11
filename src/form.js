// Object to store form data
const formData = {
  email: "",
  message: "",
};

// Get form element
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

// Function to save form data to local storage
function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Function to load form data from local storage
function loadFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      
      // Update formData object
      Object.assign(formData, parsedData);
      
      // Fill form fields with saved data
      form.elements.email.value = formData.email || '';
      form.elements.message.value = formData.message || '';
    }
  } catch (error) {
    console.error("Error loading data from local storage:", error);
  }
}

// Handle input events
form.addEventListener('input', event => {
  const { name, value } = event.target;
  
  // Update formData object with trimmed values
  formData[name] = value.trim();
  
  // Save to local storage
  saveFormData();
});

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  
  // Check if both fields are filled
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  
  // Log form data to console
  console.log(formData);
  
  // Clear form, local storage, and formData object
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = "";
  formData.message = "";
});

// Load saved data when page loads
document.addEventListener('DOMContentLoaded', loadFormData);