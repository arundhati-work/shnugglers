var fullName = document.getElementById("fullName");
var emailId = document.getElementById("emailId");
var phoneNumber = document.getElementById("phoneNumber");
var streetAddress = document.getElementById("streetAddress");
var city = document.getElementById("city");
var state = document.getElementById("state");

var submitButton = document.getElementById("submit");
var form = document.getElementById("adoption-form");

var nameRegex = /^[a-zA-Z ]+$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2,}.[a-zA-Z]{2,}$/;
var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
var addressRegex = /^.{3,50}$/;

var isFullNameValid = false;
var isEmailValid = false;
var isPhoneValid = false;
var isStreetAddressValid = false;
var isCityValid = false;
var isStateValid = false;

fullName.addEventListener("input",validateFormElements);
emailId.addEventListener("input",validateFormElements);
phoneNumber.addEventListener("input",validateFormElements);
streetAddress.addEventListener("input",validateFormElements);
city.addEventListener("input",validateFormElements);
state.addEventListener("input",validateFormElements);

function validateFormElements(event){
    var value = event.target.value;
    var targetId = event.target.id;
    var errorFieldId = `error-${targetId}`;
    var errorField = document.getElementById(errorFieldId);

    if (targetId=="fullName"){
        errorField.style.opacity = value.trim().match(nameRegex)? "0":"1";
        isFullNameValid = value.trim().match(nameRegex)? true:false;
      }
      else if (targetId=="emailId"){
        errorField.style.opacity = value.trim().match(emailRegex)? "0":"1";
        isEmailValid = value.trim().match(emailRegex)? true:false;
      }
      else if (targetId=="phoneNumber"){
        errorField.style.opacity = value.trim().match(phoneRegex)? "0":"1";
        isPhoneValid = value.trim().match(phoneRegex)? true:false;
      }
      else if (targetId=="streetAddress"){
        errorField.style.opacity = value.trim().match(addressRegex)? "0":"1";
        isStreetAddressValid = value.trim().match(addressRegex)? true:false;
      }
      else if (targetId=="city"){
        errorField.style.opacity = value.trim().match(nameRegex)? "0":"1";
        isCityValid = value.trim().match(nameRegex)? true:false;
      }
      else if (targetId=="state"){
        errorField.style.opacity = value.trim().match(nameRegex)? "0":"1";
        isStateValid = value.trim().match(nameRegex)? true:false;
      }

      toggleSubmitButton();

}

function toggleSubmitButton(){
    if (isFullNameValid&&isEmailValid&&isPhoneValid&&isStreetAddressValid&&isCityValid&&isStateValid){
      submitButton.disabled = false;
    }
    else{
      submitButton.disabled = true;
    }
}

function submitForm(event){
    form.reset();
    isFullNameValid = false;
    isEmailValid = false;
    isPhoneValid = false;
    isStreetAddressValid = false;
    isCityValid = false;
    isStateValid = false;
    submitButton.disabled = true;

    alert("Form submitted successfully! We'll contact you soon.");
}