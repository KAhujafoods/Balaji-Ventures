document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent! We will get back to you shortly.");
    document.getElementById("contact-form").reset();
});
