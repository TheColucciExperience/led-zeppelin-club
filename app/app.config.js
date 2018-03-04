
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
						template: '<h1>Led Zeppelin Club</h1>'
					} )

			}
		]
	);
