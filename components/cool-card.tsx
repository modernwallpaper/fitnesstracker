"use client"
import { cn } from "@/lib/utils"
import "./poly-card.css"
import { GeistMono } from "geist/font/mono"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

export const PolyCard = ({ header, children }: { children: React.ReactNode, header: string }) => {
  const router = useRouter()

  return(
    <div className="relative flex-col p-7 w-60 min-w-48 grid cursor-pointer poly-card 
      backdrop-blur bg-neutral-900 hover:bg-neutral-800 hover:text-white transition-colors"
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
      <p className="absolute w-full h-full flex justify-end items-start p-7 text-muted-foreground hover:text-white transition-colors">
        <ArrowRight className="w-5 h-5"/>
      </p>
    </div>
  )
}
