import Button from "../button/Button"

const Popup=()=>{
    return(
        <div className="popup-container">
            <div className="para-1">
                <span>Are you sure?</span>
            </div>
            <div className="para-2">
                <span>Do you really want to delete employee?</span>
            </div>
            <div className="btton-container">
                <Button text="confirm" type="submit" onClick={()=>{}}/>
                <Button text="cancel" type="reset" onClick={()=>{}}/>

            </div>


        </div>
    )
}
export default Popup;