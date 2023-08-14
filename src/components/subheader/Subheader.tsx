import './Subheader.css'
type SubheaderPropTypes={
    headerText:string;
    icon:string;
    iconText:string;
    onclickfunc:(e:any) => void;


}
const Subheader : React.FC <SubheaderPropTypes>  = ({headerText,icon,iconText,onclickfunc}) =>{
    return (
        <div className="subheader">
        <div className='heading-container'>
            <span className="heading">{headerText}</span>
        </div>
        <div className='button-container'>
            
            {/* <img className='icon-button' alt={iconText} src={icon}/>   */}
            <button className='btn-image' onClick={onclickfunc}><img className='icon-button' alt={iconText} src={icon}/></button>
            
            <div className='text-container'>
            <span className='icon-text'>{iconText}</span>
            </div>
            
        </div>
        

        </div>
    )
}
export default Subheader;
