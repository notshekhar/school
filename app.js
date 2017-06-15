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
var uploader = document.getElementById('uploader');

uploadTask.on('state_changed',
       function progress(snapshot){
  var uploader = document.getElementById('uploader');
  uploader.style.display="block";
  
   var pert = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  uploader.value = pert;
  
  if(pert =100){ 
    var edit = document.getElementById('editnew');
    var caption = document.getElementById('cap').value;
  var name = document.getElementById('put').value;
  var caption = "";
  var name = ""; 
    edit.style.display='none';           
   }else{
   var caption = document.getElementById('cap').value;
  var name = document.getElementById('put').value;
  var caption = "";
  var name = ""; 
  document.getElementById('errm').style.display="block";
  }
  
},function error(err){

}, function complete(){

});  
  
storageRef.getDownloadURL().then(function(url) {
  
 
 
  function writeNewPost() { 
   var usr = 1;
   var caption = document.getElementById('cap').value;
   var name = document.getElementById('put').value;
  
   var postData = {
    usr: usr++,
    name: name,
    cap: caption,
    image: url
  };

  var newPostKey = firebase.database().ref().child('/posts/').push().key;
  var updates = {};
  updates['/posts/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);

  }

console.log(url);
 
});
  



}
