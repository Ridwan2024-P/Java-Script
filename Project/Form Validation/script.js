const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let isValid = false;

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

function checkRequired(inputArr) {
  let isRequired = false;

  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}


function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );

    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );

    return false;
  } else {
    showSuccess(input);

    return true;
  }
}


function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');

    return false;
  } else {
    showSuccess(input2);

    return true;
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
  e.preventDefault();


  const requiredError = checkRequired([
    username,
    email,
    password,
    password2
  ]);
  if (requiredError) {
    return;
  }

  const usernameValid = checkLength(username, 3, 15);
  const passwordValid = checkLength(password, 6, 25);
  const emailValid = checkEmail(email);


  const passwordMatch = checkPasswordsMatch(password, password2);


  if (
    usernameValid &&
    passwordValid &&
    emailValid &&
    passwordMatch
  ) {
    isValid = true;

    console.log('Form is valid');

   
  } else {
    isValid = false;

    console.log('Form is not valid');
  }
});