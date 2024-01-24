import PhotosListItem from "./PhotosListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";

function PhotosList({album}){ 
    const {data,error,isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();
    const handleButtonAdd = () => {
        addPhoto(album);
    };
    let content,header;
    if(isFetching){
        content = <Skeleton times={3} className={'h-10 w-full'}/>
    }
    else if(error){
        content = <div>Error Loading Photos</div>
    }
    else{
        content = data.map((photo)=>{
            return(
                <PhotosListItem photo={photo} key={photo.id}/>
            )
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold"> Photos in {album.title}</h3>  
            <Button loading={results.isLoading} onClick={() => handleButtonAdd()}>+ Add Photo</Button>
            </div>
            <div className="mx-8 flex flex-row justify-center">
                {content && content.length ? content : 'No Albums'}
            </div>
        </div>    
    )
}

export default PhotosList;