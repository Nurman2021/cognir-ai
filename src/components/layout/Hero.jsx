'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
import GalaxyBody from '../canvas/Galaxy'

const Hero = () => {
  const ref = useRef()

  return (
    <div
      ref={ref}
      style={{
        width: ' 100%',
        height: '100%',
        touchAction: 'auto',
      }}
      className='bg-black'
    >
      <div className='relative w-full h-[100vh] flex justify-center'>
        <GalaxyBody />
        <div className='flex w-full h-[100vh] flex-col flex-wrap items-center md:flex-row absolute top-0  lg:w-4/5'>
          {/* jumbo */}
          <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left text-white'>
            <p className='border border-white py-2 px-3 font-light rounded-full'>POWERED BY COGNIR AI</p>
            <h1 className='my-4 text-5xl font-bold leading-tight'>AI Text Analysis</h1>
            <p className='mb-8 text-2xl leading-normal'>Onclusive Social, formerly Digimind, introduces the Ultimate Social Listening Solution</p>
          </div>


        </div>
      </div>

      {/* <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      /> */}
    </div>
  )
}

export { Hero }
