import React from 'react'
import { add, minus } from 'Utils/math'

function App() {
  return <div className="app">{add(5, 6)}</div>
}

export default App
// import React, { Suspense, useState } from 'react'
// import axios from 'axios'
// import './app.scss'
// const ComputedOne = React.lazy(() => import('Components/ComputedOne'))
// const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'))

// interface IProps {
//   name: string
//   age: number
// }
// axios
//   .get('/api/test')
//   // .get('http://127.0.0.1:3000/test')
//   .then((response: any) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// function App(props: IProps) {
//   const [showTwo, setShowTwo] = useState<boolean>(false)
//   return (
//     <div className="app">
//       {/* 测试注释 */}
//       <Suspense fallback={<div>Loading111111111111111111111...</div>}>
//         <ComputedOne a={1} b={2} />
//         {showTwo && <ComputedTwo a={3} b={4} />}
//         <button type="button" onClick={() => setShowTwo(true)}>
//           显示Two
//         </button>
//       </Suspense>
//     </div>
//   )
// }

// export default App
