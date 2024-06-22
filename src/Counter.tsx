import {useDispatch, useSelector } from "react-redux";
import {decrement, increment } from "./state/counter/counterSlice";
import {RootState} from "./state/store";

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={()=> dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        </div>
    )
}

export default Counter