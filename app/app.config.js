
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
										'app/images/backgrounds/intro/intro-background.jpg'										
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
					.when( '/register', {
						templateUrl: 'app/register/register.template.html',
						controller: 'RegisterController',
						controllerAs: 'register',
						resolve: {
							imgsLoaded: [
								'imagesLoaderFactory', 
								function loadImages(imagesLoaderFactory) {
									return imagesLoaderFactory.loadImages(
										'app/images/backgrounds/register/register-background.jpg'										
									);
								}
							]
						}
					} )
					.when( '/home', {
						templateUrl: 'app/home/home.template.html',
						controller: 'HomeController',
						controllerAs: 'home',
						resolve: {
							imgsLoaded: [
								'imagesLoaderFactory', 
								function loadImages(imagesLoaderFactory) {
									return imagesLoaderFactory.loadImages(
										'app/images/backgrounds/home/carousel/carousel-background-1.jpg',
										'app/images/backgrounds/home/carousel/carousel-background-2.jpg',
										'app/images/backgrounds/home/carousel/carousel-background-3.jpg',
										'app/images/backgrounds/home/carousel/carousel-background-4.jpeg',
										'app/images/backgrounds/home/carousel/carousel-background-5.png'
									);
								}
							],
							memberCards: [
								'$http', '$log',
								function loadMembers($http, $log) {
									return $http.get( 'app/data/json/band-members.json' )
												 .then(
												 		function fulfilled(response) {
												 			return response.data.items;
												 		},
												 		function rejected(error) {
												 			$log( 'Error: ' + error );
												 		}
												 	);
								}
							]
						}
					} )
					.when( '/member/:name', {
						templateUrl: 'app/core/partials/detail/detail.template.html',
						controller: 'DetailController',
						controllerAs: 'detail',
						resolve: {
							url: [
								'$q',
								function returnUrl($q) {

									const deferred = $q.defer();
									deferred.resolve( 'app/data/json/band-members.json' );
									return deferred.promise;

								}
							]
						}
					} )

			}
		]
	);
