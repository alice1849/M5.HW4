import { Badge, ListGroup } from "react-bootstrap";
import {User} from '../Model/UserModel';
import {ListUsers} from '../Model/ListUsersModel';
import  { Card } from 'react-bootstrap';

type IListItemProps ={
    user: User| null;
  }

const ListItem = (props: IListItemProps) => {
  return(
    <ListGroup.Item as="li"
                    className="d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{props.user?.data.first_name}</div>
                        
                      </div>
                    <Badge bg="primary" pill>
                        {props.user?.data.id}
                    </Badge>
    </ListGroup.Item>
)};

type IListProps ={
    children: ListUsers| null;
}

const List = (props: IListProps) => {
  console.log(props.children);
  return(
  <ListGroup as="ol" numbered>
    {props.children?.data.map((item) =>
    <ListGroup.Item>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.avatar} />
        <Card.Body>
          <Card.Title>{item.first_name}</Card.Title>
        </Card.Body>
      </Card> 
    </ListGroup.Item>
    )}
  </ListGroup>
)};

export default List;