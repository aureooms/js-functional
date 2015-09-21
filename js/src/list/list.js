const list = ( head , ...tail ) => cons( head , tail.length ? list( ...tail ) : nil ) ;
