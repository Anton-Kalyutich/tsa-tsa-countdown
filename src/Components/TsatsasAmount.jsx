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
    <>
      <div className="tsatsas_count_container">
        <div className='tsatsa_count_subcontainer'>
          <p className="mantras_count_text"><strong>Big Stupa</strong></p>
          <p className="mantras_count">
            <AnimatedNumber
              value={allTsatsas.bigStupa}
              formatValue={formatValue}
              duration={1000}
            />
          </p>
          <p className="mantras_count_text">{allTsatsas.bigStupa > 0 ? "Left to Make" : "All Made"}</p>
        </div>
        
        <div className='tsatsa_count_subcontainer'>
        <p className="mantras_count_text"><strong>Small Stupa</strong></p>
          <p className="mantras_count">
          <AnimatedNumber
            value={allTsatsas.smallStupa}
            formatValue={formatValue}
            duration={1000}
          />
          </p>
          <p className="mantras_count_text">{allTsatsas.smallStupa > 0 ? "Left to Make" : "All Made"}</p>
        </div>
        <div className='tsatsa_count_subcontainer'>
        <p className="mantras_count_text"><strong>Tiny Stupa</strong></p>
          <p className="mantras_count">
          <AnimatedNumber
            value={allTsatsas.tinyStupa}
            formatValue={formatValue}
            duration={1000}
          />
          </p>
          <p className="mantras_count_text">{allTsatsas.tinyStupa > 0 ? "Left to Make" : "All Made"}</p>
        </div>
        <div className='tsatsa_count_subcontainer'>
        <p className="mantras_count_text"><strong>Long Life</strong></p>
          <p className="mantras_count">
          <AnimatedNumber
            value={allTsatsas.longLife}
            formatValue={formatValue}
            duration={1000}
          />
          </p>
          <p className="mantras_count_text">{allTsatsas.longLife > 0 ? "Left to Make" : "All Made"}</p>
        </div>
      </div>
    </>
  )
}

TsatsasAmount.propTypes = {
  allTsatsas: PropTypes.object.isRequired
}

export default TsatsasAmount
