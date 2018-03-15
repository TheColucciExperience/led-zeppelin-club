
angular.module( 'coreDirectives' )
	.directive(
		'loadIndicator',
		[
			'$rootScope',
			function returnDDO($rootScope) {
				return {
					restrict: 'E',
					scope: {},
					templateUrl: 'app/core/directives/load-indicator/load-indicator.template.html',
					link: function toggleIndicator($scope, $element, $attrs) {

						$scope.isLoading = true;

						$rootScope.$on( '$routeChangeStart', function activateLoad() {
							$scope.isLoading = true;
						} );

						$rootScope.$on( '$routeChangeSuccess', function activateLoad() {
							$scope.isLoading = false;
						} );

					}
				}
			}
		]
	);
