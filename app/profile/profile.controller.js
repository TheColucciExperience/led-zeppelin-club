
angular.module( 'profile' )
	.controller(
		'ProfileController',
		[
			'userManagerFactory',
			function configCtrl(userManagerFactory) {

				const profile = this;

				// Profile states

				profile.states = {
					editing: false
				}

				// Local user

				profile.model = {
					localUser: userManagerFactory.getUser(),
					masterUser: userManagerFactory.getUser()
				}

				// User data related methods

				profile.changeEditingState = changeEditingState;
				profile.cancelEdit = cancelEdit;
				profile.updateUser = updateUser;

				function changeEditingState() {
					profile.states.editing = !profile.states.editing;
				}

				function cancelEdit() {
					profile.model.localUser = angular.copy( profile.model.masterUser );
					profile.changeEditingState();
				}

				function updateUser() {
					profile.model.masterUser = angular.copy( profile.model.localUser );
					profile.changeEditingState();
					userManagerFactory.setUser( profile.model.masterUser );
				}

			}
		]
	);
