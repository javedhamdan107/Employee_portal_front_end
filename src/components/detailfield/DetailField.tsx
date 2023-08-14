import React from "react"
import Status from "../status/Status"
import './DetailField.css'
type DetailFieldPropTypes = {
    key :string,
    value:string,
    detail:string,
}

const DetailField :React.FC <DetailFieldPropTypes> = (props) => {
    return(
        <div className="detail-field-container">
            <div className="key-detail-container">
                <span className="key-detail">{props.detail}</span>
            </div>
            <div>
                {
                    props.detail==='status'?<Status label={props.value}/>:props.value
                }
            </div>

        </div>
    )
}
export default DetailField;