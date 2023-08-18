import './styles.css'
export type InputPropTypes={
    value:string;
    onChange :(e) => void;
    label :string;
    type: 'text'|'password'

}
const Input :React.FC <InputPropTypes> = ({label,value,type,onChange})=>{


return(
    <div>
        <div className='relative'>
        <input className='input'type={type} value={value} onChange={onChange} data-testid = "input-test"/>
        <label className={value.length>0&&`activeLabel`} data-testid = "label-test">{label}</label>
        </div>

    </div>
)
}

export default Input;