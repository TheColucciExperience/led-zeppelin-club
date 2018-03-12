
angular.module( 'ledCard' )
	.component(
		'ledCard',
		{
			bindings: {
				card: '<memberCard'
			},
			templateUrl: 'app/led-card/led-card.template.html'			
		}
	);
