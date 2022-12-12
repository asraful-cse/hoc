import Counter from "./hoc/Counter";

const B = (props) => {
    const {count, increment, name} = props;
    return ( <div>
        <button onMouseOver={increment}>MouseOver</button> <span>{name} {count} </span>
    </div> );
}
 
export default Counter(B);