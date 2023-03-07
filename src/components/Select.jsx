export const Select = (props) => {
    return(
        <div className="border-bottom border-primary" style={{width:'90%'}}>
            <select className="form-select border-0" multiple={false}>
                <option defaultValue="none">{props.defaultMessage}</option>
                {props.options.map((option,index)=>
                    <option value={option.value} key={index}>{option.label}</option>
                )}
            </select>
        </div>
    )
}