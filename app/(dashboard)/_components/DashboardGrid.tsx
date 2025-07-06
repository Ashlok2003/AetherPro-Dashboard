'use client';

import { motion } from 'framer-motion';
import { data } from '@/components/sidebar/app-sidebar';

export default function DashboardGrid() {
  return (
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-4">
      {data.navMain.map((item, index) => (
        <motion.div
          key={item.title}
          className="relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          <div className="p-4 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center relative">
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
        </motion.div>
      ))}
    </div>
  );
}
