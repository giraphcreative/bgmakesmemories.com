


$(function(){

	$(".calculator.vacation").accrue({
		mode: "compare",
		response_output_div: ".results.vacation",
		response_compare: "%savings%",
		error_text: "",
		callback: function( elem, nums ) {
			if ( typeof( nums.savings ) === 'undefined' ) {
				$( ".results.vacation" ).html( '0' );
			}
		}
	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

