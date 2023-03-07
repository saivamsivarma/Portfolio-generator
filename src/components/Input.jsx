export const Input = (props) => {
    const {
        column, // used when input field is used in the form grid
        labelfor,
        label, // label of the input filed
        type, // type of the input field default value: "text" possiable values:[file, number, password, email,tel]
        placeholder, // placeholer of the input field
        className, // help to add other bootstrap or custom className
        fileAccept, // used to tell what file file should be accept common values:["image/*","video/*"]
        imageRef, // to add React ref to input field
        onChange, // function trigger when value of field changes
        defaultValue // default value of the input field;
    } = props
    return (
        <div className={column}>
            <label className="form-label" htmlFor={labelfor}>{label}</label>
            <input
                type={type ?? 'text'}
                placeholder={placeholder}
                className={`form-control ${className}`}
                ref={imageRef}
                accept={fileAccept}
                defaultValue={defaultValue}
                onChange={onChange} /> {/* className: form-control adds css to input ref=https://getbootstrap.com/docs/5.3/forms/form-control/ */}
        </div>
    );
}