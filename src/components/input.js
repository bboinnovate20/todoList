
export default function input(props) {
    return (
        <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="des-input"/>
    );
}   