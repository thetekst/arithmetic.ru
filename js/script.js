// JavaScript Document

function validate() {
	
	var getFactor1 = $('input[name="factor-one"]').val().trim();
	var getFactor2 = $('input[name="factor-two"]').val().trim();
	
	if((getFactor1 == '' && getFactor1 == null) && (getFactor2 == '' && getFactor2 == null)) {
		return;
	}
	
	var rexEx = /\D/;

	var e1 = (getFactor1.search(rexEx) != -1);
	var e2 = (getFactor2.search(rexEx) != -1);
	
	if(e1 || e2) {
		// reset div
		$('div.wrap').text('');
		$('input[name="equal"]').val('');
	} else {
		amount(getFactor1, getFactor2);
	}
}

function amount(getFactor1, getFactor2) {

	var equel = parseInt(getFactor1 * getFactor2);
	
	var length1 = getFactor1.length;
	var length2 = getFactor2.length;
	
	/*var lengthMatrix = (length1 >= length2) ? length1 : length2;*/
	$('#equal').text(equel);
	
	// reset div
	$('div.wrap').text('');
	
	// output table
	$('<table>', {
			"border":"1",
			"width":"550px",
			"class":"table-1"
		}).prependTo('div.wrap');
		
	for(var i=0; i<length2 + 1; i++) {
		$('<tr>').prependTo('table');
			for(var k=0; k<length1 + 1; k++) {
				$('<td contenteditable="true">&nbsp;</td>').prependTo('tr:eq(0)');
			}
	}
	
	for(var g_=0; g_<length1; g_++) {
		var cha = getFactor1.charAt('g_');
		$('tr:first-child td:eq('+g_+')').text(g_).attr({contenteditable:'false'});
		//$('#y').text(l);
		//alert(1);
	}
	
	for(var b_=0; b_<length2; b_++) {
		var c = getFactor2.charAt('b_');
		$('tr:eq('+(b_+1)+') td:last-child').text(b_).attr({contenteditable:'false'});
	}
	
	
	$('tr:first-child, tr td:last-child').css({
												"font-weight":"bold",
												"background":"#ccc",
												"text-align":"center"
											});
}