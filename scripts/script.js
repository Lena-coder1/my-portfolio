
document.addEventListener("DOMContentLoaded", () => {
        const form= document.getElementById("contactInfo");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const firstNameValue = document.getElementById("firstName").value.trim();
            const lastNameValue = document.getElementById("lastName").value.trim();
            const subjectValue = document.getElementById("subj").value.trim();
            const messageValue = document.getElementById("msg").value.trim();

            console.log ( firstNameValue , lastNameValue , subjectValue, messageValue);

            if (!firstNameValue || !lastNameValue || !subjectValue || !messageValue) {
      
                alert ("Please fill in all fields");
                return;
            }

            localStorage.setItem("firstName", firstNameValue );
            localStorage.setItem("lastName", lastNameValue);
            localStorage.setItem("subject", subjectValue);
            localStorage.setItem("message", messageValue);

            const email = "lena.mukhtar@gmail.com"; 
            const body = `${messageValue}\n\n- ${firstNameValue} ${lastNameValue}`;
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectValue)}&body=${encodeURIComponent(body)}`;

        });
    });



 // Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
 
});