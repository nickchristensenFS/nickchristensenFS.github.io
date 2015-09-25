function bodyClassToggler(element, elemClass){
	$(element).on('click', function(){
		$('body').toggleClass(elemClass);
	});
}