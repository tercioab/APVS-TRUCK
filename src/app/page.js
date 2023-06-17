import { Jumbotrom } from "@/components/common/Jumbotrom"
import {Script} from "@/components/common/Script"
import { AssociadosCard } from "@/components/common/Card.associados"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      < Jumbotrom />
      <Script />
      <AssociadosCard/>
    </main>
  )
}
