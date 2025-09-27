
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div>

      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="none">Click me</Button>
      <button className="text-blue-600">Custom</button>

      <Checkbox></Checkbox>

    </div>
  )
}

export default Home