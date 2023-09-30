import Link from 'next/link'

export default function Nav({ links }) {
  return (
    <header>
      {/* Navigation bar */}
      <nav
        class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          {/* Navigation links */}
          <div
            class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item>
            <ul
              class="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref>
                {links.map((link) => (
                  <li class="mb-4 lg:mb-0 lg:pr-2" key={link.id}>
                    <Link href={link.slug} class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90">{link.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

