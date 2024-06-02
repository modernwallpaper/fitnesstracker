"use client"
import { cn } from "@/lib/utils"
import "./poly-card.css"
import { GeistMono } from "geist/font/mono"
import { useRouter } from "next/navigation"

export const PolyCard = ({ header, children }: { children: React.ReactNode, header: string }) => {
  const router = useRouter()

  return(
    <div className="p-7 w-60 min-w-48 grid cursor-pointer poly-card backdrop-blur bg-neutral-900 hover:bg-neutral-800 transition-colors"
      onClick={() => {
        router.push("/"+header)
      }}
    >
      <p className={cn(
        GeistMono.className,
        "text-sm text-muted-foreground tracking-widest",
      )}>{header}</p>
      <div>
        <div className={cn(
          GeistMono.className,
          "text-3xl font-black tracking-wide uppercase",
        )}>
          {children}
        </div>
      </div>
    </div>
  )
}
