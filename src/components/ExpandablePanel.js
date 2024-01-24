import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({header,children}){

    const [isExpanded,setExpandedState] = useState(false)
    return (
    <>
        <div className="flex justify-between items-center mb-2 border rounded" onClick={()=>{setExpandedState(!isExpanded)}}>
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {header}
            </div>
            <div>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</div>
        </div>
        <div>{ isExpanded && <div className="p-2 border-t">{children}</div>}</div>
    </>  
    )
}

export default ExpandablePanel;

