import React from 'react'
import PropTypes from 'prop-types'
import '../styles/MantrasForm.css'

function TsatsasForm(props) {
  const { inputData, handleSubmit, handleChange } = props
  console.log(inputData)
  return (
    <div className="mantras-form-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="mantras_form">
        <div className="mantras-form-input">
          <input
            type="number"
            name="tsatsas_count"
            placeholder="Number"
            value={inputData || ''}
            onChange={handleChange}
            label="tsatsas input"
          />
          <button type="submit" >-</button>
        </div>
      </form>
    </div>
  )
}

TsatsasForm.propTypes = {
  inputData: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TsatsasForm
