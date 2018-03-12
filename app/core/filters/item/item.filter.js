
angular.module( 'item' )
	.filter(
		'item',
		function filterFactory() {
			return function filterItem(inputArray, itemName) {

				let item;

				inputArray.forEach( function getItem(obj) {

					if ( obj.name.toLowerCase().split( ' ' ).join( '-' ) === itemName ) {
						item = obj;
					}

				} );

				return item;

			}
		}
	);
