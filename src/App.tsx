// import React from 'react'
// import { add, minus } from 'Utils/math'

// function App() {
//   return <div className="app">{add(5, 6)}</div>
// }

// export default App
import React, { Suspense, useState } from 'react'
import axios from 'axios'
import './app.scss'
const ComputedOne = React.lazy(() => import('Components/ComputedOne'))
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'))

interface IProps {
  name: string
  age: number
}
// axios
//   .get('/api/test')
//   // .get('http://127.0.0.1:3000/test')
//   .then((response: any) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
function App() {
  const [showTwo, setShowTwo] = useState<boolean>(false)
  const showComponent = () => {
    setShowTwo(true)
  }
  return (
    <div className="app">
      <ComputedOne a={1} b={2}></ComputedOne>
      <button onClick={showComponent}>click</button>
      {showTwo && (
        <Suspense fallback={<div>正在加载中</div>}>
          <ComputedTwo a={1} b={4}></ComputedTwo>
        </Suspense>
      )}
    </div>
  )
}

export default App
