import './Status.css'
type StatusPropTypes={
    label:string
}


const Status :React.FC <StatusPropTypes>= ({label}) =>{
    return (
        <div className={`status-container ${label}`}>
            <span>{label}</span>

        </div>
    )
}
export default Status;