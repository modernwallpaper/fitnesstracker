import { cn } from "@/lib/utils"
import { GeistSans } from "geist/font/sans"
import { PolyCard } from "../cool-card"
import { GeistMono } from "geist/font/mono"

export const Dashboard = () => {
  return(
    <main className="w-full h-full flex-col space-y-2">
      <h1 className={cn(GeistSans.className, "text-5xl font-bold tracking-tight")}>DASHBOARD</h1>
        <p className={cn("text-muted-foreground tracking-wide text-[14px]", GeistMono.className)}>// Edit your infos to start seeing changes</p>
      <div className="flex space-x-5">
        <PolyCard header="Pushups">
          0/200
        </PolyCard>
        <PolyCard header="Bicep Curls">
          0/60
        </PolyCard>
        <PolyCard header="Tricep Curls">
          0/60
        </PolyCard>
      </div>
    </main>
  )
}
