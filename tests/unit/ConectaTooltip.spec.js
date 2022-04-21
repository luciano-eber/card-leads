import { mount } from '@vue/test-utils'
import ConectaTooltip from '@/components/ConectaTooltip'

const content = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

test('default', () => {

  const wrapper = mount(ConectaTooltip, {
    props: { 
      content: content 
    }
  })
  
  expect(wrapper.props('content')).toBe(content)
})

test('passing styles props', () => {

  const bgColor = 'red'
  ,color = 'black'

  const wrapper = mount(ConectaTooltip, {
    props: {
      bgColor, color
    }
  })

  expect(wrapper.find('path').attributes('fill')).toBe(bgColor)
  expect(wrapper.find('.bubble').attributes('style')).toBe(`background-color: ${bgColor}; color: ${color};`)
})