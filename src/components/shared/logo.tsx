"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "white" | "dark"
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

export function Logo({ variant = "default", size = "md", showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: "h-16",
    md: "h-20",
    lg: "h-24"
  }

  const widthClasses = {
    sm: "w-40",
    md: "w-56",
    lg: "w-64"
  }

  return (
    <div className="relative flex items-center space-x-3">
      <Link
        href="/"
        className="flex items-center space-x-3"
      >
        <div className={`${sizeClasses[size]} ${widthClasses[size]} relative overflow-hidden`}>
          <Image
            src="/TM-Logo-Color.png"
            alt="Thrivemore Technology Advisors"
            fill
            className="object-contain object-center"
            priority
            sizes="(max-width: 768px) 160px, 224px"
          />
        </div>
        {showTagline && (
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Thrivemore Technology Advisors</span>
            <span className="text-sm text-muted-foreground">The Future Well Grounded™</span>
          </div>
        )}
      </Link>
    </div>
  )
}