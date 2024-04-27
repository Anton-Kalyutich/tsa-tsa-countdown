import React from 'react'
import PropTypes from 'prop-types'
import '../styles/MantrasForm.css'

function MantrasForm(props) {
  const { inputData, handleSubmit, handleChange } = props
  return (
    <div className="mantras-form-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="mantras_form">
        <div className="mantras-form-input">
          <input
            type="number"
            name="mantras_count"
            placeholder="Number"
            value={inputData.mantras_count}
            onChange={handleChange}
            label="mantra input"
          />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  )
}

MantrasForm.propTypes = {
  inputData: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MantrasForm
