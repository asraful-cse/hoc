import Counter from "./hoc/Counter";

const A = (props) => {
    const {count, increment, name} = props;
    return ( <div>
      <button onClick={increment}> click</button> <span>{name} {count}</span>
    </div> );
}
 
export default Counter(A);