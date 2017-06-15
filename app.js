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
  

storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

 
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
console.log(url);
  // Or inserted into an <img> element:
  var img = document.getElementById('myimg');
  img.src = url;
}).catch(function(error) {
  // Handle any errors
});
  
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


}
