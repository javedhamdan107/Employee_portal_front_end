import './DropDown.css'
export type DropDownPropTypes={
    options:string[];
    value:string
    onChange :(e) => void;
    label :string;

}
const DropDown :React.FC <DropDownPropTypes> = ({options,label,value,onChange})=>{


return(
    <div className='input-container'>
      
        <label data-testid = "label-test">{label}</label><br></br> 
        {/* <input className='input'type={type} value={value} onChange={onChange} /> */}
        <select className='dropdown' onChange={onChange} data-testid = "select-test">
            {/* <option >Choose {label}</option> */}
            {
                
                options.map((ele)=>{
                    return <option selected={value===ele}>{ele}</option>
                })
            }

        </select>
        

    </div>
)
}

export default DropDown;