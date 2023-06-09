'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  let pathname = usePathname() || '/'

  return (
    <nav className="fade relative flex scroll-pr-6 flex-row items-start px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0">
      <div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 text-[16px] md:mt-0 md:flex-col md:gap-2 md:text-[18px]">
        <Link href={'/'} className="flex rounded align-middle font-bold transition-all">
          <span className="relative px-[10px] py-[5px] opacity-60 transition-all hover:opacity-100">
            home
            {pathname === '/' && <div className="absolute inset-0 z-[-1] rounded-md bg-neutral-200 dark:bg-neutral-700"></div>}
          </span>
        </Link>
        <Link href={'/about'} className="flex rounded align-middle font-bold transition-all">
          <span className="relative px-[10px] py-[5px] opacity-60 transition-all hover:opacity-100">
            about
            {pathname === '/about' && <div className="absolute inset-0 z-[-1] rounded-md bg-neutral-200 dark:bg-neutral-700"></div>}
          </span>
        </Link>
        <Link href={'/contact'} className="flex rounded align-middle font-bold transition-all">
          <span className="relative px-[10px] py-[5px] opacity-60 transition-all hover:opacity-100">
            contact
            {pathname === '/contact' && <div className="absolute inset-0 z-[-1] rounded-md bg-neutral-200 dark:bg-neutral-700"></div>}
          </span>
        </Link>
        <Link href={'/projects'} className="flex rounded align-middle font-bold transition-all">
          <span className="relative px-[10px] py-[5px] opacity-60 transition-all hover:opacity-100">
            projects
            {pathname.includes('/projects') && <div className="absolute inset-0 z-[-1] rounded-md bg-neutral-200 dark:bg-neutral-700"></div>}
          </span>
        </Link>
        <Link href={'/guestbook'} className="flex rounded align-middle font-bold transition-all">
          <span className="relative px-[10px] py-[5px] opacity-60 transition-all hover:opacity-100">
            guest
            {pathname === '/guestbook' && <div className="absolute inset-0 z-[-1] rounded-md bg-neutral-200 dark:bg-neutral-700"></div>}
          </span>
        </Link>
      </div>
    </nav>
  )
}
