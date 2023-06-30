import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import img from './../assets/aus_logo.png'
import {Link, useNavigate} from 'react-router-dom'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let isAdmin=sessionStorage.getItem('isAdmin')
  let userName=sessionStorage.getItem('name')

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-7 lg:px-7" aria-label="Global">
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 px-7 text-gray-700 font-semibold font-serif text-xl">
            Brrrgrrr
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12">
         
          <a href="#about" className="text-bs font-semibold leading-6 text-gray-900">
           About
          </a>
          <a href="#order" className="text-bs font-semibold leading-6 text-gray-900">
            Order Burger
          </a>
          <a href={`/${isAdmin==='true'?'admin-panel':'order'}`} className="text-bs font-semibold leading-6 text-gray-900">
           {isAdmin==='true'?'Admin Panel':'Your Order'}
          </a>
          <a href="#team" className="text-bs font-semibold leading-6 text-gray-900">
            Our Team
          </a>
          <a href="#contact" className="text-bs font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
        </Popover.Group>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link to="/login" className="text-bs font-semibold leading-6 text-gray-900">
           {userName?userName:'Login'} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Recruitment process</span>
              <img
                className="h-11 w-auto rounded-md"
                src={img}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#order"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Order Burger
                </a>
                <a
                  href="/order"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Your Order
                </a>
                <a
                  href="#team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Team
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}