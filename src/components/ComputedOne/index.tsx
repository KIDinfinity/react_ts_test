import React, { MouseEvent } from 'react'
import './index.scss'
import { add } from 'Utils/math'

interface IProps {
  a: number
  b: number
}
function testMul(a: number, b: number) {
  return a * b
}
function ComputedOne(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)

  const testAscync = (test: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(test)
      }, 1000)
    })
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>, test: string): void => {
    // 执行您的操作
    testAscync(test).then((res) => {
      console.log(res)
    })
  }

  return (
    <p className="computed-one">
      1{`Hi, I'm computed one, my sum is ${sum}.`}
      <button onClick={(e) => handleClick(e, 'test111')}>点击</button>
    </p>
  )
}

export default ComputedOne
export { testMul }
