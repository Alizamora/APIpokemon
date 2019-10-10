import React from 'react';
import Card from './card';

export default (props)=> {
    return (
        <div>
            {props.cards.map(card => <Card imageUrl={card.imageUrl} name={card.name} />)}
        </div>
    )
}
