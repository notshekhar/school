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

 function writeNewPost(url) {
  // A post entry.
  var postData = {
    cap: document.getElementById('cap').value,
    image: stantschool.png,
    name: document.getElementById('cap').value,
    usr: 1
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref();

 newPostKey.push(postData);
}           
  
  

}
