let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageInput = form.querySelector("textarea[name='message']");


const STORAGE_KEY = "feedback-form-state";


document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
    }
});


form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }

    console.log(formData);

    form.reset();
    formData = { email: "", message: "" };
    localStorage.removeItem(STORAGE_KEY);
});