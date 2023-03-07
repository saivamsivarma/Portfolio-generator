export const Input = (props) => {
    return (
        <div className={props.column}>
            <label className="form-label" htmlFor={props.labelFor}>{props.label}</label>
            <input type={props.type ?? 'text'} placeholder={props.placeholder} className="form-control"/> {/* className: form-control adds css to input ref=https://getbootstrap.com/docs/5.3/forms/form-control/ */}
        </div>
    );
}