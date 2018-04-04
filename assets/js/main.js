$(document).ready(function(){
    // Activate Carousel
    $("#home .carousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#home .carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#home .carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#home .carousel").carousel(2);
    });
})

// --------------------Navigation Jquery----------------------------

jQuery(document).ready(function($) {
	$("#header .row .col-md-6>ul>li").click(function(event) {
		$(this).siblings("li:gt(0)").css('background-color','#1B7B98')
		.children().css({
			'color': '#fff',
			'text-decoration': 'none'
		});
		$(this).css('background-color', '#fff')
		.children().css({
			'color': '#1B7B98',
			'text-decoration': 'none'
		});	
	});
	$("#header .row .col-md-6>ul>li").hover(function() {
		$(this).css('background-color', '#fff')
		.children().css({
			'color': '#1B7B98',
			'text-decoration': 'none',
			'cursor': 'pointer'
		});	
	}, function() {
		$(this).siblings("li:gt(0)").css('background-color', '#1B7B98')
		.children().css({
			'color': '#fff',
			'text-decoration': 'none'
		});	
	});
});

// -------------------- Javascript Countdown---------------------------------

	var countDate=new Date("July 5, 2017 15:37:25").getTime();
	
	var interval=setInterval(function(){
		
	var nowDate=new Date();
	var x=countDate-nowDate;
	var days=Math.floor(x/(1000*60*60*24));
	var hours=Math.floor((x%(1000*60*60*24))/(1000*60*60));
	var minutes=Math.floor((x%(1000*60*60))/(1000*60));
	var seconds=Math.floor((x%(1000*60))/(1000));
	// Displaying in spans
	document.getElementById("day").innerHTML=days;
	document.getElementById("hour").innerHTML=hours;
	document.getElementById("minute").innerHTML=minutes;
	document.getElementById("second").innerHTML=seconds;
	},1000);

// ---------------------Google Map------------------------------

$( document ).ready( function() {
	function initialize() {
			var myLatlng = new google.maps.LatLng(53.3333,-3.08333);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 11,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		//Set window width + content
		// var infowindow = new google.maps.InfoWindow({
		// 	content: contentString,
		// 	maxWidth: 500
		// });

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: 'image title'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});

// ------------------------------------------------------------

