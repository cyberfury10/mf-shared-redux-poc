import { Provider } from "react-redux"
import React from "react"
import { store } from "./store/store2"
import NameInput from "./components/NameInput"
import NameInputApp1 from "app1/NameInputApp1"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NameInput />
        <NameInputApp1 />
      </div>
    </Provider>
  )
}

export default App
