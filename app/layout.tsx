import './globals.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import  {AppSidebar } from "@/components/app-sidebar/AppSideBar"



export const metadata = {
  title: 'Spendbirr',
  description: 'A simple expense tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <SidebarProvider >
       <AppSidebar/>
        <SidebarTrigger />
        {children}
      
    </SidebarProvider>
         </body>

     
    </html>
  )
}



// import { cookies } from "next/headers"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// export async function Layout({ children }: { children: React.ReactNode }) {
//   const cookieStore = await cookies()
//   const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

//   return (
//     <SidebarProvider defaultOpen={defaultOpen}>
//       <AppSideBar />
//       <main>
//         <SidebarTrigger />
//         {children}
//       </main>
//     </SidebarProvider>
//   )
// }
// // Compare this snippet from components/app-sidebar/AppSideBar.tsx: