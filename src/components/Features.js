import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { cheraGreen } from '../components/Layout'

const checkIsWide = (count, index) => {
  const isOdd = count % 2 ? 1 : 0
  const isFirst = index === 0

  return isOdd && isFirst
}

export const OptionalLink = ({children, enable=false, to}) => {
  const result = enable ? <a href={to}>{children}</a> : children

  return <>{result}</>
}

export const Feature = ({item, isWide=false, to=null}) => {
  const colWidth = isWide ? 'is-12' : 'is-6'
  const maxWidth = isWide ? 'inherit': '450px'

  return (
    <div className={`column ${colWidth}`}>
      <OptionalLink enable={!!to} to={to}>
      <section
        className="section"
        style={{
          background: cheraGreen,
          color: '#fff',
          borderRadius: '5px',
          padding: '1.5rem',
          maxWidth: maxWidth,
          margin: '0 auto',
        }}
      >
        <h1 className="has-text-centered white-header-override">
          {item.heading}
        </h1>
        <div
          className="has-text-centered"
          style={{
            overflow: 'hidden',
            display: 'flex',
            marginBottom: '5px',
          }}
        >
          <div
            style={{
              width: isWide ? '100%' : '400px',
              height: isWide ? '400px' : '250px',
              display: 'inline-block',
              overflow: 'hidden',
              justifySelf: 'center',
            }}
          >
            <PreviewCompatibleImage
              imageInfo={item}
              imageStyle={{ height: '100%' }}
            />
          </div>
        </div>
        <p className="has-text-weight-semibold">{item.text}</p>
      </section>
      </OptionalLink>
    </div>
  )
    
}

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => {
      const isWide = checkIsWide(gridItems.length, index)

      return <Feature key={index} item={item} isWide={isWide} />
    })}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
