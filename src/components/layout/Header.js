
"use client"
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow dark:bg-gray-900  border-b-2 border-blue-500 mb-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mb"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a href="/" className="-m-1.5 p-1.5 mr-0">
            {/* <img
              className="h-8 w-auto"
              alt="ultracar logo"
              src=""
            /> */}
          </a>
          <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Natalicio Rosa - APVS</p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
              <Popover.Group className="hidden lg:flex lg:gap-x-12">
                  

          <button href="/" type="button"
           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Solicitar cotação
          </button>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s"
                alt="ultracar logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<a
									href='/register-client'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Solicitar cotação
								</a>
						
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}