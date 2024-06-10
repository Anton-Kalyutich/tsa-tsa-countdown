import React from 'react'
import PropTypes from 'prop-types'
import '../styles/MantrasForm.css'

function TsatsasForm(props) {
  const { inputNumber, handleChangeNumber, handleChangeType, handleSubmit } = props
  return (
    <div className="mantras-form-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="mantras_form">
        <div className="mantras-form-input">
          <input
            type="number"
            name="tsatsas_count"
            placeholder="Number"
            value={inputNumber || ''}
            onChange={handleChangeNumber}
            label="tsatsas input"
          />
          <select name='selectedType' onChange={handleChangeType}>
            <option value="">Select type:</option>
            <option value="bigStupa">Big Stupa</option>
            <option value="smallStupa">Small Stupa</option>
            <option value="tinyStupa">Tiny Stupa</option>
            <option value="longLife">Long Life</option>
          </select>
      
          <button type="submit" >-</button>
        </div>
      </form>
    </div>
  )
}

TsatsasForm.propTypes = {
  inputData: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired,
  handleChangeNumber: PropTypes.func.isRequired
}

export default TsatsasForm
