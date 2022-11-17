

const Input = (props) =>{
    
    const enterName = (e) => props.setName(e.target.value)
    const enterPassword = (e) => props.setPassword (e.target.value)

    return(
        <form className="formulario px-6">
            <div className="form-control">
                <label>
                <span className="label-text text-orange-600">User:</span>
                </label>
                <input type="text" className=" input input-xs mb-2 opacity-90 text-orange-600" onChange={enterName} />
            </div>
            <div className="form-control">
                <label>
                <span className="label-text text-orange-600">Password:</span>
                </label>
                <input type="password" className="input input-xs mb-3 opacity-90 text-orange-600" onChange={enterPassword} />
            </div>
        </form>
    ) 
}
export default Input 