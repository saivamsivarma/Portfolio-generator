export const Button = (props) =>{
    const {
        type, // type of the button possiable values:[reset, submit, button]
        className, // can add other bootstrap classes
        click, // function will trigger on click
        value // value of the button
    } = props
    return(
        <button type={type ?? 'button'} className={`btn ${className}`} onClick={click}>{value}</button>
    )
}