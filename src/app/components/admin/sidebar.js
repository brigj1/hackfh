import Link from 'next/link'

export default function AdminSidebar() {
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
          >Partners</span>
          <Link href={"/admin/partner-add"}
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
            <span>Add Partner</span>
          </Link>
        </li>
        <li className="relative">
          <Link href={"/admin/partner/list"}
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
            <span>View Partners</span>
          </Link>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Donations</span>
          <Link href={"/admin/donation/list"}
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5">
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd" />
                <path
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </span>
            <span>Incoming Donations</span>
          </Link>
        </li>
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
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd" />
                <path
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </span>
            <span>License</span>
          </a>
        </li>
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
                  d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                <path
                  d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                <path
                  d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                <path
                  d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
              </svg>
            </span>
            <span>Databases</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Custom domains</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path
                  d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zM80 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
              </svg>
            </span>
            <span>Repositories</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clip-rule="evenodd" />
                <path
                  d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            </span>
            <span>Team</span>
          </a>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Maintain</span>
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
                  fill-rule="evenodd"
                  d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                  clip-rule="evenodd" />
                <path
                  fill-rule="evenodd"
                  d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Analytics</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Backups</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Security</span>
          </a>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Admin</span>
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
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clip-rule="evenodd" />
                <path
                  d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </span>
            <span>Billing</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd" />
                <path
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </span>
            <span>License</span>
          </a>
        </li>
        <li className="relative pt-4">
          <span
            className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Tools</span>
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
                  fill-rule="evenodd"
                  d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Drag & drop builder</span>
          </a>
        </li>
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
                  fill-rule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <span>Online code editor</span>
          </a>
        </li>
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
                  d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
                <path
                  d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
              </svg>
            </span>
            <span>SFTP</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M487.1 425c-1.4-11.2-19-23.1-28.2-31.9-5.1-5-29-23.1-30.4-29.9-1.4-6.6 9.7-21.5 13.3-28.9 5.1-10.7 8.8-23.7 11.3-32.6 18.8-66.1 20.7-156.9-6.2-211.2-10.2-20.6-38.6-49-56.4-62.5-42-31.7-119.6-35.3-170.1-16.6-14.1 5.2-27.8 9.8-40.1 17.1-33.1 19.4-68.3 32.5-78.1 71.6-24.2 10.8-31.5 41.8-30.3 77.8.2 7 4.1 15.8 2.7 22.4-.7 3.3-5.2 7.6-6.1 9.8-11.6 27.7-2.3 64 11.1 83.7 8.1 11.9 21.5 22.4 39.2 25.2.7 10.6 3.3 19.7 8.2 30.4 3.1 6.8 14.7 19 10.4 27.7-2.2 4.4-21 13.8-27.3 17.6C89 407.2 73.7 415 54.2 429c-12.6 9-32.3 10.2-29.2 31.1 2.1 14.1 10.1 31.6 14.7 45.8.7 2 1.4 4.1 2.1 6h422c4.9-15.3 9.7-30.9 14.6-47.2 3.4-11.4 10.2-27.8 8.7-39.7zM205.9 33.7c1.8-.5 3.4.7 4.9 2.4-.2 5.2-5.4 5.1-8.9 6.8-5.4 6.7-13.4 9.8-20 17.2-6.8 7.5-14.4 27.7-23.4 30-4.5 1.1-9.7-.8-13.6-.5-10.4.7-17.7 6-28.3 7.5 13.6-29.9 56.1-54 89.3-63.4zm-104.8 93.6c13.5-14.9 32.1-24.1 54.8-25.9 11.7 29.7-8.4 65-.9 97.6 2.3 9.9 10.2 25.4-2.4 25.7.3-28.3-34.8-46.3-61.3-29.6-1.8-21.5-4.9-51.7 9.8-67.8zm36.7 200.2c-1-4.1-2.7-12.9-2.3-15.1 1.6-8.7 17.1-12.5 11-24.7-11.3-.1-13.8 10.2-24.1 11.3-26.7 2.6-45.6-35.4-44.4-58.4 1-19.5 17.6-38.2 40.1-35.8 16 1.8 21.4 19.2 24.5 34.7 9.2.5 22.5-.4 26.9-7.6-.6-17.5-8.8-31.6-8.2-47.7 1-30.3 17.5-57.6 4.8-87.4 13.6-30.9 53.5-55.3 83.1-70 36.6-18.3 94.9-3.7 129.3 15.8 19.7 11.1 34.4 32.7 48.3 50.7-19.5-5.8-36.1 4.2-33.1 20.3 16.3-14.9 44.2-.2 52.5 16.4 7.9 15.8 7.8 39.3 9 62.8 2.9 57-10.4 115.9-39.1 157.1-7.7 11-14.1 23-24.9 30.6-26 18.2-65.4 34.7-99.2 23.4-44.7-15-65-44.8-89.5-78.8.7 18.7 13.8 34.1 26.8 48.4 11.3 12.5 25 26.6 39.7 32.4-12.3-2.9-31.1-3.8-36.2 7.2-28.6-1.9-55.1-4.8-68.7-24.2-10.6-15.4-21.4-41.4-26.3-61.4zm222 124.1c4.1-3 11.1-2.9 17.4-3.6-5.4-2.7-13-3.7-19.3-2.2-.1-4.2-2-6.8-3.2-10.2 10.6-3.8 35.5-28.5 49.6-20.3 6.7 3.9 9.5 26.2 10.1 37 .4 9-.8 18-4.5 22.8-18.8-.6-35.8-2.8-50.7-7 .9-6.1-1-12.1.6-16.5zm-17.2-20c-16.8.8-26-1.2-38.3-10.8.2-.8 1.4-.5 1.5-1.4 18 8 40.8-3.3 59-4.9-7.9 5.1-14.6 11.6-22.2 17.1zm-12.1 33.2c-1.6-9.4-3.5-12-2.8-20.2 25-16.6 29.7 28.6 2.8 20.2zM226 438.6c-11.6-.7-48.1-14-38.5-23.7 9.4 6.5 27.5 4.9 41.3 7.3.8 4.4-2.8 10.2-2.8 16.4zM57.7 497.1c-4.3-12.7-9.2-25.1-14.8-36.9 30.8-23.8 65.3-48.9 102.2-63.5 2.8-1.1 23.2 25.4 26.2 27.6 16.5 11.7 37 21 56.2 30.2 1.2 8.8 3.9 20.2 8.7 35.5.7 2.3 1.4 4.7 2.2 7.2H57.7zm240.6 5.7h-.8c.3-.2.5-.4.8-.5v.5zm7.5-5.7c2.1-1.4 4.3-2.8 6.4-4.3 1.1 1.4 2.2 2.8 3.2 4.3h-9.6zm15.1-24.7c-10.8 7.3-20.6 18.3-33.3 25.2-6 3.3-27 11.7-33.4 10.2-3.6-.8-3.9-5.3-5.4-9.5-3.1-9-10.1-23.4-10.8-37-.8-17.2-2.5-46 16-42.4 14.9 2.9 32.3 9.7 43.9 16.1 7.1 3.9 11.1 8.6 21.9 9.5-.1 1.4-.1 2.8-.2 4.3-5.9 3.9-15.3 3.8-21.8 7.1 9.5.4 17 2.7 23.5 5.9-.1 3.4-.3 7-.4 10.6zm53.4 24.7h-14c-.1-3.2-2.8-5.8-6.1-5.8s-5.9 2.6-6.1 5.8h-17.4c-2.8-4.4-5.7-8.6-8.9-12.5 2.1-2.2 4-4.7 6-6.9 9 3.7 14.8-4.9 21.7-4.2 7.9.8 14.2 11.7 25.4 11l-.6 12.6zm8.7 0c.2-4 .4-7.8.6-11.5 15.6-7.3 29 1.3 35.7 11.5H383zm83.4-37c-2.3 11.2-5.8 24-9.9 37.1-.2-.1-.4-.1-.6-.1H428c.6-1.1 1.2-2.2 1.9-3.3-2.6-6.1-9-8.7-10.9-15.5 12.1-22.7 6.5-93.4-24.2-78.5 4.3-6.3 15.6-11.5 20.8-19.3 13 10.4 20.8 20.3 33.2 31.4 6.8 6 20 13.3 21.4 23.1.8 5.5-2.6 18.9-3.8 25.1zM222.2 130.5c5.4-14.9 27.2-34.7 45-32 7.7 1.2 18 8.2 12.2 17.7-30.2-7-45.2 12.6-54.4 33.1-8.1-2-4.9-13.1-2.8-18.8zm184.1 63.1c8.2-3.6 22.4-.7 29.6-5.3-4.2-11.5-10.3-21.4-9.3-37.7.5 0 1 0 1.4.1 6.8 14.2 12.7 29.2 21.4 41.7-5.7 13.5-43.6 25.4-43.1 1.2zm20.4-43zm-117.2 45.7c-6.8-10.9-19-32.5-14.5-45.3 6.5 11.9 8.6 24.4 17.8 33.3 4.1 4 12.2 9 8.2 20.2-.9 2.7-7.8 8.6-11.7 9.7-14.4 4.3-47.9.9-36.6-17.1 11.9.7 27.9 7.8 36.8-.8zm27.3 70c3.8 6.6 1.4 18.7 12.1 20.6 20.2 3.4 43.6-12.3 58.1-17.8 9-15.2-.8-20.7-8.9-30.5-16.6-20-38.8-44.8-38-74.7 6.7-4.9 7.3 7.4 8.2 9.7 8.7 20.3 30.4 46.2 46.3 63.5 3.9 4.3 10.3 8.4 11 11.2 2.1 8.2-5.4 18-4.5 23.5-21.7 13.9-45.8 29.1-81.4 25.6-7.4-6.7-10.3-21.4-2.9-31.1zm-201.3-9.2c-6.8-3.9-8.4-21-16.4-21.4-11.4-.7-9.3 22.2-9.3 35.5-7.8-7.1-9.2-29.1-3.5-40.3-6.6-3.2-9.5 3.6-13.1 5.9 4.7-34.1 49.8-15.8 42.3 20.3zm299.6 28.8c-10.1 19.2-24.4 40.4-54 41-.6-6.2-1.1-15.6 0-19.4 22.7-2.2 36.6-13.7 54-21.6zm-141.9 12.4c18.9 9.9 53.6 11 79.3 10.2 1.4 5.6 1.3 12.6 1.4 19.4-33 1.8-72-6.4-80.7-29.6zm92.2 46.7c-1.7 4.3-5.3 9.3-9.8 11.1-12.1 4.9-45.6 8.7-62.4-.3-10.7-5.7-17.5-18.5-23.4-26-2.8-3.6-16.9-12.9-.2-12.9 13.1 32.7 58 29 95.8 28.1z" />
              </svg>
            </span>
            <span>Jenkins</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-400 dark:[&>svg]:fill-gray-300">
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
              </svg>
            </span>
            <span>GitLab</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}