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
  
uploadTask.addEventListener('state_change', function(snapshot){
   
}, function(error){
  
},function(){
var downloadUrl = uploadTask.snapshot.downloadURL;
  var postKey = firebase.database().ref('posts/').push().key;
  var i = 1;
  var updates = {};
  var postData = {
    usr: i++, 
    caption: document.getElementById('cap').value,
    name: document.getElementById('put').value,
    url: url
  } 
  updates[''/posts/+postKey] = postData;
 firebase.database().ref().update(updates);
  console.log('downloadUrl');
});
  
}
