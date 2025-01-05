
document.querySelector('.btn').addEventListener('click', function() {
    window.location.href = '';
});


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector("#about h1 span");
    const textToType = "Your Name";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); 
        } else {
            index = 0; 
            textElement.innerHTML = ""; 
            setTimeout(typeText, 1000); 
        }
    }

    typeText();
});



