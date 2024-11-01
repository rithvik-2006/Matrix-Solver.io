"use client"

import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <div className="h-16 flex sticky top-0 z-50 items-center justify-center pt-[10px] backdrop-blur-md bg-white bg-opacity-70 dark:bg-black dark:text-white container mx-auto px-4 text-center">
          <nav className="space-x-16">
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
            <Link href="/resources" className="text-blue-600 hover:underline">
              Resources
            </Link>
          </nav>
        </div>
    )
}
