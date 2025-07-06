'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function DashboardHeader() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-none bg-teal-600 p-6 md:p-12 shadow dark:bg-teal-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-2 md:space-y-3 max-w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white break-words">
          Dashboard
        </h1>

        <Breadcrumb>
          <BreadcrumbList className="flex-wrap">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-teal-100 hover:underline font-semibold"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white font-semibold">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="self-end md:self-auto bg-white rounded">
        <Image
          src="/logo.png"
          alt="AetherPro Healthcare"
          width={120}
          height={120}
          className="rounded-none p-1 object-contain sm:w-[150px] md:w-[200px]"
        />
      </div>
    </motion.div>
  );
}
