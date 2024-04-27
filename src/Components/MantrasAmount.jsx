import React from 'react'
import AnimatedNumber from 'animated-number-react'
import PropTypes from 'prop-types'
import '../styles/MantrasAmount.css'

function MantrasAmount(props) {
  const { allMantras } = props

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const formatValue = value => numberWithCommas(Number(value).toFixed())

  return (
    <div className="mantras_count_container">
      <p className="mantras_count">
        <AnimatedNumber
          value={allMantras.mantras_count}
          formatValue={formatValue}
          duration={1000}
        />
      </p>
      <p className="mantras_count_text">Mantras Collected</p>
    </div>
  )
}

MantrasAmount.propTypes = {
  allMantras: PropTypes.object.isRequired
}
export default MantrasAmount
