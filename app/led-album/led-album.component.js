
angular.module( 'ledAlbum' )
	.component(
		'ledAlbum',
		{
			bindings: {
				link: '<',
				img: '<',
				name: '<',
				angle: '<'
			},
			templateUrl: 'app/led-album/led-album.template.html',
			controller: function setCtrl() {
				this.$onInit = function setStyle() {
					this.albumStyle = {
						'transform': `rotate(${ this.angle }deg)`
					}	
				}							
			}
		}
	);
