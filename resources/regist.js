var progress = 0;
$(document).ready(function () {
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
		$("#provincelist").append('<label class="col col-md-4"><input type="radio" name="province" class="card-radio" /><div class="card mx-3 text-main-theme bg card-input"><div class="card-body text-center"><h5>' + val + '</h5></div></div></label>');
	});
});