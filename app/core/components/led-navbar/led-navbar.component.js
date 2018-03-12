
angular.module( 'ledNavbar' )
	.component(
		'ledNavbar',
		{	
			
			templateUrl: 'app/core/components/led-navbar/led-navbar.template.html',
			controller: function navbarCtrl() {

				const navbar = this;

				navbar.active = false;
				navbar.canToggle = true;
				navbar.toggleActiveState = toggleActiveState;
				navbar.toggleClickControl = toggleClickControl;

				function toggleActiveState() {
					navbar.active = !navbar.active;
				}

				function toggleClickControl() {
					navbar.canToggle = !navbar.canToggle;
				}

			}
		}
	)
