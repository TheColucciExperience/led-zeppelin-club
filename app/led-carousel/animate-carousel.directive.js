
angular.module( 'ledCarousel' )
	.directive(
		'animateCarousel',
		[	
			'$interval', '$timeout',
			function returnDDO($interval, $timeout) {
				return {					
					require: 'ledCarousel',
					link: function controlAnimation($scope, $element, $attrs, $carCtrl) {
						
						// Getting layers for backgrounds

						const imgBox1 = document.querySelector( '.image-container-1' ),
							imgBox2 = document.querySelector( '.image-container-2' );

						// Counter for images
						
						let imageCounter = 0;	

						function changeBackground() {

							// Alias

							const bgList = $carCtrl.bgList;

							if ( $carCtrl.isFirstTop ) {
								
								imgBox1.style.backgroundImage = 
								`url( ${ bgList[ imageCounter % bgList.length ] } )`;
								imgBox1.style.animation = 'zoomIn 10s ease forwards';

								imgBox2.style.animation = 'fadeOut .4s ease forwards';
								imgBox2.style.transform = 'scale(1.3, 1.3)';

								$timeout( function toggleBottomLayer() {
									imgBox1.style.zIndex = '100';
									imgBox2.style.zIndex = '0';
								}, 400 );

							}
							else {
								
								imgBox2.style.backgroundImage = 
								`url( ${ bgList[ imageCounter % bgList.length ] } )`;
								imgBox2.style.animation = 'zoomIn 10s ease forwards';

								imgBox1.style.animation = 'fadeOut .4s ease forwards';
								imgBox1.style.transform = 'scale(1.3, 1.3)';

								$timeout( function hideBottomLayer() {
									imgBox1.style.zIndex = '0';
									imgBox2.style.zIndex = '100';
								}, 400 );

							}

							$carCtrl.changeLayer();
							imageCounter++;

						}

						changeBackground();
						$interval( changeBackground, 10000 );

					}
				}
			}
		]
	);
