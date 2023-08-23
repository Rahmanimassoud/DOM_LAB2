
const shopingForm = document.getElementById('shopping-form');
const inputInfo = document.getElementById('item');
const ulId = document.getElementById('c');

shopingForm.addEventListener('submit', (element)=>{
  element.preventDefault();
   console.log("the form is submitting");
  const newLi  = document.createElement('li');
  ulId.appendChild(newLi);
newLi.textContent = inputInfo.value;
  inputInfo.value = ''
});


