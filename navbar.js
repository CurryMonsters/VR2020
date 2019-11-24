// function selection
const selectElement = (element) => document.querySelector(element);
selectElement('.hamburger').addEventListener('click', () =>{
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
    selectElement('.mainNav').classList.toggle('active');
});