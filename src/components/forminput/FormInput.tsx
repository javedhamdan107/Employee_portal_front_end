import './FormInput.css'
export type FormInputPropTypes={
    value:string;
    onChange :(e) => void;
    label :string;
    type:'text'|'password',

}
const FormInput :React.FC <FormInputPropTypes> = ({label,value,type,onChange})=>{


return(
    <div className='input-container'>
      
      
    <div>
      <label data-testid ='input-label-test'>{label}</label>
      <br />
    </div>

        <input className='input'type={type} value={value} onChange={onChange} placeholder={label}  data-testid ='form-input-test' />

    </div>
)
}

export default FormInput;