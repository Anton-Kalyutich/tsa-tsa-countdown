import React from 'react'
import AnimatedNumber from 'animated-number-react'
import PropTypes from 'prop-types'
import '../styles/MantrasAmount.css'

function TsatsasAmount(props) {
  const { allTsatsas } = props;

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const formatValue = value => numberWithCommas(Number(value).toFixed())

  const keyToTitle = (key) => {
    key = key.split('');
    let index = key.findIndex(element => element === element.toUpperCase());
    key[0] = key[0].toUpperCase();
    key.splice(index, 0, " ");
    return `${key.join('')}`;
  }

  let tsatsas = Object.keys(allTsatsas);
  let listTsatsas = tsatsas.map(tsatsa =>
    <div key={tsatsa} className='tsatsa_count_subcontainer'>
      <p className="mantras_count_text"><strong>{keyToTitle(tsatsa)}</strong></p>
      <p className="mantras_count">
        <AnimatedNumber
          value={allTsatsas[tsatsa]}
          formatValue={formatValue}
          duration={1000}
        />
      </p>
      <p className="mantras_count_text">{allTsatsas[tsatsa] > 0 ? "Left to Make" : "All Made"}</p>
    </div>
  );

  return (
    <div className="tsatsas_count_container">{listTsatsas}</div>
  );

}

TsatsasAmount.propTypes = {
  allTsatsas: PropTypes.object.isRequired
}

export default TsatsasAmount
