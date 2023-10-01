import Link from 'next/link'

export default function PartnerSidebar() {
  return (
    <nav
      id="sidenav-8"
      className="z-[1035] h-full w-60 overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
    >
      <a
        className="mb-3 flex items-center justify-center border-b-2 border-solid border-gray-100 py-6 outline-none"
        href="#!"
        data-te-ripple-init
        data-te-ripple-color="primary">
        <svg className="branding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="120" height="40">
          <title>Logo</title>
          <path d="M14.9,17.06a2.14,2.14,0,1,1,2.29,2,2.14,2.14,0,0,1-2.29-2h0Z"></path>
          <path d="M40,17.06a2.14,2.14,0,1,0-2.29,2,2.14,2.14,0,0,0,2.29-2h0Z"></path>
          <path d="M47.06,20.41c-0.25-.93-1.53-1.07-2.66-0.78a22.2,22.2,0,0,1-6.75.89c-2-.14-3.91-1.79-5.12-2.92,1.2-1.38,2.74-2.86,3.09-3.27a1.57,1.57,0,0,0,.17-2c-0.43-.43-1.19-0.17-2,0.34s-3.66,3.43-6.42,3.43-5.75-2.92-6.52-3.43a2,2,0,0,0-2.3,0c-0.43.43,0,1,.51,1.62,0.36,0.42,2,2,3.17,3.36-1.21,1.12-3.1,2.69-5,2.83a22.19,22.19,0,0,1-6.75-.89c-1.13-.29-2.41-0.15-2.66.78a1.72,1.72,0,0,0,1,1.65c0.66,0.43,4.07,1.09,5,2.56s1.11,12.82,2,13.2a3.36,3.36,0,0,0,2.41,0c0.87-.44,2.33-12.82,3.06-14.41a19.35,19.35,0,0,1,2.35-3.3c0.79,3.7,1.65,17.48,2.48,17.76a4.44,4.44,0,0,0,2.38,0c0.82-.35,1.72-14.5,2.52-17.93a20.35,20.35,0,0,1,2.49,3.46c0.74,1.59,2.2,14,3.06,14.41a3.37,3.37,0,0,0,2.41,0c0.89-.38,1-11.73,2-13.2s4.37-2.13,5-2.56a1.72,1.72,0,0,0,1-1.65h0Z"></path>
          <path d="M25.31,12.52a2.14,2.14,0,1,1,2.14,2.14,2.14,2.14,0,0,1-2.14-2.14h0Z"></path>
          <path d="M47.49,12.67c1,1.65-1.14,2.27-2.8,1.89-1.39-.32-15.06-7.62-17.11-7.81s-14.33,7.37-15.69,8.1a5.53,5.53,0,0,1-5.59,0C5.7,14.53,1,12.06,0,11.37c1-1,15.23-9.49,16.89-10.31,1.9-1,3-1.46,5.13-.67,1.45,0.54,25,11.6,25.47,12.28h0Z"></path>
          <path d="M5.39,23.27a28.24,28.24,0,0,1,4,1.67c2.39,1.23,2.52,2.46,2.79,4.45s0.54,6.08.58,7.58a53.62,53.62,0,0,1-5.86-4.52c-0.72-.63-1.54-1.08-1.53-2.05,0-.37-0.17-6.22,0-7.14h0Z"></path>
          <path d="M117.56,29.24A1.79,1.79,0,1,1,115.75,31a1.79,1.79,0,0,1,1.81-1.79h0Zm0,3.31A1.52,1.52,0,1,0,116.08,31a1.47,1.47,0,0,0,1.48,1.53h0Zm-0.39-.49h-0.3V30h0.8a0.59,0.59,0,0,1,.73.59,0.55,0.55,0,0,1-.55.58l0.6,0.92h-0.33l-0.57-.91h-0.39v0.91h0Zm0-1.16h0.49c0.33,0,.43-0.12.43-0.35a0.32,0.32,0,0,0-.37-0.32h-0.56V30.9h0Z"></path>
          <path d="M57,11.65c-0.09,1.05-.11,2.27-0.11,3.58V17.7c0.47,0,.94,0,1.63,0s1.16,0,1.63,0V15.23c0-1.31,0-2.53-.11-3.58h4.06a75.66,75.66,0,0,0-.21,7.66A75.67,75.67,0,0,0,64.09,27H60c0.09-1.05.11-2.28,0.11-3.58V20.25c-0.47,0-.94,0-1.63,0s-1.16,0-1.63,0v3.13c0,1.31,0,2.53.11,3.58H52.93a75.42,75.42,0,0,0,.21-7.66,75.41,75.41,0,0,0-.21-7.66H57Z"></path>
          <path d="M66,16.07a20.71,20.71,0,0,1,2.25-.17c4.44,0,5.79,1.74,5.79,4.61v2.68A10.26,10.26,0,0,0,74.56,27H71.15a2.13,2.13,0,0,1-.37-0.67,4,4,0,0,1-2.4.84,3.22,3.22,0,0,1-3.43-3.24c0-2,1.57-3.31,3.61-4l1.78-.58A1.39,1.39,0,0,0,68.81,18,5.27,5.27,0,0,0,66,19.07v-3h0Zm4.66,5.32a2.49,2.49,0,0,0-2.19,2.25A1.21,1.21,0,0,0,69.58,25a1.42,1.42,0,0,0,1-.47V21.39h0Z"></path>
          <path d="M79.34,11.65V16.5a4.24,4.24,0,0,1,2.08-.6c2,0,3.95,1.5,3.95,5.41,0,3-1.65,5.92-4.7,5.92a4.45,4.45,0,0,1-2.77-1.07l-1.2,1-1-.62a31.83,31.83,0,0,0,.19-4.38V16c0-.79,0-1.67-0.22-4.38h3.69Zm0,12.32a0.93,0.93,0,0,0,.92,1.12c0.88,0,1.5-.9,1.5-3.45,0-1.82-.47-3.39-1.55-3.39a0.81,0.81,0,0,0-.88.88V24h0Z"></path>
          <path d="M88.43,11.5a1.93,1.93,0,1,1-1.93,1.93,1.92,1.92,0,0,1,1.93-1.93h0Zm1.78,4.66c0,1.11,0,2.75,0,5.06A43.3,43.3,0,0,0,90.36,27H86.49a31.92,31.92,0,0,0,.19-4.38V20.53a31.9,31.9,0,0,0-.19-4.38h3.71Z"></path>
          <path d="M96.13,12.87c0,0.66-.07,1.93-0.07,3.28h1.61v2.06H96.07v5.41A1.12,1.12,0,0,0,97.25,25a3.63,3.63,0,0,0,.45,0v1.93a6.81,6.81,0,0,1-2.17.32,2.88,2.88,0,0,1-2.32-1,4,4,0,0,1-.62-2.53V18.21H91.34V16.15h1.24c0-1.35,0-2.62-.07-3.28h3.61Z"></path>
          <path d="M99.78,16.07A20.75,20.75,0,0,1,102,15.9c4.44,0,5.79,1.74,5.79,4.61v2.68a10.27,10.27,0,0,0,.56,3.78H105a2.06,2.06,0,0,1-.36-0.67,4,4,0,0,1-2.4.84,3.22,3.22,0,0,1-3.43-3.24c0-2,1.57-3.31,3.6-4l1.78-.58A1.39,1.39,0,0,0,102.64,18a5.28,5.28,0,0,0-2.86,1.12v-3h0Zm4.66,5.32a2.49,2.49,0,0,0-2.19,2.25A1.21,1.21,0,0,0,103.41,25a1.42,1.42,0,0,0,1-.47V21.39h0Z"></path>
          <path d="M113.64,12.87c0,0.66-.06,1.93-0.06,3.28h1.61v2.06h-1.61v5.41A1.12,1.12,0,0,0,114.76,25a3.63,3.63,0,0,0,.45,0v1.93a6.81,6.81,0,0,1-2.17.32,2.88,2.88,0,0,1-2.32-1,4,4,0,0,1-.62-2.53V18.21h-1.25V16.15h1.25c0-1.35,0-2.62-.07-3.28h3.61Z"></path>
          <path d="M56.42,30.7A0.78,0.78,0,0,0,56,30.58a0.71,0.71,0,0,0-.72.77,1.7,1.7,0,0,0,.12.58h0.87V33H55.35v2.37a17.39,17.39,0,0,0,.1,2.37H53.36a17.28,17.28,0,0,0,.1-2.37V33H52.83V31.93h0.64V31.48a1.8,1.8,0,0,1,.66-1.6,2.49,2.49,0,0,1,1.56-.5,2.38,2.38,0,0,1,.73.11V30.7h0Z"></path>
          <path d="M61.79,34.86a2.74,2.74,0,1,1-5.44,0,2.74,2.74,0,1,1,5.44,0h0Zm-3.37,0c0,1.41.3,1.91,0.65,1.91s0.65-.5.65-1.91S59.42,33,59.07,33s-0.65.5-.65,1.91h0Z"></path>
          <path d="M64.24,31.93a4.08,4.08,0,0,1,.16.78,1.91,1.91,0,0,1,1.48-.92,0.67,0.67,0,0,1,.26,0v1.55a1.57,1.57,0,0,0-.35,0c-0.88,0-1.27.81-1.27,2.09a17.31,17.31,0,0,0,.1,2.37H62.46a17.19,17.19,0,0,0,.11-2.37V34.3a9.27,9.27,0,0,0-.2-2.37h1.87Z"></path>
          <path d="M72.33,29.49c0,0.57-.06,1.23-0.06,1.94v1.34l0.88,0,0.88,0V31.43c0-.71,0-1.37-0.06-1.94h2.2a41,41,0,0,0-.12,4.15,41,41,0,0,0,.12,4.15H74c0-.57.06-1.23,0.06-1.94v-1.7c-0.25,0-.51,0-0.88,0s-0.63,0-.88,0v1.7c0,0.71,0,1.37.06,1.94h-2.2a41.17,41.17,0,0,0,.12-4.15,41.16,41.16,0,0,0-.12-4.15h2.2Z"></path>
          <path d="M80.42,37.79a2.63,2.63,0,0,1-.17-0.52,2,2,0,0,1-1.48.66,1.64,1.64,0,0,1-1.64-1.84V34.3A17,17,0,0,0,77,31.93h2v3.89a0.57,0.57,0,1,0,1.12.12V34.3a17.34,17.34,0,0,0-.1-2.37h2.09A17.18,17.18,0,0,0,82,34.3v1.12a17.19,17.19,0,0,0,.11,2.37h-1.7Z"></path>
          <path d="M84.84,31.93a2.89,2.89,0,0,1,.18.52,2.28,2.28,0,0,1,1.53-.66,1.57,1.57,0,0,1,1.3.74,2.35,2.35,0,0,1,1.64-.74c1.14,0,1.57.8,1.57,2v1.67a17.51,17.51,0,0,0,.1,2.37H89.07a17.51,17.51,0,0,0,.1-2.37V33.8c0-.41-0.12-0.71-0.48-0.71a0.63,0.63,0,0,0-.62.71v1.62a17.19,17.19,0,0,0,.11,2.37H86.1a17.19,17.19,0,0,0,.11-2.37V33.78c0-.38-0.12-0.69-0.48-0.69a0.62,0.62,0,0,0-.62.62v1.71a17.27,17.27,0,0,0,.1,2.37H83.12a17.35,17.35,0,0,0,.1-2.37V34.3a17.34,17.34,0,0,0-.1-2.37h1.72Z"></path>
          <path d="M92.29,31.88a11.54,11.54,0,0,1,1.22-.09c2.41,0,3.14.94,3.14,2.5v1.45a5.57,5.57,0,0,0,.3,2H95.11a1.09,1.09,0,0,1-.2-0.36,2.16,2.16,0,0,1-1.3.45,1.75,1.75,0,0,1-1.86-1.76,2.41,2.41,0,0,1,2-2.15l1-.31a0.75,0.75,0,0,0-.83-0.76,2.86,2.86,0,0,0-1.55.61V31.88h0Zm2.52,2.88A1.35,1.35,0,0,0,93.63,36a0.66,0.66,0,0,0,.63.72,0.76,0.76,0,0,0,.56-0.26V34.77h0Z"></path>
          <path d="M99.19,31.93a2.8,2.8,0,0,1,.17.52,2,2,0,0,1,1.48-.66,1.64,1.64,0,0,1,1.64,1.84v1.79a17.2,17.2,0,0,0,.11,2.37h-2.09a17.19,17.19,0,0,0,.11-2.37v-1.6a0.54,0.54,0,0,0-.5-0.65,0.59,0.59,0,0,0-.62.56v1.7a17.52,17.52,0,0,0,.1,2.37H97.49a17.5,17.5,0,0,0,.1-2.37V34.3a17.5,17.5,0,0,0-.1-2.37h1.7Z"></path>
          <path d="M104.31,29.41a1,1,0,1,1-1,1,1,1,0,0,1,1-1h0Zm1,2.52c0,0.6,0,1.49,0,2.74a23.42,23.42,0,0,0,.1,3.12h-2.09a17.27,17.27,0,0,0,.1-2.37V34.3a17.26,17.26,0,0,0-.1-2.37h2Z"></path>
          <path d="M108.59,30.15c0,0.36,0,1,0,1.78h0.87V33h-0.87V36a0.61,0.61,0,0,0,.64.74h0.24v1a3.7,3.7,0,0,1-1.18.17,1.56,1.56,0,0,1-1.25-.56,2.17,2.17,0,0,1-.34-1.37V33H106V31.93h0.67c0-.73,0-1.42,0-1.78h2Z"></path>
          <path d="M112,31.93a33.43,33.43,0,0,0,.83,3.31h0a27.4,27.4,0,0,0,.68-3.31h1.66a40.54,40.54,0,0,1-2,6.35A2.61,2.61,0,0,1,110.63,40a2.22,2.22,0,0,1-.56-0.06V38.45a1.41,1.41,0,0,0,.65.17,1,1,0,0,0,1-.93,5.32,5.32,0,0,0-.51-1.59A26.18,26.18,0,0,1,110,31.93h2Z"></path></svg>
      </a>
      <ul
        className="relative m-0 list-none px-[0.2rem] pb-12"
        data-te-sidenav-menu-ref>
        <li className="relative">
          <a
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            <span>Overview</span>
          </a>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Donations</span>
          <Link href={"/partner/donation/add"}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
            <span>Add Donation</span>
          </Link>
        </li>
        <li className="relative">
          <Link href={"/partner/donation/list"}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5">
                <path
                  d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                <path
                  d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                <path
                  d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                <path
                  d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
              </svg>
            </span>
            <span>View Donations</span>
          </Link>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Items</span>
          <Link href={"/partner/item/add"}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
            <span>Add Item</span>
          </Link>
        </li>
        <li className="relative">
          <Link href={"/partner/item/list"}
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5">
                <path
                  d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                <path
                  d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                <path
                  d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                <path
                  d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
              </svg>
            </span>
            <span>View Items</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}