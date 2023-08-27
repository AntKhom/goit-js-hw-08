import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form [name=email]'),
    textarea: document.querySelector('.feedback-form [name=message]'),
};

const feedbackFormState = {

};

const getFeedbackFormState = (e) => {    
    const savedFeedback = localStorage.getItem('feedback-form-state');
    if (savedFeedback) {
        refs.email.value = JSON.parse(savedFeedback).email;
        refs.textarea.value = JSON.parse(savedFeedback).message;
    };     
};

getFeedbackFormState();

const onFormSubmit = (e) => {
    e.preventDefault();
    sendedFeedback = localStorage.getItem('feedback-form-state');
    if (sendedFeedback) {
        console.log(JSON.parse(sendedFeedback));
    };
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

const onFeedbackFormInput = (e) => {
    try {
        feedbackFormState[e.target.name] = e.target.value;
        localStorage.setItem('feedback-form-state',JSON.stringify(feedbackFormState));
    } catch(error) {
        console.log(error.message);
    }
    
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFeedbackFormInput);
