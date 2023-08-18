import React from "react"
import './EditDelete.css'
type EditDeletePropTypes={
    onDeleteclickfunc :(e) => void;
    onEditclickfunc :(e) => void;

}


const EditDelete :React.FC <EditDeletePropTypes>= (props) =>{
    return (
        <div className="icn-container">
            <button className='bton-image' data-testid = "delete-test" onClick={props.onDeleteclickfunc}><img className='icon-button' alt='delete' src='assets/icons/delete.png'/></button>
            <button className='bton-image' data-testid = "edit-test" onClick={props.onEditclickfunc}><img className='icon-button' alt='delete' src='assets/icons/edit-1.png'/></button>

        </div>
    )
}
export default EditDelete;