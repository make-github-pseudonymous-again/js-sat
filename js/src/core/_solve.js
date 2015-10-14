function* _solve ( instance , watchlist , assignment , d ) {

    /**
     * Recursively solve SAT by assigning to variables d, d+1, ..., n-1. Assumes
     * variables 0, ..., d-1 are assigned so far. A generator for all the
     * satisfying assignments is returned.
	 */
    if ( d === instance.variables.length ) {
        yield assignment ;
        return ;
	}

    for ( let a of [ 0 , 1 ] ) {

        assignment[d] = a ;

        if ( update_watchlist( instance , watchlist , (d << 1) | a , assignment ) ) {
            yield* _solve( instance , watchlist , assignment , d + 1 ) ;
		}

	}

	assignment[d] = -1 ;

}
