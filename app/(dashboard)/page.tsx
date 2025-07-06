import { AppSidebar } from '@/components/sidebar/app-sidebar';
import { SiteHeader } from '@/components/sidebar/site-header';
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import DashboardGrid from './_components/DashboardGrid';
import DashboardHeader from './_components/DashboardHeader';

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <DashboardHeader />
        <DashboardGrid />
      </SidebarInset>
    </SidebarProvider>
  );
}
