import React from 'react'
import renderer from 'react-test-renderer'
import ComputedOne from '@components/ComputedOne/index.tsx'
import { minus } from 'Utils/math.ts'
import { testMul } from '@components/ComputedOne/index.tsx'
describe('hello jest', () => {
  test('测试组件的testMul', () => {
    expect(testMul(2, 3)).toBe(6)
  })
  test('测试组件的testminus', () => {
    expect(minus(2, 3)).toBe(-1)
  })
  test('测试组件快照', () => {
    const component = renderer.create(<ComputedOne a={1} b={2}></ComputedOne>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  // test('异步操作测试', () => {
  //   const button = screen.getByText('点击')
  //   fireEvent.click(button)
  //   console.log('==============')
  //   console.log(button)
  //   console.log('==============')
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   expect(console.log).toHaveBeenCalledWith('test111')
  // })
})
