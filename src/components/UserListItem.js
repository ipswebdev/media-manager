import { Fragment } from "react";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
import { GoTrashcan } from "react-icons/go";

function UserListItem({user,loading}){
    const [doRemoveUser,removingUserLoading,removingUserError] =  useThunk(removeUser);
    
    const handleUserRemove=(user)=>{
        doRemoveUser(user)
    }

    const header =<Fragment>
        <Button loading={loading} onClick={(e)=>{e.stopPropagation();handleUserRemove(user)}}><GoTrashcan /></Button>
        {user.name}           
    </Fragment>;

    return (
        <ExpandablePanel header={header}><AlbumsList user={user} /></ExpandablePanel>  
    )
}

export default UserListItem;

