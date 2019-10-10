import React from 'react';


export default (props) => {
    return (
        <button>
            <img src={props.imageUrl} alt={props.name} />
        </button>
    )
}