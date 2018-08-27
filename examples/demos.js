/* eslint-disable import/no-namespace */
import React from 'react'
import {Library} from './doc-components'
import * as examples from './demos/'

export default function DemoPage(props) {
  const basename = '/demos/'
  return (
    <Library basename={basename} title="Demo Library" examples={examples} {...props}>
      These are more involved demos that illustrate how to combine primer-react components into more interesting and/or
      useful ones.
    </Library>
  )
}