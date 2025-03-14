document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactInfo");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    

    form.addEventListener("submit", function (event) {
        
        const firstNameValue = firstNameInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const subjectValue = subjectInput.value.trim();
        const messageValue = messageInput.value.trim();

        
        if (firstNameValue === "" || lastNameValue === "" || emailValue === "" || subjectValue === "" || messageValue === "") {
            event.preventDefault();
            return;
        }

        
        if (!isValidEmail(emailValue)) {
            event.preventDefault();
            return;
        }

    });

    
    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const projectButtons = document.querySelectorAll(".toggleDetails");

    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectDetails = this.nextElementSibling;

            if (projectDetails.style.display === "block") {
                projectDetails.style.display = "none";
                this.textContent = "View Details";
            } else {
                projectDetails.style.display = "block";
                this.textContent = "Hide Details";
            }
        });
    });
});