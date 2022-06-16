import * as React from 'react'
import { Palette, Workspace } from './'

export const Container = (): JSX.Element => {
  return (
    <React.Fragment>
      <Palette />
      <Workspace />
    </React.Fragment>
  )
}
