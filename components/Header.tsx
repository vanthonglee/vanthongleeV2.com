'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.jpg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import SocialIcon from './social-icons'
import { useEffect, useState } from 'react'

const Header = () => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <div className="flex items-center justify-between">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="mr-3">
              {/* <Logo /> */}
              <Image
                width={53}
                height={53}
                className="mr-2 inline h-16 w-16 rounded-full object-cover"
                src={Logo}
                alt="Profile image"
              />
            </div>
          </Link>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="h-6 self-baseline text-2xl font-semibold">
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                {siteMetadata.headerTitle}
              </Link>
              <div className="mb-3 mt-1 flex space-x-4">
                {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /> */}
                <SocialIcon kind="github" href={siteMetadata.github} size={4} />
                {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={4} /> */}
                {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={4} /> */}
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={4} />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={4} />
                {/*<SocialIcon kind="instagram" href={siteMetadata.instagram} size={4} /> */}
                {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={4} /> */}
              </div>
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
