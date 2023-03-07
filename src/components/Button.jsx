export const Button = (props) =>{
    return(
        <button type={props.type ?? 'button'} className={`btn ${props.className}`} onClick={props.click}>{props.value}</button>
    )
}