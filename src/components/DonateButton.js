import React from 'react'
import { Link } from 'gatsby'
import {cheraYellow} from './Layout'

export const DonateButton = (props) => {
  return (
    <Link to="/donate" title="Donate">
      <button className="button is-medium" style={{backgroundColor: cheraYellow, borderColor: cheraYellow}} {...props.buttonProps}>
        Donate
      </button>
    </Link>
  )
}
