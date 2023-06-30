// validate mobile
let PhoneNumber = document.querySelector('#mobile-number');
let buttonSubscribe = document.querySelector('#subscribe-submit');
let inputChecked = document.querySelector('.mobile-input_checked');
let subscribeForm = document.querySelector('.subscribe-forms');
let pincode = document.querySelector('.pincode');
let mobileInput = document.querySelector('.mobile-input');
function validatePhoneNumber(number) {
    number = number.replace(/[-\s]/g, '');
    if (number.length === 11) {
      const formattedNumber = number.slice(0, 4) + '-' + number.slice(4);
      return formattedNumber;
    } else {
      return false;
    }
  }
//  after out of input
  PhoneNumber.addEventListener('blur', function addedNumb() {
    const formattedPhoneNumber = validatePhoneNumber(PhoneNumber.value);
    if (formattedPhoneNumber == false) {
        
        console.log('Valid phone number:',' 000');
        mobileInput.classList.add('error-iput');
      } else {
        PhoneNumber.value = formattedPhoneNumber;
        inputChecked.style.display='flex';
        buttonSubscribe.classList.add('btn-active');
        mobileInput.classList.remove('error-iput');
      }
  })   
buttonSubscribe.addEventListener('click', function hideInput() {
    if( buttonSubscribe.classList.contains('btn-active') == true){
        subscribeForm.style.display = 'none';
        pincode.style.display = 'flex';
    }
});

// change number
let newNumber = document.querySelector('#change-number');
newNumber.addEventListener('click', function changeNumber() {
  subscribeForm.style.display = 'flex';
        pincode.style.display = 'none';
        PhoneNumber.value = '';
        buttonSubscribe.classList.remove('btn-active');
        inputChecked.style.display='none';
})