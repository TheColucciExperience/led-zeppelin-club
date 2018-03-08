
// Main app module. We also set strict mode for whole app.

'use strict';

angular.module(
	'ledZepClub',
	[

		// *** Angular dependencies

		'ngRoute',
		'ngAnimate',
		'ngAria',

		// *** Project's dependencies

		// ** Core directives

		'coreDirectives',

		// ** Components

		'ledBackground',

		// ** Factories

		'imagesLoader',
		'userManager',

		// ** Partials

		'register'

	]
)
