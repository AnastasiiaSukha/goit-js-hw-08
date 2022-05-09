
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const text = document.querySelector('textarea');
const submit = document.querySelector('button');

form.addEventListener('submit', OnFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


updateForm();

function OnFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);

};

function onFormInput(event) {
    const email = input.value;
    const message = text.value;

    const data = {
        email: email,
        message: message,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

};




function updateForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        
        input.value = savedData.email;
        text.value = savedData.message;

    } 
    
};

