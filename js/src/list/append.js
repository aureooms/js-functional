const append = ( x , y ) => x === nil ? y : cons( car( x ) , append( cdr( x ) , y ) ) ;
