import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import utilStyles from './utils.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <br />
        <section className={utilStyles.headingNavigation}>
          <div className={utilStyles.navigation}>
            <Link href="/"><a>Home</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/about"><a>About</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="mailto:me@saurish.com?subject=Hello from the Website!">Contact</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/projects"><a>Projects</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://blog.saurish.com/">Blog</a>
          </div>
        </section>
        <br />
        <section className={utilStyles.social}>
          <a target="_blank" href="https://www.facebook.com/saurish.srivastava.10/">
            <img className={utilStyles.titlelogo} src="/assets/images/facebook.svg"></img>
          </a>
          <a target="_blank" href="https://twitter.com/saurishhh">
            <img className={utilStyles.titlelogo} src="/assets/images/twitter.svg/"></img>
          </a>
          <a target="_blank" href="https://www.instagram.com/saurishhh/">
            <img className={utilStyles.titlelogo} src="/assets/images/insta.svg"></img>
          </a>
          <a target="_blank" href="https://github.com/minor/">
            <img className={utilStyles.titlelogo} src="/assets/images/github.svg"></img>
          </a>
        </section>
        <br />
        <section className={utilStyles.headingFooter}>
          <p><center>&copy; Copyright 2020 - Saurish Srivastava</center></p>
        </section>
      </Container>
    </footer>
  )
}
