import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h5 className="text-2xl lg:text-2xl tracking-tighter leading-tight text-center lg:text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © Copyright 2020 - Saurish Srivastava
          </h5>
        </div>
      </Container>
    </footer>
  )
}
