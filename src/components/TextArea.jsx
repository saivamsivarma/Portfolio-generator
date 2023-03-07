export const TextArea = (props) => {
    return(
        <div className={props.className}>
            <label htmlFor={props.labelFor} className="form-label">{props.label}</label>
            <textarea className={`form-control ${props.fieldClassName}`} rows={props.rows ?? 3} placeholder={props.placeholder}/>
        </div>
    )
}