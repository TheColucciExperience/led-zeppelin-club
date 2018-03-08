
angular.module( 'ledBackground' )
	.component(
		'ledBackground',
		{
			bindings: {
				url: '@'
			},
			templateUrl: 
				'app/core/components/led-background/led-background.template.html'			
		}
	)