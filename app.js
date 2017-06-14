var file = document.getElementById('imag');
file.addEventListener('change', upload);
function upload(){
var selectedFile = this.value
console.log(selectedFile);
}
