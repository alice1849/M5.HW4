import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import {User} from '../Model/UserModel';


type UserProps = { 
    user: User| null, 
};

const UserComponent = (props: UserProps) => {

    useEffect(() =>{
        
        console.log("User component is ready")
        return () => {
            console.log("User component is destroyed")
        }
      }, [])

    const result = props.user !== null
    ? (<Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={props.user.data.avatar} />
       <Card.Body>
       <Card.Title>{props.user.data.first_name}</Card.Title>
       </Card.Body>
       </Card>) 
       
  //<div>{props.user.data.first_name}</div>)
    : (<div>No content</div>)
    

    return (
        
        <div className="user-info">
            {result}
        </div>
    );
  }
export default UserComponent