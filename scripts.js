$(document).ready(function(){

	var max,p1,p2;
	inicio();

    $('#inicio').on('click', fnInicio);
    $('#a24').on('click', fnMax24);
    $('#a30').on('click', fnMax30);
    $('#fin').on('click', fnFin);
    $('#s1').on('click', fnSuma1);
    $('#r1').on('click', fnResta1);
    $('#s2').on('click', fnSuma2);
    $('#r2').on('click', fnResta2);

    function inicio() {
    	max = 30;
		$('#max').html('A 30');
		$('#eq1').val('');
		$('#eq2').val('');
		p1=0;
		p2=0;
		$('#p1').html(p1);
		$('#p2').html(p2);
		$('.img').attr('src',"0.png");
    }




    function fnMax24() {
    	max = 24;
    	$('#max').html('A 24');
    }
    function fnMax30() {
    	max = 30;
    	$('#max').html('A 30');
    }







    function fnInicio() {
    	ne1 = $('#eq1').val();
    	ne2 = $('#eq2').val();
    	$('#ne1').html(ne1);
    	$('#ne2').html(ne2);


        $('#pant1').removeClass('visible').addClass('oculto');
        $('#pant2').removeClass('oculto').addClass('visible');
    }

    function fnFin() {
    	inicio();
    	$('#pant2').removeClass('visible').addClass('oculto');
        $('#pant1').removeClass('oculto').addClass('visible');
    }

	function fnSuma1() { 
		if (p1<max) { p1++; }
		$('#p1').html(p1);
		palitos(1);
		//if (p1==max) { alert('Gano el 1'); }
	}
	function fnResta1() { 
		if (p1>0) { p1--; }
		$('#p1').html(p1);
		palitos(1);
	}
	function fnSuma2() { 
		if (p2<max) { p2++; }
		$('#p2').html(p2);
		palitos(2);
		//if (p2==max) { alert('Gano el 2'); }
	}
	function fnResta2() { 
		if (p2>0) { p2--; }
		$('#p2').html(p2);
		palitos(2);
	}


	function palitos(e) {
		if (e==1) { pad = p1; }
		if (e==2) { pad = p2; }

		for (i=1; i<=6; i++) {
			// genero el id que le corresponde a cada imagen
			id = '#p'+e+i;
			if (max==24 && i==3 && pad>=2) {
					$(id).attr('src','2.png');
					pad = pad - 2;	
			} else {
				if (pad>=5) {
					$(id).attr('src','5.png');
					pad = pad - 5;
				} else {
					// 0 1 2 3 4
					$(id).attr('src',pad+'.png');
					pad=0;
				}
			}
		}
	}
});