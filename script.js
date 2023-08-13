const pay = document.querySelector(".btn");
const form = document.querySelector(".cert");
const close = document.querySelector(".cert p");

pay.addEventListener("click", () => {
    if (form.style.display === 'none' || form.style.display === '') { // Check if display is 'none' or not set
        form.style.display = 'block'; // Set the display property to 'block'
    } else {
        form.style.display = 'none'; // Set the display property to 'none' if it's not 'none'
    }
});
close.addEventListener("click", () => {
    if (form.style.display === 'none' || form.style.display === '') { // Check if display is 'none' or not set
        form.style.display = 'block'; // Set the display property to 'block'
    } else {
        form.style.display = 'none'; // Set the display property to 'none' if it's not 'none'
    }
});
