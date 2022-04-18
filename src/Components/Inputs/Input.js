import './input.css'
const TextField = ({placeholder, onchange, status}) => { 

    return ( 
        <div>
            <input placeholder={placeholder} className={status ? "error" : "input-default"} onChange={onchange} />
        </div>
    )
}
export default TextField