
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
		'ledNavbar',
		'ledFooter',
		'ledCarousel',
		'ledCard',
		'ledAlbum',

		// ** Factories

		'imagesLoader',
		'userManager',
		'itemFetcher',

		// ** Filters

		'item',

		// ** Partials

		'register',
		'home',
		'detail',
		'albums',
		'profile'
		

	]
)
