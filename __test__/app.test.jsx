import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {afterEach, describe, it} from 'vitest'
import App from '../src/App'

// @vitest-environment happy-dom

const TestComponent = () => {
  return (
    <>
    <App/>
    </>
  )
}

describe('App', () => {
  
  afterEach(cleanup)

  it('Deberia renderizar el componente navbar', () => {
    render(<App/>)
  })
})