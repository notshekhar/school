var file = document.getElementById('imag');
var uploaded = document.getElementById('sum');
file.addEventListener('change', upload);

function upload(){
var selectedFile = this.value;
}
uploaded.addEventListener('click', uploadFile);

function uploadFile(){
var path = document.getElementById("whatever").value;
var fileName = path.match(/[^\/\\]+$/);
console.log(fileName);

}
