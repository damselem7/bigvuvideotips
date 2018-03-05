$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$("nav ul").toggleClass("showing");
	});
});


var widthAspect = $(".aspect").width();


//   alert('Aspect width is ' + widthAspect);
//})


// $(p.grid-item).width(widthAspect);

// $(document).ready(function(){
//   alert('p width is ' + (p.grid-item).width(widthAspect));
// })
