import Navbar from '@/components/Navbar'
import { SignIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between items-center">
      Puroflow App
      <SignIn afterSignInUrl={"/dashboard"} />
    </main>
  )
}
