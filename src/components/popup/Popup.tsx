import Button from "../button/Button"
import "./Popup.css"
type PopUpPropTypes={
    onConfirmClickFunc :(e) => void;
    onCancelClickFunc :(e) => void;

}
const Popup :React.FC <PopUpPropTypes>=(props)=>{
    return(
        <div className="popup-wrapper">
             <div className="popup-container">
            <div className="para-1">
                <span>Are you sure?</span>
            </div>
            <div className="para-2">
                <span>Do you really want to delete employee?</span>
            </div>
            <div className="btton-container">
                <Button text="confirm" type="submit" onClick={props.onConfirmClickFunc}/>
                <Button text="cancel" type="reset" onClick={props.onCancelClickFunc}/>

            </div>


        </div>
        </div>
       
    )
}
export default Popup;