// Packages
import Link from 'next/link'

// Components
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

// Icons
import { Home, Newspaper, Tag } from 'lucide-react'

const SIDEBAR_ITEMS = [
    {
        title: 'Posts',
        url: '/admin/posts',
        icon: Newspaper,
    },
    {
        title: 'Categories',
        url: '/admin/categories',
        icon: Tag,
    },
]

const footerItem = {
    title: 'Back to Blog',
    url: '/',
    icon: Home,
}

export const AdminSidebar = () => {
    // TODO: usePathname and clsx on nav items
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Admin panel</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SIDEBAR_ITEMS.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="py-6">
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild className="py-6">
                        <Link href={footerItem.url}>
                            <footerItem.icon />
                            <span>{footerItem.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>
        </Sidebar>
    )
}
