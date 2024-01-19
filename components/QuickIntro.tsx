'use client'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

export const QuickIntro = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Little George · 小梨'],
      typeSpeed: 50,
      loopCount: 2,
      loop: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  return (
    <>
      <p>
        Hi, I'm Thong 👋, <span ref={el}></span>
      </p>
      <p>Software Engineer | Frontend Engineer | Full-stack Engineer</p>
      <p>This is a space where I document and share my knowledge and experience.</p>
      <p></p>
    </>
  )
}
