import './DropDown.css'
type DropDownPropTypes={
    options:string[];
    value:string
    onChange :(e) => void;
    label :string;

}
const DropDown :React.FC <DropDownPropTypes> = ({options,label,value,onChange})=>{


return(
    <div className='input-container'>
      
        <label >{label}</label><br></br> 
        {/* <input className='input'type={type} value={value} onChange={onChange} /> */}
        <select className='dropdown'>
            <option >Choose {label}</option>
            {
                
                options.map((ele)=>{
                    return <option>{ele}</option>
                })
            }

        </select>
        

    </div>
)
}

export default DropDown;