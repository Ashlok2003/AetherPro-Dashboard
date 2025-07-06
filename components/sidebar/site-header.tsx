import { UserDropdown } from '@/app/(dashboard)/_components/UserDropdown';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/hooks/use-theme';
import { FaGithub } from 'react-icons/fa';
import { NavigationMenu } from './navigation-menu';

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <NavigationMenu />
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <FaGithub className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <UserDropdown
            email="chaudharyashlok@gmail.com"
            name="Ashlok Chaudhary"
            image="/logo.jpg"
          />
        </div>
      </div>
    </header>
  );
}
