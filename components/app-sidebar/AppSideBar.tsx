import { Calendar, Home, Inbox, Search, Settings, LayoutDashboard, BadgeDollarSign, HandCoins} from "lucide-react"

import {
  Sidebar,
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: BadgeDollarSign,
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: HandCoins,
  },
 
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className=" py-6 h-screen">
        <SidebarContent className="flex flex-col h-screen">
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold text-black h-20">SpendWISE</SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenu className="space-y-2 py-16"> 
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                       <SidebarMenuButton asChild className="flex items-center gap-4 text-lg px-4 py-4 rounded-lg">
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon size={24} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
