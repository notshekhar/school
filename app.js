var file = document.getElementById('imag');
var uploaded = document.getElementById('sum');

file.addEventListener('change', upload);

function upload(event){
selectedFile = event.target.files[0];
}
uploaded.addEventListener('click', uploadFile);
//uploading image and data in database
function uploadFile(){
  //uploading image
var path = document.getElementById("imag").value;
var fileName = path.match(/[^\/\\]+$/);
  
var storageRef = firebase.storage().ref('/stantschool/' + fileName);
  var uploadTask = storageRef.put(selectedFile);

//sending data to database
 var newPostKey = firebase.database().ref('posts/');
var postData={
  cap: document.getElementById('cap').value,
  img: 'url',
  usr: document.getElementById('put').value
}
 newPostKey.push(postData);


}           
  
  

