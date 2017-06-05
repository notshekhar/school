 $(document).ready(function(){
        $('#new').click(function(){
		     $('#new').hide(400);
			$('#editnew').show(500);
			
		});

$('#back').click(function(){
	$('#editnew').hide(500);
	$('#new').show(510);
});		

$('#put').focus(function(){
	$('#nam').css({
		"top":"-20px",
		"font-size":"10px",
		"transition-duration":"0.4s"
	});

}).blur(function(){
	
if($('#put').val().length > 1){
	$('#nam').css({
		"top":"-20px",
		"font-size":"10px",
		"transition-duration":"0.4s"
	});
}else{
	$('#nam').css({
		"top":"-9px",
		"font-size":"20px",
		"transition-duration":"0.4s"
	});
}
});


  });
  

