const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Login successful");
});

document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Signup successful");
});

document.querySelector('.google-btn').addEventListener('click', () => {
    alert("Google Sign-In Clicked");
});
