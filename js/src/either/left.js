class Left {

	constructor ( item ) {
		this.item = item ;
	}

	map ( fn ) {
		return this ;
	}

}

const left = ( item ) => new Left( item ) ;
