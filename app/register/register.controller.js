
angular.module( 'register' )
	.controller(
		'RegisterController',
		[
			'$location', 'userManagerFactory',
			function setCtrl($location, userManagerFactory) {

				// For bindings

				const register = this;

				// User register model info

				register.model = {
					user: {
						username: '',
						password: '',
						passwordConfirm: '',
						title: '',
						description: ''						
					},
					form: {						
						passwordsValid: false
					}
				}

				register.updatePasswordsValidity = updatePasswordsValidity;
				register.registerUser = registerUser;

				// This will check if both password and it's confirmation are valid

				function updatePasswordsValidity() {
					if ( register.model.user.password && 
							 register.model.user.passwordConfirm ) {							
						  register.model.form.passwordsValid = angular.equals(
							register.model.user.password,
							register.model.user.passwordConfirm
						);
					}
				}

				// Register user and change path

				function registerUser() {
					userManagerFactory.setUser( register.model.user );
					$location.path( '/home' );
				}

			}
		]
	);