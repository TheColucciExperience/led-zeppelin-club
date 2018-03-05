
// App configuration for Led Zeppelin Club

angular.module( 'ledZepClub' )
	.config(
		[
			'$locationProvider',
			'$routeProvider',
			'$compileProvider',
			function configApp($locationProvider, $routeProvider, $compileProvider) {

				// Disabling debug data, comments directives and classes directives

				$compileProvider.debugInfoEnabled( false );
				$compileProvider.commentDirectivesEnabled( false );
				$compileProvider.cssClassDirectivesEnabled( false );

				// Setting HTML5 mode

				$locationProvider.html5Mode( true );

				// Routes 

				$routeProvider
					.when( '/', {
						templateUrl: 'app/intro/intro.template.html',
						resolve: {
							imgsLoaded: [
								'imagesLoaderFactory', 
								function loadImages(imagesLoaderFactory) {
									return imagesLoaderFactory.loadImages(
										'app/images/backgrounds/intro-background.jpg'
									);
								}
							]
						},
						// We must use the resolved version to allow DI
						resolveRedirectTo: [
							'$window',
							function checkUserRoute($window) {
								
								if ( $window.localStorage.userData ) {
									return '/home';
								}

							}
						]
					} )

			}
		]
	);
