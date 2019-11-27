const selectElement = (element) => document.querySelector(element);
selectElement('.toggler').addEventListener('click', () =>{
    selectElement('html').classList.toggle('full-screen');
});