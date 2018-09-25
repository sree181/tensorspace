import { ModelLayerInterval } from "./Constant";

let LayerLocator = (function() {

	function calculateLayersPos( layers ) {

		let depth = layers.length;
		let layersPos = [];

		let initPos;

		if ( depth % 2 === 1 ) {

			initPos = - ModelLayerInterval * ( ( depth - 1 ) / 2 );

		} else {

			initPos = - ModelLayerInterval * ( depth / 2 ) + ModelLayerInterval / 2;

		}

		for ( let i = 0; i < depth; i++ ) {

			if ( !layers[ i ].isGroup  ) {

				layersPos.push( {

					x: 0,
					y: initPos,
					z: 0

				} );

				initPos += ModelLayerInterval;

			} else {

				let posArray = [];

				for ( let j = 0; j < layers[ i ].thickness; j ++ ) {

					posArray.push( {

						x: 0,
						y: initPos,
						z: 0

					} );

					initPos += ModelLayerInterval;

				}

				layersPos.push( posArray );

			}

		}

		return layersPos;

	}

	return {

		calculateLayersPos: calculateLayersPos

	}

})();

export { LayerLocator };