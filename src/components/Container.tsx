import * as React from 'react'
import { Palette } from './Palette'
import { Workspace } from './Workspace'

export const Container = (): JSX.Element => {
  return (
    <React.Fragment>
      <Palette />
      <Workspace />
    </React.Fragment>
  )
}
