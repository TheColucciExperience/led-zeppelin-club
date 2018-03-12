
angular.module( 'ledNavbar' )
	.directive(
		'navbarToggler',
		[			
			'$timeout',
			function returnDDO($timeout) {
				return {
					scope: {},
					require: '^ledNavbar',
					link: function toggleNavbar($scope, $element, $attrs, $navCtrl) {						

						// This will change navbar state and show it on click

						$element.on( 'click', function changeNavState() {

							// DOM elements to modify

							const linksBox = document.querySelector( '.led-navbar > div' ),
								firstBar = document.querySelector( '#firstBar' ),
								secondBar = document.querySelector( '#secondBar' ),
								thirdBar = document.querySelector( '#thirdBar' );

							if ( $navCtrl.canToggle ) {								

								$navCtrl.toggleClickControl();
								$navCtrl.toggleActiveState();

								// To allow user click after animation

								$timeout( function allowUser() {
									$navCtrl.toggleClickControl();
								}, 1000 );

								if ( $navCtrl.active ) {

									firstBar.style.animation = 
									'animateFirstBar 1s ease forwards';								
									thirdBar.style.animation = 
									'animateThirdBar 1s ease forwards';

									$timeout( function showLinks() {
										secondBar.style.opacity = '0';
										linksBox.style.display = 'flex';
										linksBox.style.animation = 'fadeIn .35s forwards';
									}, 600 );

								}
								else {

									firstBar.style.animation = 
									'reverseFirstBar 1s ease forwards';								
									thirdBar.style.animation = 
									'reverseThirdBar 1s ease forwards';
									linksBox.style.animation = 'fadeOut .35s forwards';

									$timeout( function showLinks() {
										secondBar.style.opacity = '1';
										linksBox.style.display = 'none';
									}, 350 );

								}							

							}

						}	);

					}
				}
			}
		]		
	);
