$(function(){

		$.ajax({
			dataType:"json",
			type:"GET",
			url:"https://quiet-citadel-87837.herokuapp.com/restaurants",
			success: function(data){
				console.log(data);
			}
			
		})

})