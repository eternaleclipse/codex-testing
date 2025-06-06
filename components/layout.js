import { Button } from "./ui/button"

export default function Layout({ children }) {
  return (
    <div className="p-4">
      <header className="mb-4">
        <Button>Shadcn Button</Button>
      </header>
      <main>{children}</main>
    </div>
  )
}
