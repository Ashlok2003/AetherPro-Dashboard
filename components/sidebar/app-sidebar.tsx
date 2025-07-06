'use client';

import {
  IconBook,
  IconBuilding,
  IconChecklist,
  IconClipboard,
  IconClipboardCheck,
  IconFileSearch,
  IconFileText,
  IconGradienter,
  IconHelp,
  IconNews,
  IconReport,
  IconSearch,
  IconSettings,
  IconSquareChevronUpFilled,
  IconTag,
  IconUser,
  IconUsers,
} from '@tabler/icons-react';
import * as React from 'react';

import { NavMain } from '@/components/sidebar/nav-main';
import { NavSecondary } from '@/components/sidebar/nav-secondary';
import { NavUser } from '@/components/sidebar/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export const data = {
  user: {
    name: 'Ashlok Chaudhary',
    email: 'chaudharyashlok@gmail.com',
    avatar: '/logo.jpg',
  },

  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconFileText,
    },
    {
      title: 'Patient',
      url: '#',
      icon: IconUsers,
    },
    {
      title: 'Appointment',
      url: '#',
      icon: IconFileSearch,
    },
    {
      title: 'Doctor',
      url: '#',
      icon: IconUser,
    },
    {
      title: 'Billing',
      url: '#',
      icon: IconTag,
    },
    {
      title: 'Insurance',
      url: '#',
      icon: IconGradienter,
    },
    {
      title: 'Master Data',
      url: '#',
      icon: IconClipboard,
    },
    {
      title: 'Finance',
      url: '#',
      icon: IconUsers,
    },
    {
      title: 'Facility Management',
      url: '#',
      icon: IconSquareChevronUpFilled,
    },
    {
      title: 'Human Resources',
      url: '#',
      icon: IconBook,
    },
    {
      title: 'Inspection Checklist',
      url: '#',
      icon: IconChecklist,
    },
    {
      title: 'Forms and Daily Checklist',
      url: '#',
      icon: IconClipboardCheck,
    },
    {
      title: 'Key Performance Indicator',
      url: '#',
      icon: IconReport,
    },
    {
      title: 'Audit Reports',
      url: '#',
      icon: IconFileSearch,
    },
    {
      title: 'Rooms and Infrastructure',
      url: '#',
      icon: IconBuilding,
    },
    {
      title: 'News Letters',
      url: '#',
      icon: IconNews,
    },
  ],

  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Help',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-teal-100 border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-2"
            >
              <div className="relative w-24 h-8">
                <Image
                  src="/logo.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 96px"
                  alt="AetherPro Healthcare"
                  className="object-contain"
                  priority
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <Separator />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
