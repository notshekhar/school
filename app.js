var file = document.getElementById('imag');
var uploaded = document.getElementById('sum');
file.addEventListener('change', upload);

function upload(event){
selectedFile = event.target.files[0];
}
uploaded.addEventListener('click', uploadFile);

function uploadFile(){
var path = document.getElementById("imag").value;
var fileName = path.match(/[^\/\\]+$/);
  
var storageRef = firebase.storage().ref('/stantschool/' + fileName);
  var uploadTask = storageRef.put(selectedFile);

  
// Create a reference to the file we want to download
var starsRef = storageRef.child('stantschool/');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  console.log(url);
});
                               
                               
});
  
  
  
 

}
