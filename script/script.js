$(function(){

		$.ajax({
			dataType:"json",
			type:"GET",
			url:"https://quiet-citadel-87837.herokuapp.com/restaurants",
			success: function(data){
				console.log(data);
				$("#rating").text(data[0].reviews[0].rating);
			}
			
		})



})