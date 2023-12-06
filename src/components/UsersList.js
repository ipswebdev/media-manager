import { useEffect, } from "react";
import {  useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";


function UsersList(){
    const [doFetchUsers,isLoadingUsers,loadingUsersError] =  useThunk(fetchUsers);
    const [doCreateUser,creatingUserLoading,creatingUserError] =  useThunk(addUser);
    const {data} = useSelector((state)=>state.users);
    const renderedUsers = data.map((user,i) => {return(
        <UserListItem key={i} loading={creatingUserLoading}  user={user}></UserListItem>
    )})

    useEffect(()=>{
        doFetchUsers();
    },[doFetchUsers])

    const handleUserAdd=()=>{
        doCreateUser()
    }

    

    if(isLoadingUsers){
        return(<div>
            <div className="flex flex-row justify-between m-3 items-center">
                <h1 className="text-xl m-2">Users</h1>
                <Button loading={creatingUserLoading} onClick={handleUserAdd}>+ Add</Button>
            </div>
            <Skeleton times={5} className={'h-10 w-full'}></Skeleton>
        </div>
        )
    }
    if(loadingUsersError){
        return(<div>Error Fetching Users!</div>)
    }
    return(
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="text-xl m-2">Users</h1>
                <Button loading={creatingUserLoading} onClick={handleUserAdd}>+ Add</Button>
            </div>
            {
                renderedUsers
            }
        </div>
    );
}
export default UsersList;