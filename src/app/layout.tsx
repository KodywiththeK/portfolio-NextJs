import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavigationBar from '@/components/NavigationBar'
import { AuthContext } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kody withthe K',
  description: 'Frontend developer, Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#fafafa] text-neutral-700 dark:bg-[#0a0a0a] dark:text-neutral-300 ">
      <body className={`${inter.className} mx-3 mb-40 mt-16 flex max-w-4xl flex-col antialiased sm:mx-8 md:mt-20 md:flex-row lg:mx-auto lg:mt-32`}>
        <aside className="-mx-4 border-b-[0.5px] border-b-neutral-500 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:border-b-0 md:px-0">
          <div className="md:sticky md:top-20">
            <div className="mb-2 ml-2 flex flex-col items-start px-4 md:mb-8 md:ml-[12px] md:flex-row md:px-0 ">
              <Link href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="aspect-square w-[45px] dark:fill-white md:w-[60px]" viewBox="0 0 1280.000000 1201.000000" preserveAspectRatio="xMidYMid meet">
                  <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                  <g transform="translate(0.000000,1201.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M302 11547 c-22 -23 -22 -26 -22 -430 0 -224 3 -407 8 -407 4 0 68 -7 142 -15 411 -46 705 -124 865 -230 135 -90 210 -249 262 -555 17 -99 18 -315 21 -3795 2 -2662 0 -3730 -8 -3835 -31 -400 -120 -616 -300 -725 -160 -97 -447 -171 -822 -212 l-168 -18 0 -404 0 -405 27 -28 27 -28 2641 0 2641 0 27 28 27 28 0 405 0 405 -132 13 c-166 16 -384 52 -517 86 -409 103 -540 235 -611 614 -38 204 -40 302 -40 1736 l1 1400 401 362 c221 200 402 362 403 360 30 -35 2742 -3753 2772 -3799 185 -286 204 -531 49 -633 -100 -67 -370 -108 -853 -131 l-143 -7 0 -405 0 -406 27 -28 27 -28 2722 0 2722 0 26 31 27 31 -3 396 -3 397 -110 37 c-234 80 -502 234 -740 424 -130 104 -407 378 -524 519 -117 140 -162 200 -2156 2904 l-1787 2423 28 28 c88 84 2275 2100 2359 2174 418 368 937 660 1410 790 200 55 346 77 548 83 171 6 180 7 208 30 l29 25 0 383 c0 372 -1 383 -21 409 l-20 26 -2472 0 -2471 0 -28 -27 -28 -27 0 -376 0 -376 33 -32 33 -32 169 0 c354 0 669 -57 850 -153 83 -45 169 -127 202 -195 25 -51 28 -67 27 -152 -1 -75 -7 -113 -29 -180 -55 -169 -170 -359 -335 -554 -63 -73 -601 -590 -1649 -1584 -856 -811 -1589 -1507 -1629 -1546 l-73 -71 4 1770 c3 1612 5 1779 20 1875 49 301 127 465 262 555 160 106 454 184 865 230 74 8 138 15 143 15 4 0 7 184 7 408 l0 409 -23 21 -23 22 -2650 0 -2651 0 -21 -23z" />
                  </g>
                </svg>
              </Link>
            </div>
            <NavigationBar />
          </div>
        </aside>
        <AuthContext>
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">{children}</main>
        </AuthContext>
      </body>
    </html>
  )
}
