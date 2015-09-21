
const match = function ( patterns , value ) {

	const cases = _cases( patterns ) ;

	for ( const [ Type , action ] of cases ) {

		if ( value instanceof Type ) return action( value ) ;

	}

	return left( "no match" ) ;

} ;

exports.match = match ;
