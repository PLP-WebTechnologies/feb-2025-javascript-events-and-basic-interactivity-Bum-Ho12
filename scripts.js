// Handle form submission with validation
const form = document.getElementById('user-form');
const errorMsg = document.getElementById('form-error');
form.addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (!name || !email) {
    errorMsg.style.display = 'block';  // Show error if any field is empty
  } else {
    errorMsg.style.display = 'none';  // Hide error if all fields are filled
    alert('Form submitted successfully!');
  }
});

// Handle adding new content to the page
const addContentBtn = document.getElementById('add-content-btn');
const contentOutput = document.getElementById('content-output');
addContentBtn.addEventListener('click', function () {
  contentOutput.style.display = 'block';  // Show the dynamically added content
  addContentBtn.disabled = true;  // Disable the button after content is added
  addContentBtn.textContent = 'Content Added!';  // Change button text
});
