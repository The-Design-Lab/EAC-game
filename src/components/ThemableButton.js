import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

const Foo = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      big: {
        fontSize: 4,
        lineHeight: 'heading',
      },
      small: {
        fontSize: 1,
        lineHeight: 'body',
      },
    },
  })
)

const ThemableButton = ({ label }) => {
  return <Foo primary>{label}</Foo>
}

export default ThemableButton
