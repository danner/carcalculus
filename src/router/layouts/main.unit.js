import MainLayout from './main'

describe('@layouts/main', () => {
  it('renders its content', () => {
    const slotContent = 'Loading...'
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
