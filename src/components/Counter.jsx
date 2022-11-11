import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../store/slices/counter"

export default function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <section style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ marginRight: '1rem' }}>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}
