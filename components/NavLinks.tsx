"use client";

import Link from "next/link";
// import { Link } from "next/navigation";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function NavLink({ className, ...props }: ComponentProps<typeof Link>) {
  const path = usePathname();
  const isActive = path === props.href;

  return (
    <Link
      {...props}
      className={`${className} transition-colors ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    />
  );
}
