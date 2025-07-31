import { NavLink, useLocation } from "react-router-dom"
import {
  BookOpen,
  Code,
  Lightbulb,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Home
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Technology", url: "/technology", icon: Code },
  { title: "Philosophy", url: "/philosophy", icon: Lightbulb },
  { title: "Psychology", url: "/psychology", icon: Users },
  { title: "Business", url: "/business", icon: TrendingUp },
  { title: "Health & Wellness", url: "/health", icon: Heart },
  { title: "Productivity", url: "/productivity", icon: Zap },
  { title: "Learning", url: "/learning", icon: BookOpen },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary-foreground font-medium border-l-2 border-sidebar-primary" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground"

  return (
    <Sidebar
      className={isCollapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        <div className="p-4 border-b border-sidebar-border">
          <h1 className={`font-bold text-sidebar-foreground transition-all duration-200 ${
            isCollapsed ? "text-sm text-center" : "text-lg"
          }`}>
            {isCollapsed ? "CC" : "Curiosity Corner"}
          </h1>
          {!isCollapsed && (
            <p className="text-sm text-sidebar-foreground/70 mt-1">
              Personal Knowledge Base
            </p>
          )}
        </div>

        <SidebarGroup className="px-0">
          <SidebarGroupLabel className={`px-4 text-sidebar-foreground/60 ${isCollapsed ? "text-center" : ""}`}>
            {isCollapsed ? "•••" : "Topics"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={({ isActive }) => `
                        flex items-center px-4 py-3 transition-all duration-200
                        ${getNavCls({ isActive })}
                      `}
                    >
                      <item.icon className={`h-5 w-5 flex-shrink-0 ${isCollapsed ? "mx-auto" : "mr-3"}`} />
                      {!isCollapsed && <span className="text-sm font-medium">{item.title}</span>}
                    </NavLink>
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