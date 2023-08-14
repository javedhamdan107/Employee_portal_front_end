import './FormInput.css'
type FormInputPropTypes={
    value:string;
    onChange :(e) => void;
    label :string;
    type:'text',

}
const FormInput :React.FC <FormInputPropTypes> = ({label,value,type,onChange})=>{


return(
    <div className='input-container'>
      
      {label !== 'Address Line 1' && label !== 'Address Line 2' && (
    <div>
      <label>{label}</label>
      <br />
    </div>
  )}
        <input className='input'type={type} value={value} onChange={onChange} placeholder={label} />

    </div>
)
}

export default FormInput;