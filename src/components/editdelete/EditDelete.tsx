import React from "react"
import './EditDelete.css'
type EditDeletePropTypes={
    onclickfunc :(e) => void;
}


const EditDelete :React.FC <EditDeletePropTypes>= (props) =>{
    return (
        <div className="icn-container">
            <button className='bton-image' onClick={props.onclickfunc}><img className='icon-button' alt='delete' src='assets/icons/delete.png'/></button>
            <button className='bton-image' onClick={props.onclickfunc}><img className='icon-button' alt='delete' src='assets/icons/edit-1.png'/></button>

        </div>
    )
}
export default EditDelete;