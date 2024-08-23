const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#closeModal');

modal.showModal();

closeButton.addEventListener('click', () => {
    modal.close();
});

const form = document.querySelector("#forms");
const nameInput = document.querySelector("#name");
const courseInput = document.querySelector("#course");
const yearInput = document.querySelector("#year");

const clearErrors = () => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.remove());
};

const createErrorMessage = (message) => {
    const errorElement = document.createElement("p");
    errorElement.textContent = message;
    errorElement.classList.add("error-message");
    return errorElement;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const nameValue = nameInput.value.trim();
    const courseValue = courseInput.value.trim();
    const yearValue = Number(yearInput.value);

    let hasError = false;

    if (nameValue.length < 3) {
        form.appendChild(createErrorMessage("Informe um nome com pelo menos 3 letras"));
        hasError = true;
    }

    if (courseValue.length < 3) {
        form.appendChild(createErrorMessage("Informe um curso com pelo menos 3 letras"));
        hasError = true;
    }

    if (!yearValue || yearValue > 2024) {
        form.appendChild(createErrorMessage("Informe um ano válido"));
        hasError = true;
    }

    if (!hasError) {
        const successMessage = document.createElement("p");
        successMessage.textContent = "Formulário enviado com sucesso";
        form.appendChild(successMessage);
    }
});
