import * as React from 'react'
import { Palette } from './Palette'
import { Workspace } from './Workspace'

export const Container = (): JSX.Element => {
  return (
    <div data-testid="container">
      <Palette />
      <Workspace />
    </div>
  )
}
