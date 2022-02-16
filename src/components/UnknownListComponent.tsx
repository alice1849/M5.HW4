import { Badge, ListGroup } from "react-bootstrap";
import {Unknown} from '../Model/UnknownModel';
import {UnknownList} from '../Model/UnknownListModel';
import  { Card } from 'react-bootstrap';

type IListItemProps ={
    unknown: Unknown| null;
  }

const ListItem = (props: IListItemProps) => {
  return(
    <ListGroup.Item as="li"
                    className="d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{props.unknown?.data.name}</div>
                        
                      </div>
                    <Badge bg="primary" pill>
                        {props.unknown?.data.year}
                    </Badge>
    </ListGroup.Item>
)};

type IListProps ={
    children: UnknownList| null;
}

const List = (props: IListProps) => {
  console.log(props.children);
  return(
  <ListGroup as="ol" numbered>
    {props.children?.data.map((item) =>
    <ListGroup.Item>
      <Card
     bg={item.color}
     border={item.color}
     key={item.id}
    // text={item.name === 'light' ? 'dark' : 'white'}
     //style={{ width: '18rem' }}
     style={{ color: item.color}}
     className="mb-2"
     >
    <Card.Header>Color of {item.year} year</Card.Header>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
       Pantone value: {item.pantone_value}
      </Card.Text>
    </Card.Body>
    </Card>
    </ListGroup.Item>
    )}
  </ListGroup>
)};

export default List;