import React from 'react'
import { Inter } from 'next/font/google'
import styles from '.page.module.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin']})

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Linkt to the Home Page</Link>
    </>
  )
}
