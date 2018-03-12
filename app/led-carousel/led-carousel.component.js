
angular.module( 'ledCarousel' )
	.component(
		'ledCarousel',
		{
			bindings: {
				bgList: '<'
			},
			templateUrl: 'app/led-carousel/led-carousel.template.html',
			controller: function carouselController() {

				// This will keep track whether layer 1 is on top or not

				const carousel = this;

				carousel.isFirstTop = true;
				carousel.changeLayer = changeLayer;

				function changeLayer() {
					carousel.isFirstTop = !carousel.isFirstTop;
				}

			}
		}
	);
