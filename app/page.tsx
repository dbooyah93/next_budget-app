import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '.page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}
