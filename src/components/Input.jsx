

const Input = (props) =>{
    
    const enterName = (e) => props.setName(e.target.value)
    const enterPassword = (e) => props.setPassword (e.target.value)

    return(
        <form className="px-6 max-w-xs">
            <div className="form-control">
                <label>
                <span className="label-text text-orange-600">User:</span>
                </label>
                <input type="text" 
                       placeholder=" Enter your name or Email"
                       className=" input input-xs mb-2 opacity-90 text-orange-600 " 
                       onChange={enterName} />
            </div>
            <div className="form-control">
                <label>
                <span className="label-text text-orange-600">Password:</span>
                </label>
                <input type="password"
                       placeholder=""
                       className="input input-xs mb-3 opacity-90 text-orange-600 " 
                       onChange={enterPassword} />
            </div>
        </form>
    ) 
}
export default Input 