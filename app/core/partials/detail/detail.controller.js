
angular.module( 'detail' )
	.controller(
		'DetailController',
		[
			'$routeParams', 'itemFetcherFactory', 'url',
			function setCtrl($routeParams, itemFetcherFactory, url) {

				const detail = this;
				
				// Getting page item	

				itemFetcherFactory.fetch(
					url,
					$routeParams.name
				).then(
					function fulfilled(data) {
						detail.item = data;
						detail.bgStyle = {
							'background-image': `url(${ data.img })`
						}						
					}
				);



			}
		]
	);
