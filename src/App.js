import Buttons from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {getStudent} from "./redux/Student";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    const student = useSelector((state) => state.student)

    useEffect(() => {
        dispatch(getStudent())
    },[])
    console.log(student.value)
    return (
    <div>
      <h1>Counter: {counter.value}</h1>
      <hr/>
      <Buttons />
            {student.value.map(val => {
                return <h1>
                        {val.id} - {val.title}
                    </h1>
                }
            )}
    </div>
  );
}

export default App;
