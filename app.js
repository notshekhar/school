var file = document.getElementById('imag');
file.addEventListener('change', upload);
function upload(event){
var selectedFile = event.target.file[0];
console.log(selectedFile);
}
