import {useDispatch, useSelector } from "react-redux";
import {decrement, increment, incrementByAmount, incrementAsync } from "./state/counter/counterSlice";
import {RootState, AppDispatch} from "./state/store";

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()



    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>increment by 10</button>
                <button onClick={() => dispatch(incrementAsync(10))}>increment async</button>
            </div>
        </div>
    )
}

export default Counter