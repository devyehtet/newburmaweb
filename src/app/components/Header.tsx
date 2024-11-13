"use client";
import Image from "next/image";
import { images } from "../../../constants";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Links for the navigation
const links = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  {
    name: "Program",
    href: "/program",
    isDropdown: true,
    items: [
      { name: "Creative voices", href: "/creative-voices" },
      { name: "Creative Resistance", href: "/creative-resistance" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Donate", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Initialize usePathname

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white fixed z-50 w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/home" className="">
            <span className="sr-only">A New Burma</span>
            <Image
              src={images.img_logo}
              alt="A New Burma"
              className="sm:w-3/5 md:w-3/5 lg:w-4/5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {links.map((link) =>
            link.isDropdown ? (
              <Popover key={link.name} className="relative">
                <PopoverButton
                  className={`font-neutraface text-sm font-bold flex items-center gap-x-2 leading-5 hover:text-gray-900 px-5 py-1 hover:shadow-[8px_8px_black] border-2 hover:border-black transition-all ease-in-out ${
                    isActive(link.href)
                      ? "text-gray-900 shadow-[8px_8px_black] border-black"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {link.name}
                  <ChevronDownIcon className="h-4 w-4 text-gray-600 hover:text-gray-900" />
                </PopoverButton>
                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-64 bg-white shadow-sm ring-1 ring-gray-900/5">
                  <div className="p-4 flex flex-col gap-3">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`font-neutraface text-sm block font-bold border-2 hover:text-gray-900 px-5 py-1 hover:shadow-[8px_8px_black] hover:border-black transition-all ease-in-out ${
                          isActive(item.href)
                            ? "text-gray-900 shadow-[8px_8px_black] border-black"
                            : "border-transparent text-gray-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              <Link
                key={link.name}
                href={link.href || "#"}
                className={`font-neutraface text-sm leading-5 font-bold border-2 hover:text-gray-900 px-5 py-1 hover:shadow-[8px_8px_black] hover:border-black transition-all ease-in-out ${
                  isActive(link.href || "")
                    ? "text-gray-900 shadow-[8px_8px_black] border-black "
                    : "border-transparent text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link) =>
                  link.isDropdown ? (
                    <Disclosure key={link.name} as="div" className="">
                      <DisclosureButton className="font-neutraface text-sm font-bold flex w-full items-center justify-between leading-5 border-transparent text-gray-600 border-2 hover:text-gray-900 px-5 py-1 hover:shadow-[8px_8px_black] hover:border-black transition-all ease-in-out">
                        {link.name}
                        <ChevronDownIcon className="h-5 w-5" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`font-neutraface text-sm font-bold block border-2 hover:text-gray-900 px-10 py-1 hover:shadow-[8px_8px_black] hover:border-black transition-all ease-in-out ${
                              isActive(item.href)
                                ? "text-gray-900 shadow-[8px_8px_black] border-black"
                                : "border-transparent text-gray-600"
                            }`} // Apply active class conditionally
                          >
                            {item.name}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href || "#"}
                      className={`font-neutraface text-sm font-bold block border-2 hover:text-gray-900 px-5 py-1 hover:shadow-[8px_8px_black] hover:border-black transition-all ease-in-out ${
                        isActive(link.href || "")
                          ? "text-gray-900 shadow-[8px_8px_black] border-black"
                          : "border-transparent text-gray-600"
                      }`} // Apply active class conditionally
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
