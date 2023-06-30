

// validate PIN

$('.pincode-input input').keydown(function(e){
	$(this).val('');
});
 
$('.pincode-input input').keyup(function(e){
	let $wrap = $(this).closest('.pincode-inputs');
	let $inputs = $wrap.find('input[type="number"]');	
	let val = $(this).val();
	if(val == val.replace(/[0-9]/, '')) {
		$(this).val('');
		return false;
	}
	$inputs.eq($inputs.index(this) + 1).focus();
	let fullval = '';
	$inputs.each(function(){
		fullval = fullval + (parseInt($(this).val()) || '');
       
	});
	$wrap.find('input[type="hidden"]').val(fullval);
    if ($('.code').val().length == 4) {
        $('.form-btn').addClass('btn-active'); 
    }
   
});
