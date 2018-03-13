
angular.module( 'albums' )
	.controller(
		'AlbumsController',
		[
			'albumsData',
			function setCtrl(albumsData) {

				const albums = this;

				albums.data = albumsData;

			}
		]
	);
