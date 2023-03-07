export const TextArea = (props) => {
    const {
        fieldClassName, // help to add other bootstrap or custom className to textArea
        labelfor, 
        label, // label for the textArea
        rows, // textArea attribute which tell how many row textArea should occupy default value: 3, possiable value: All Integers
        placeholder, // placeholder for textArea
        divClassName, // className for the div which contains textArea,
        defaultValue,
        onChange
    } = props
    return (
        <div className={divClassName}>
            <label htmlFor={labelfor} className="form-label">{label}</label>
            <textarea className={`form-control ${fieldClassName}`} rows={rows ?? 3} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue}/>
        </div>
    )
}