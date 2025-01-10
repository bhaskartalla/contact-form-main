const form = document.getElementById('contactForm')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  let isFormValid = true
  // First Name Validation
  const firstName = document.getElementById('firstName')
  const firstNameError = document.getElementById('firstNameError')

  if (firstName.value.trim() === '') {
    firstNameError.style.display = 'block'
    firstName.style.border = '1px solid #d73c3c'
    isFormValid = false
  } else {
    firstName.style.border = '1px solid #86a2a5'
    firstNameError.style.display = 'none'
  }

  // Last Name Validation
  const lastName = document.getElementById('lastName')
  const lastNameError = document.getElementById('lastNameError')

  if (lastName.value.trim() === '') {
    lastNameError.style.display = 'block'
    lastName.style.border = '1px solid #d73c3c'
    isFormValid = false
  } else {
    lastName.style.border = '1px solid #86a2a5'
    lastNameError.style.display = 'none'
  }

  // Email Address Validation
  const emailAddress = document.getElementById('emailAddress')
  const emailAddressError = document.getElementById('emailAddressError')

  if (emailAddress.value.trim() === '') {
    emailAddressError.style.display = 'block'
    emailAddress.style.border = '1px solid #d73c3c'
    isFormValid = false
  } else {
    emailAddress.style.border = '1px solid #86a2a5'
    emailAddressError.style.display = 'none'
  }

  // Query type Validation
  const queryTypeError = document.getElementById('queryTypeError')
  const genderSelected = form.querySelector('input[name="queryType"]:checked')
  if (!genderSelected) {
    queryTypeError.style.display = 'block'
    isFormValid = false
  } else {
    queryTypeError.style.display = 'none'
  }

  // Message Validation
  const message = document.getElementById('message')
  const messageError = document.getElementById('messageError')

  if (message.value.trim() === '') {
    messageError.style.display = 'block'
    message.style.border = '1px solid #d73c3c'
    isFormValid = false
  } else {
    message.style.border = '1px solid #86a2a5'
    messageError.style.display = 'none'
  }

  // consent Validation
  const consent = document.getElementById('consent')
  const consentError = document.getElementById('consentError')
  if (!consent.checked) {
    consentError.style.display = 'block'
    isFormValid = false
  } else {
    consentError.style.display = 'none'
  }

  if (isFormValid) {
    const toast = document.getElementById('toast')
    toast.classList.add('show')
    setTimeout(() => {
      toast.classList.remove('show')
    }, 3000)
  }
})

function redirect() {
  window.location.href = 'https://uat.mb2.kotak.com/savings-account/upgrade'
}
