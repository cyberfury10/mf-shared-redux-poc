import { Provider } from "react-redux"
import React from "react"
import { store } from "./store/store2"
import NameInput from "./components/NameInput"
import NameInputApp2 from "app2/NameInputApp2"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NameInput />
        <NameInputApp2 />
      </div>
  </Provider>
  )
}

export default App
