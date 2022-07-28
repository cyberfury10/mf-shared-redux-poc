import React from "react"
import { getName } from "../store/name/name-selector"
import { updateName } from "../store/name/name-actions"
import { connect } from "react-redux"

const NameInput = ({ name, updateName }) => {
  return (
    <div>
      App2 component Hello, {name}.
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          updateName(e.target.value)
        }}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: getName()(state),
})

const mapDispatchToProps = {
  updateName,
}

export default connect(mapStateToProps, mapDispatchToProps)(NameInput)
