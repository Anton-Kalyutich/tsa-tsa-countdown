import React from 'react'
import AnimatedNumber from 'animated-number-react'
import PropTypes from 'prop-types'
import '../styles/MantrasAmount.css'

function TsatsasAmount(props) {
  const { allTsatsas } = props

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const formatValue = value => numberWithCommas(Number(value).toFixed())

  return (
    <div className="mantras_count_container">
      <p className="mantras_count">
        <AnimatedNumber
          value={allTsatsas}
          formatValue={formatValue}
          duration={1000}
        />
      </p>
      <p className="mantras_count_text">Tsatsas Left to Make</p>
    </div>
  )
}

TsatsasAmount.propTypes = {
  allTsatsas: PropTypes.number.isRequired
}

export default TsatsasAmount
