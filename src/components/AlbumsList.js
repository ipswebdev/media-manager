import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from "./ExpandablePanel";


function AlbumsList({user}){
    const {data,error,isLoading,isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    console.log('addAlb res',results)
    let content;
    let header;

    const handleButtonAdd = (user) => {
        addAlbum(user);
    }

    if(isFetching){
        content = <Skeleton times={3} />
    }
    else if(error){
        content = <div>Error Loading Albums</div>
    }
    else{
        header = <div>{user.name}'s Album:</div>
        content = data.map((alb)=>{
            return(
                <div key={alb.id}>Title: {alb.title}</div>
            )
        })
    }
    return (
        <div>
            <Button onClick={() => handleButtonAdd(user)}>+ Add Album</Button>
            <ExpandablePanel header={header}><div>{header}</div>
            {content && content.length ? content : 'No Albums'}</ExpandablePanel>  
        </div>
    )
}

export default AlbumsList;