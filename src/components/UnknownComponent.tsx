import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import {Unknown} from '../Model/UnknownModel'

type UnknownProps ={
    unkmown: Unknown| null;
};

const UnknownComponent = (props: UnknownProps) => {

    const result = props.unkmown !== null
    ? (//<div style={{color: props.unkmown.data.color}}>{props.unkmown.data.name}</div>
        <Card
        bg={props.unkmown.data.color}
        border={props.unkmown.data.color}
        key={props.unkmown.data.id}
        // text={item.name === 'light' ? 'dark' : 'white'}
        //style={{ width: '18rem' }}
        style={{ color: props.unkmown.data.color}}
        className="mb-2"
        >
        <Card.Header>Color of {props.unkmown.data.year} year</Card.Header>
        <Card.Body>
        <Card.Title>{props.unkmown.data.name}</Card.Title>
        <Card.Text>
        Pantone value: {props.unkmown.data.pantone_value}
        </Card.Text>
        </Card.Body>
        </Card>)
    : (<div>No content</div>)
    

    return (
        <div className="user-info">
            {result}
        </div>
    );
}
export default UnknownComponent;