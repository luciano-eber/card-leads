import { mount } from '@vue/test-utils'
import ConectaCard from '@/components/ConectaCard'

test('without props', () => {

  const wrapper = mount(ConectaCard)
  expect(wrapper.find('.conecta-card').exists()).toBe(true)
})

test('with some props', () => {
  const data = {
    name: 'card display name'
  }
  const wrapper = mount(ConectaCard, {
    props: {
      id: 1,
      data
    }
  })

  expect(wrapper.find('.label').element.textContent).toBe(data.name)
  expect(Number.isInteger(wrapper.props('id'))).toBe(true)
})