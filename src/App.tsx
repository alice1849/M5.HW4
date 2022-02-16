import React, { useEffect, useState } from 'react';
import './App.css';
import  { Button, Card } from 'react-bootstrap';
import { User} from './Model/UserModel';
import {Unknown} from './Model/UnknownModel';
import UserComponent from './components/UserComponent';
import UnknownComponent from './components/UnknownComponent';
import {ListUsers} from './Model/ListUsersModel';
import ListUsersComponent from './components/ListUsersComponent';
import UnknownListComponent from './components/UnknownListComponent';
import ListItem from "./components/ListUsersComponent";
import { UnknownList } from './Model/UnknownListModel';



const loadUser = async (url: string): Promise<User> => {
  const response = await fetch(url);
  const user = response.status == 404
    ? null
    : await response.json();
  return user as User;
}

const loadUnknown = async (url: string): Promise<Unknown> => {
  const response = await fetch(url);
  const user = response.status == 404
    ? null
    : await response.json();
  return user as Unknown;
}
const loadListUsers = async (url: string): Promise<ListUsers> => {
  const response = await fetch(url);
  const users = response.status == 404
    ? null
    : await response.json();
  return users as ListUsers;
}

const loadUnknownList = async (url: string): Promise<UnknownList> => {
  const response = await fetch(url);
  const users = response.status == 404
    ? null
    : await response.json();
  return users as UnknownList;
}

// const load: <T> (url: string) => Promise<T> = async (url: string): Promise<T> =>{

// }



function App(): JSX.Element {
  
  const [user1, setUser1] = useState<User | null>(null);
  const [flag3, setFlag3] = useState<boolean>(false);

  const [user2, setUser2] = useState<User | null>(null);
  const [flag4, setFlag4] = useState<boolean>(false);

  const [unknown1, setunknown1] = useState<Unknown | null>(null);
  const [flag5, setFlag5] = useState<boolean>(false);

  const [unknown2, setunknown2] = useState<Unknown | null>(null);
  const [flag6, setFlag6] = useState<boolean>(false);

  const [listUsers, setListUsers] = useState<ListUsers| null> (null);
  const [flag, setFlag] = useState<boolean>(false);

  const [listUsers1, setListUsers1] = useState<ListUsers|null>(null);
  const [flag1, setFlag1] = useState<boolean>(false);

  const [unknownList, setunknownList] = useState<UnknownList| null>(null);
  const [flag2, setFlag2] = useState<boolean>(false);


  useEffect(() =>{
    const initialize = async () => {
      const loadedUser1 = await loadUser("https://reqres.in/api/users/2");
      setUser1(loadedUser1); 
      const loadedUser2 = await loadUser("https://reqres.in/api/users/23");
      setUser2(loadedUser2);
      const loadedUnknown1 = await loadUnknown('https://reqres.in/api/unknown/2');
      setunknown1(loadedUnknown1);
      const loadedUnknown2 = await loadUnknown('https://reqres.in/api/unknown/23');
      setunknown2(loadedUnknown2);
      
      const loadListUsers1 = await loadListUsers('https://reqres.in/api/users?page=2');
      console.log(loadListUsers1);
      setListUsers(loadListUsers1);
      const loadListUsers2 = await loadListUsers('https://reqres.in/api/users?delay=3');
      setListUsers1(loadListUsers2);
      const loadUnknownList1 = await loadUnknownList('https://reqres.in/api/unknown');
      setunknownList(loadUnknownList1);

    }
    initialize();
    return () => {

    }
  }, [])


  useEffect(() =>{
    console.log("User1 changed");
  }, [user1])

  useEffect(() =>{
    console.log("User2 changed");
  }, [user2])
  
  const handleFlag = (value: React.Dispatch<React.SetStateAction<boolean>>) => {
    value (currentFlag => !currentFlag)
  }


  return (
    <>
    <br></br>
    <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag3)}>Click to show/hide first User</Button>
    { flag3 && <UserComponent user={user1}></UserComponent>}
    </div>
    <br></br>
    <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag4)}>Click to show/hide second User </Button>
    { flag4 && <UserComponent user={user2}></UserComponent>}
    </div>
    <br></br>
    <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag5)}>Click to show/hide first Resourse </Button>
    { flag5 && <UnknownComponent unkmown={unknown1}></UnknownComponent>}
    </div>
    <br></br>
    <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag6)}>Click to show/hide second Resourse </Button>
    { flag6 && <UnknownComponent unkmown={unknown2}></UnknownComponent>}
    </div>
    <br></br>
     <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag)}>Click to show/hide first list of Users</Button>
    { flag && <ListUsersComponent children={listUsers}></ListUsersComponent>}
    </div> 
    <br></br>
     <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag1)}>Click to show/hide second list of Users</Button>
    { flag1 && <ListUsersComponent children={listUsers1}></ListUsersComponent>}
    </div> 
    <br></br>
     <div className="App">
    <Button className='MyBtn' onClick={()=> handleFlag(setFlag2)}>Click to show/hide list of Resourses</Button>
    { flag2 && <UnknownListComponent children={unknownList}></UnknownListComponent>}
    </div> 
  </>
  );
}


export default App;
