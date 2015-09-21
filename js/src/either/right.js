class Right {

	constructor ( iterable ) {
		this.collection = iterable ;
	}

	* map ( fn ) {
		for ( const value of this ) yield fn( value ) ;
	}

	* [Symbol.iterator] ( ) {
		yield* this.collection ;
	}

}

const right = ( iterable ) => new Right( iterable ) ;
