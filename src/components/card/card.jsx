import React from 'react';
import './card.css';

const Card = props => <div className={`card ${props.className}`}>{props.children}</div>;

export default React.memo(Card);