// scroll  active link
$('.scroll-menu ul li').click(function() {
	$(this).addClass('scrollMenuActive').siblings().removeClass();
});

// tab  active link
$('.tabMenu ul li').click(function() {
	$(this).addClass('tabMenuActive').siblings().removeClass();
});

$('.tabContentbox').hide();
$('.tabMenu').find('a').on('click', function(e) {
	e.preventDefault();
	$('.tabMenu').find('.tabMenuActive').removeClass('current');
	$(this).addClass('tabMenuActive');
	$(this.hash).show().siblings().hide();
});

$('.tabContentbox').first().show();
