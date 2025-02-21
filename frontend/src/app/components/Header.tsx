import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-[#264038] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#7DF7B5]">SportPsycholoog</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-[#7DF7B5]">
            Home
          </a>
          <a href="#" className="hover:text-[#7DF7B5]">
            Diensten
          </a>
          <a href="#" className="hover:text-[#7DF7B5]">
            Over
          </a>
          <a href="#" className="hover:text-[#7DF7B5]">
            Contact
          </a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

