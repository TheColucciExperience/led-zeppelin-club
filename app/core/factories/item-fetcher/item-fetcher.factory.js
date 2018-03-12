
angular.module( 'itemFetcher' )
	.factory(
		'itemFetcherFactory',
		[
			'$http', '$q', 'itemFilter', 
			function fetcherFactory($http, $q, itemFilter,) {
				return {

					/* This method will fetch and filter items based on their name
					 * and return the corresponding object
					 */

					fetch(url, name) {

						// Creating promise to return object

						const deferred = $q.defer();

						$http.get( url )
						.then(
						 	function fulfilled(response) {						 		
						 		deferred.resolve( itemFilter( response.data.items, name ) );
						 	},
						 	function rejected(error) {
						 		deferred.reject( 'Error:' + error );
						 	}
						);

						return deferred.promise;

					}
				}
			}
		]
	);
