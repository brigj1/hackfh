import AdminSidebar from "@/app/components/admin/sidebar"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <section className="flex">
      <AdminSidebar />
      <div class="p-8 text-center justify-center flex-1" id="content">
        {children}
      </div>
    </section>
  )
}
