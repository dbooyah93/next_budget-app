import React from 'react'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
      <nav>About NavBar</nav>
      <main>
        {children}
      </main>
    </>
  )
}
