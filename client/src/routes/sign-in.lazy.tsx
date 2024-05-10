import { SignIn } from '@/pages/sing-in'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sign-in')({
  component: () => <SignIn />
})
