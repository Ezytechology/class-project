// Toggle dropdown
const calcToggle = document.getElementById('calcToggle');
const calculator = document.getElementById('calculator');

// When the icon is clicked, the show class is added or removed.
calcToggle.addEventListener('click', () => {
    calculator.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!calculator.contains(e.target) && !calcToggle.contains(e.target)) {
        calculator.classList.remove('show');
    }
});

// Calculator functions
const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const allowed = '0123456789+-*/.';

    if (allowed.includes(e.key)) {
        display.value += e.key;
    }

    if (e.key === 'Enter') {
        calculate();
    }

    if (e.key === 'Backspace') {
        deleteLast();
    }

    if (e.key === 'Escape') {
        clearDisplay();
    }
});



// GET FORM ID
const signupForm = document.getElementById('signupForm');

//FORM SUBMIT EVENT
signupForm.addEventListener('submit', function (e) {

    // PREVENT PAGE REFRESH
    e.preventDefault();

    //GET INPUT VALUES
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // ERROR ELEMENT
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirmError');
    const sucessMessage = document.getElementById('successMessage');

    // CLEAR PREVIOUS MESSAGES
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let invalid = true;

    // FULL NAME VALIDATION
    if (fullName === "") {
        nameError.textContent = "Full name is required";
        isvalid = false;
    }

    // EMAIL VALIDATION
    const emailPattern = /@/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isvalid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "invalid email";
        isvalid = false;
    }

    // PHONE VALIDATION
    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isvalid = false;
    } else if (phone.length < 11) {
        phoneError.textContent = "invalid phone number";
        isvalid = false;
    }

    // PASSWORD VALIDATION
    if (password === "") {
        passwordError.textContent = "Password is required";
        isvalid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isvalid = false;
    }

    // CONFIRM PASSWORD VALIDATION
    if (confirmPassword === "") {
        confirmError.textContent = "Please confirm your password";
        isvalid = false;
    } else if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isvalid = false;
    }

    // IF THE FROM IS VALID
    if (isvalid) { // CREATE A UESR OBJECT

        const user = {
            fullName: fullName,
            email: email,
            phone: phone,
            password: password,
            createAt: new Date().toLocaleString()
        };

        // CHECK IF EMAIL ALREADY EXISTS
        const existingUser = user.find(u => u.email === email);

        if (existingUser) {
            emailError.textContent = "Email already exists";
            return;
        }

        // SHOW SUCCESS MESSAGE
        successMessage.textContent = 'Account created successfully';

        // RESET THE FORM
        signupForm.reset();

    }


})

document.getElementById('confirmPassword').addEventListener('input', function () {

    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const confirmError = document.getElementById('confirmError');

    if (confirmPassword !== "" && password !== confirmPassword) {
        confirmError.textContent = "Password do not match";
    } else {
        confirmError.textContent = "";
    }
});