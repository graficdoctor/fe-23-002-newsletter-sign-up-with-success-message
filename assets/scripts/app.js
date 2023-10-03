const subscribeBtn = document.getElementById('subscribe-to');
const input = document.querySelector('input');
const formContainer = document.querySelector('.form-container');
const dismissBtn = document.getElementById('dismiss-message');
const signUpForm = document.getElementById('sign-up-form');
const successMessage = document.getElementById('success-message');

function errorMessage() {
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (input.value.match(pattern)) {
		formContainer.classList.replace('unchecked', 'valid');
		formContainer.classList.replace('invalid', 'valid');
		showSuccessMessage();
	}

	if (!input.value || !input.value.match(pattern)) {
		formContainer.classList.replace('unchecked', 'invalid');
		formContainer.classList.replace('valid', 'invalid');
	}
}

function showSuccessMessage() {
	const emailFormData = new FormData(formContainer);
	const emailAddress = emailFormData.get('email-address');
	const confirmedAddress = document.getElementById('confirmed-address');
	confirmedAddress.textContent = emailAddress;

	successMessage.style.display = 'flex';
	signUpForm.style.display = 'none';
}

input.addEventListener('keyup', errorMessage);

subscribeBtn.addEventListener('click', function (e) {
	e.preventDefault();
	errorMessage();
	formContainer.reset();
});

dismissBtn.addEventListener('click', function () {
	signUpForm.style.display = 'grid';
	successMessage.style.display = 'none';
});
