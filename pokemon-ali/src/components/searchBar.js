import React from 'react';

export default props => {
    return (
        <div>
            <label for="searchBar"> 
                <input
                onChange={(e) => props.value(e.target.value)}
                type="search" 
                id="searchBar"
                placeholder="Pokemon name"/>
            </label>
        </div>
    )
}


