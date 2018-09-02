
(function(){

	// menu hamburguer

	var $menu = document.querySelector('.menu');
	var $ul = document.querySelector('.nav__ul');

	$menu.addEventListener('click', function(){
		$ul.classList.toggle('active')
	});

	// contato validação

	var $nome = document.querySelector('#nome');
	var $email = document.querySelector('#email');
	var $assunto = document.querySelector('#assunto');
	var $msg = document.querySelector('#msg');
	var $emailLabel = document.querySelector('.js-email span'); 

	var padraoEmail = /^\w+[\.-]?\w+?@\w+\.\w+\.?\w{2}?/;

	$email.addEventListener('input', function(){
		var email = this.value;

		if(padraoEmail.test(email)){
			$email.style.borderColor = 'rgba(34, 200, 175, 1)';
			$emailLabel.style.display = 'none';
		}else{
			$email.style.borderColor = 'red';
			$emailLabel.style.display = 'inline';
			$emailLabel.style.color = 'red';
		}
	})

})();

