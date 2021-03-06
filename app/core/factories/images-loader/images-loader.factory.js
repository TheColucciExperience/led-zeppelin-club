
// This factory will force the browser to load images before we display them

angular.module( 'imagesLoader' )
	.factory(
		'imagesLoaderFactory',
		[
			'$q',
			function setFactory($q) {

				function loadImages(...imgs) {					

					// Creating future image promises array

					const promisedImgs = [];

					imgs.forEach( function pushPromiseImg(imgSrc) {

						// Creating deferred and img

						const deferred = $q.defer(),
							img = document.createElement( 'img' );

						// Forcing browser to load image

						img.src = imgSrc;

						img.addEventListener( 'load', function resolveImg() {							
							deferred.resolve( imgSrc );
						} );

						promisedImgs.push( deferred.promise );

					} );

					return $q.all( promisedImgs ).then(
						function fulfilled(srcsArray) {							
							return srcsArray;
						},
						function rejected(error) {
							console.log( 'Error:' + error );
						}
					);

				}

				return {
					loadImages: loadImages
				}
			}
		]
	);