import { mount } from '@vue/test-utils'
import ConectaIcon from '@/components/ConectaIcon'

test('with info icon', () => {

  const wrapper = mount(ConectaIcon, {
    props: { 
      id: 'info' 
    }
  })
  
  expect(wrapper.find({ref: 'current'}).exists()).toBeTruthy()
  expect(wrapper.props('id')).toBe('info')
})

test('with not found icon', () => {
  const notFoundIcon = 'icon not exist on icons lib'
  const wrapper = mount(ConectaIcon, {
    props: {
      id: notFoundIcon
    }
  })

  expect(wrapper.find({ref: 'current'}).exists()).toBeTruthy()
})