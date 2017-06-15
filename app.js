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

  
storageRef.getDownloadURL().then(function(url) {
  
  var usr = 1;
  var caption = document.getElementById('cap').value;
  var name = document.getElementById('put').value;
  
function writeNewPost(usr, name, url, caption) {
  var postData = {
    usr: usr++,
    name: name,
    cap: caption,
    image: url
  };

  var newPostKey = firebase.database().ref().child('posts').push().key;
  var updates = {};
  updates['/posts/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
  

console.log(url);
 
});
  



}
