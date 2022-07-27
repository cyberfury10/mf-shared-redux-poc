import NameInput from "./NameInput"
import { Provider } from "react-redux"
import React from "react"
import { store } from "./store"
const NameWithoutInjector = React.lazy(() => import("app1/NameWithoutInjector"))

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux</h1>
      <h2>App 2</h2>
      <NameInput />
      <React.Suspense fallback="Loading Name Demo">
        {/* <RemoteName /> */}
        <NameWithoutInjector />
      </React.Suspense>
    </div>
  </Provider>
)

export default App
