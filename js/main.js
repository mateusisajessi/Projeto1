
(function(){

	var $menu = document.querySelector('.menu');
	var $ul = document.querySelector('.nav__ul');

	$menu.addEventListener('click', function(){
		$ul.classList.toggle('active')
	});

})();