
// Timeout directive to show an element on desired time

angular.module( 'coreDirectives' )
	.directive(
		'timeoutVisibility',
		[
			'$timeout',
			function returnDDO($timeout) {
				return {
					scope: {},
					link: function setLink($scope, $element, $attrs) {
						$timeout( function showElement() {
							$element.css( 'visibility', 'visible' );
						}, $attrs.timeout );
					}
				}
			}
		]
	);
