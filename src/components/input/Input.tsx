import './styles.css'
type InputPropTypes={
    value:string;
    onChange :(e) => void;
    label :string;
    type: 'text'|'password'

}
const Input :React.FC <InputPropTypes> = ({label,value,type,onChange})=>{


return(
    <div>
        <div className='relative'>
        <input className='input'type={type} value={value} onChange={onChange} />
        <label className={value.length>0&&`activeLabel`}>{label}</label>
        </div>

    </div>
)
}

export default Input;