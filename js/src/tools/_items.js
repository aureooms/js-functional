const _items = function* ( object ) {

	for ( let key in object ) {

		yield [ key , object[key] ] ;

	}

} ;

exports._items = _items ;
