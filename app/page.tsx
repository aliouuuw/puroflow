import { Card, Metric, Text } from '@tremor/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      Puroflow App
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </main>
  )
}
