
angular.module( 'home' )
	.controller(
		'HomeController',
		[
			'imgsLoaded', 'memberCards',
			function setCtrl(imgsLoaded, memberCards) {

				const home = this;

				home.carouselImages = imgsLoaded;
				home.cards = memberCards;

			}
		]
	);
