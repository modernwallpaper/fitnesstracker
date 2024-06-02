import { cn } from "@/lib/utils"
import { GeistSans } from "geist/font/sans"
import { PolyCard } from "../cool-card"
import { GeistMono } from "geist/font/mono"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export const Dashboard = () => {
  return(
    <main className="w-full h-full flex-col space-y-2">
      <h1 className={cn(GeistSans.className, "text-5xl font-bold tracking-tight")}>DASHBOARD</h1>
        <p className={cn("text-muted-foreground tracking-wide text-[14px]", GeistMono.className)}>{'//'} Edit your goals to start seeing changes</p>
      <div className="md:flex flex w-full items-center justify-center">
        <ScrollArea className="rounded-md border p-2 w-[370px] md:w-fit md:h-[130px]">
          <div className="flex space-x-5">
            <PolyCard header="Pushups">
              0/100
            </PolyCard>
            <PolyCard header="Bicep Curls">
              0/60
            </PolyCard>
            <PolyCard header="Tricep Curls">
              0/60
            </PolyCard>
          </div>
          <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </div>
      <Button variant={"outline"} className="flex items-center space-x-2">
        <Plus className="h-4 w-4"/>
        <p>Add Goal</p>
      </Button>
    </main>
  )
}
