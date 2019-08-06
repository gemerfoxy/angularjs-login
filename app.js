var app = angular.module('fetest', ["ngRoute"]);
app.config(function($routeProvider,  $locationProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "pages/home.html"
	})
	.when("/regist", {
		templateUrl : "pages/register.html"
	})
	$locationProvider.hashPrefix('');
});

$(document).ready(function () {
	var progress = '0';

	// Province list
	var prov = ["Aceh", 
		"Bali", 
		"Banten", 
		"Bengkulu", 
		"DKI Yogyakarta", 
		"DKI Jakarta", 
		"Gorontalo", 
		"Jambi", 
		"Jawa Barat", 
		"Jawa Tengah", 
		"Jawa Timur", 
		"Kalimantan Barat", 
		"Kalimantan Selatan", 
		"Kalimantan Tengah", 
		"Kalimantan Timur", 
		"Kalimantan Utara", 
		"Kepulauan Bangka Belitung", 
		"Kepulauan Riau", 
		"Lampung", 
		"Maluku", 
		"Maluku Utara", 
		"Nusa Tenggara Barat", 
		"Nusa Tenggara Timur", 
		"Papua", 
		"Papua Barat", 
		"Riau", 
		"Sulawesi Barat", 
		"Sulawesi Selatan", 
		"Sulawesi Tengah", 
		"Sulawesi Tenggara", 
		"Sulawesi Utara", 
		"Sumatera Barat", 
		"Sumatera Selatan", 
		"Sumatera Utara"
	];
	$.each(prov, function(i, val){
		$("#provincelist").append('<label class="col col-md-4"><input type="radio" name="province" value="'+val+'" class="card-radio" /><div class="card mx-3 text-main-theme bg card-input"><div class="card-body text-center"><h5>' + val + '</h5></div></div></label>');
	});

	// Check Progress
	setInterval(function(){
		switch(progress){
			case '0':
				$('#progress').html('<div class="progress-bar gradient" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>');
				break;
			case '1':
				$('#progress').html('<div class="progress-bar gradient" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>');
				break;
			case '2':
				$('#progress').html('<div class="progress-bar gradient" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient" style="width: 20%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>');
				break;
			case '3':
				$('#progress').html('<div class="progress-bar gradient" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient" style="width: 20%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>');
				break;
			case '4':
				$('#progress').html('<div class="progress-bar gradient" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient" style="width: 20%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient-2" style="width: 20%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar gradient" style="width: 20%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">');
				break;
		}
	});

	// Image Upload Previews
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('.pp-prev').attr('style', 'background: url("' + e.target.result + '") !important; background-size: cover !important;background-repeat: no-repeat !important; background-position: center center !important;');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#pp").change(function(){
        readURL(this);
	});
	
	// Next button Function
	$("#next").on("click", function() {
		if(progress == '0' && $('[name=fullname]').val() && $('[name=email]').val() && $('[name=gender]').val() && $('[name=birthdate]').val() && $('[name=password]').val() && $('[name=repassword]').val()){
			if(!isEmail($('[name=email]').val())){ 
				alert('Make sure your email address are typed correctly!');
			} else if ($('[name=password]').val() !=  $('[name=repassword]').val()) {
				alert('Make sure both of your password are typed correctly!');
			} else {
				$('#part-1').addClass('fadeOutLeft');
				$('#part-1').delay(500).addClass('d-none');
				$('#part-1').delay(500).removeClass('fadeOutLeft');
				$('#part-2').delay(500).removeClass('d-none');
				$('#part-2').addClass('fadeInRight');
				progress = '1';
				$('#back').removeAttr('disabled');
			}
		} else if (progress == '1' && $('[name=province]').is(":checked")) {
			$('#part-2').addClass('fadeOutLeft');
			$('#part-2').delay(500).addClass('d-none');
			$('#part-2').delay(500).removeClass('fadeOutLeft');
			$('#part-3').delay(500).removeClass('d-none');
			$('#part-3').addClass('fadeInRight');
			progress = '2';
		} else if (progress == '2' && $('[name=city]').val() && $('[name=zipcode]').val() && $('[name=address]').val()) {
			$('#part-3').addClass('fadeOutLeft');
			$('#part-3').delay(500).addClass('d-none');
			$('#part-3').delay(500).removeClass('fadeOutLeft');
			$('#part-4').delay(500).removeClass('d-none');
			$('#part-4').addClass('fadeInRight');
			progress = '3';
		} else if (progress == '3' && $('[name=pp]').val()) {
			$('#part-4').addClass('fadeOutLeft');
			$('#part-4').delay(500).addClass('d-none');
			$('#part-4').delay(500).removeClass('fadeOutLeft');
			$('#part-5').delay(500).removeClass('d-none');
			$('#part-5').addClass('fadeInRight');
			progress = '4';
			$('#next').attr('type', 'submit').html('FINISH <i class="fas fa-chevron-right ml-2"></i>');
		} else {
			alert('Make sure you fill the form properly!');
		}
	});

	// Back Button Function
	$("#back").on("click", function() {
		if(progress == '1'){
			$('#part-2').addClass('fadeOutRight');
			$('#part-2').delay(500).addClass('d-none');
			$('#part-2').delay(500).removeClass('fadeOutRight');
			$('#part-1').delay(500).removeClass('d-none');
			$('#part-1').addClass('fadeInLeft');
			progress = '0';
			$('#back').attr('disabled', 'true');
		} else if (progress == '2') {
			$('#part-3').addClass('fadeOutRight');
			$('#part-3').delay(500).addClass('d-none');
			$('#part-3').delay(500).removeClass('fadeOutRight');
			$('#part-2').delay(500).removeClass('d-none');
			$('#part-2').addClass('fadeInLeft');
			progress = '1';
		} else if (progress == '3') {
			$('#part-4').addClass('fadeOutRight');
			$('#part-4').delay(500).addClass('d-none');
			$('#part-4').delay(500).removeClass('fadeOutRight');
			$('#part-3').delay(500).removeClass('d-none');
			$('#part-3').addClass('fadeInLeft');
			progress = '2';
		} else if (progress == '4') {
			$('#part-5').addClass('fadeOutRight');
			$('#part-5').delay(500).addClass('d-none');
			$('#part-5').delay(500).removeClass('fadeOutRight');
			$('#part-4').delay(500).removeClass('d-none');
			$('#part-4').addClass('fadeInLeft');
			progress = '3';
			$('#next').attr('type', 'button').html('NEXT <i class="fas fa-chevron-right ml-2"></i>');
		}
	});

	// Email Validator
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
});