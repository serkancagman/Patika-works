import React from 'react'

const Main = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>
            
            <h2>{count}</h2>
            <br />
            <button onClick={()=> setCount(count +1)} > Increase</button>
            <button onClick={()=> setCount(count -1)}>Decrease</button>
        </div>
    )
}

export default Main
