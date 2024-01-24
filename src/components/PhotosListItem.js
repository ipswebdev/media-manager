import { useRemovePhotoMutation } from "../store";
import Button from "./Button";

function PhotosListItem({photo}){ 
    const [removePhoto, results] = useRemovePhotoMutation();
    const handleRemove = () => {
        console.log('remove photo')
        removePhoto(photo);
    }
    return (
        <div className="relative m-2">
            <div onClick={()=>handleRemove()}>
                X Delete
            </div>
            <img className="h-20 w-20" src={photo.url} />
        </div>
    )
}

export default PhotosListItem;