
angular.module( 'userManager' )
	.factory(
		'userManagerFactory',
		[
			'$window',
			function returnUserManager($window) {
				return {

					// This manager object will set and get users

					setUser(user) {
						$window.localStorage.userData = JSON.stringify( user );
					},

					getUser() {
						return JSON.parse( $window.localStorage.userData );
					}

				}
			}
		]
	)
