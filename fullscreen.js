const selectElement = (element) => document.querySelector(element);
selectElement('.toggler').addEventListener('click', () =>{
    selectElement('html').classList.toggle('full-screen');
});

selectElement('.close-on-click').addEventListener('click', () =>{
    document.getElementById("tickbox").checked = false;
    selectElement('html').classList.remove('full-screen');
});

selectElement('.close-on-clicked').addEventListener('click', () =>{
    document.getElementById("tickbox").checked = false;
    selectElement('html').classList.remove('full-screen');
});