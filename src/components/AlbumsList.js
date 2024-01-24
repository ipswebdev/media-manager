import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton'
import Button from './Button'
import ExpandablePanel from "./ExpandablePanel";
import AlbumsListItem from "./AlbumListItem";


function AlbumsList({user}){
    const {data,error,isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    console.log('addAlb res',results)
    let content;
    let header;

    const handleButtonAdd = (user) => {
        addAlbum(user);
    }

    if(isFetching){
        content = <Skeleton times={3} className={'h-10 w-full'}/>
    }
    else if(error){
        content = <div>Error Loading Albums</div>
    }
    else{
        header = <div>Album:</div>
        content = data.map((alb)=>{
            return(
                <AlbumsListItem album={alb} key={alb.id}/>
            )
        })
    }
    return (
        <div>
            <Button loading={results.isLoading} onClick={() => handleButtonAdd(user)}>+ Add Album</Button>
            <ExpandablePanel header={header}>
            {content && content.length ? content : 'No Albums'}</ExpandablePanel>  
        </div>
    )
}

export default AlbumsList;