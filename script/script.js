$(function(){

		$.ajax({
			dataType:"json",
			type:"GET",
			url:"https://quiet-citadel-87837.herokuapp.com/restaurants",
			success: function(data){
				console.log(data);
				$("#rating").text(data[0].reviews[0].rating);
				$("#restaurantName").html(data[0].name+"<br>"+data[0].address);
				$("#openingHours").html(data[0].opening[0].days+"<br>"+data[0].opening[0].hours);
				//$("#facilities").text(data[0].reviews[0].rating);
				//$("#userReviews").text(data[0].reviews[0].rating);

			}
			
		})

})

/*function initMap() {
        var atria = {lat: 3.127175, lng: 101.6143953};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: atria
        });
        var marker = new google.maps.Marker({
          position: atria,
          map: map
        });
      }*/