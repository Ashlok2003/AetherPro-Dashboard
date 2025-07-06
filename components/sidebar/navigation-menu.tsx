'use client';

import {
  Briefcase,
  CalendarDays,
  ClipboardList,
  Ticket,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu as NavigationMenuWrapper,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Calendar } from '@/components/ui/calendar';

export function NavigationMenu() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date()
  );

  return (
    <NavigationMenuWrapper className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <ClipboardList size={16} />
              Request Services
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-2 p-4">
              <ListItem href="/request/new" title="New Request">
                Submit a new service request.
              </ListItem>
              <ListItem
                href="/request/history"
                title="Request History"
              >
                View and manage past requests.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              Services
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-2 p-4">
              <ListItem
                href="/services/available"
                title="Available Services"
              >
                Browse available hospital services.
              </ListItem>
              <ListItem
                href="/services/manage"
                title="Manage Services"
              >
                Add or modify services.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link href="/tickets">
              <div className="flex items-center gap-2">
                <Ticket size={16} />
                Tickets
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              Calendar
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuWrapper>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
