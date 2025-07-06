'use client';

import { data } from '@/components/sidebar/app-sidebar';

export default function DashboardGrid() {
  return (
    <div className="grid gap-2 grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-4">
      {data.navMain.map(item => (
        <div
          key={item.title}
          className="relative overflow-hidden rounded-lg"
        >
          <div className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center">
              <div
                className="absolute w-12 h-12 bg-teal-50 dark:bg-teal-900/30"
                style={{
                  clipPath:
                    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
              <item.icon
                className="relative z-10 text-teal-600 dark:text-teal-400"
                size={24}
              />
            </div>

            <div className="text-center">
              <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
