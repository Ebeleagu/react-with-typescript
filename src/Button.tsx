interface Buttonprops {
    btnText: string;
    color: string;
    bg: string;
}

function Button (props : Buttonprops) {
    return(
        <button style={{color: props.color, backgroundColor: props.bg}}>{props.btnText}</button>
    );
}
export default Button;