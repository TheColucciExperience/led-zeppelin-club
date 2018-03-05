
angular.module( 'ledZepClub' )
	.component(
		'background',
		{
			bindings: {
				url: '@'
			},
			templateUrl: 'app/core/background/background.template.html'			
		}
	)