import './button.css'

const Button = ({label, loading, onclick}) => { 

    return ( 
        <div>
            <button disabled={loading} className='btn' onClick={onclick}>{ loading ? "loading.." : label } </button>
        </div>
    )
}
export default Button