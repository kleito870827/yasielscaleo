import React from 'react'

const defaultContextValue = {
  global: {
    // set your initial data shape here
    showMenu: true,
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      global: {
        ...state.global,
        ...newData,
      },
    }))
  }

  render() {
    console.log(this.state.global.showMenu);
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
