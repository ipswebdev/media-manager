import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store/apis/albumsApi";
import PhotosList from "./PhotosList";


function AlbumsListItem({album}){
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleAlbumRemove = () => {
        removeAlbum(album);
    }
    const header = <div> <Button loading={results.isLoading} onClick={(e)=>{e.stopPropagation();handleAlbumRemove()}}><GoTrashcan /></Button>{album.title}</div>
    return <>
            <ExpandablePanel header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
    </>;
}

export default AlbumsListItem;