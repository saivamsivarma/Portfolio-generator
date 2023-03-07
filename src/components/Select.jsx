export const Select = (props) => {
    const {
        defaultValue,
        options
    } = props;
    return(
        <div className="border-bottom border-primary" style={{width:'90%'}}>
            <select className="form-select border-0" multiple={false} defaultValue={defaultValue}>
                <option defaultValue="none">Select An Option</option>
                {options.map((option,index)=>
                    <option value={option.value} key={index}>{option.label}</option>
                )}
            </select>
        </div>
    )
}