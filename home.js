 $(document).ready(function(){
        $('#new').click(function(){
		     $('#new').hide();
			$('#editnew').show(500);
			
		});
	
  });

  
var htm = document.getElementById('back');

htm.addEventListener('click', function(){
 var neww = document.getElementById('new');
 var editnew = document.getElementById('editnew');
 var cont = document.getElementById('cont');
 editnew.style.display="none";
 cont.style.display="block";
 neww.style.display="block";

});
