import { X } from "lucide-react";
import Link from "next/link";
import { sections } from "../sections";
import Logo from "./Logo";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-16 flex-grow">
          {Object.values(sections).map((section) => (
            <Link
              key={section.title}
              href={section.link}
              className="text-2xl text-white hover:text-orange-600 font-francker-light"
              onClick={onClose}
            >
              {section.title}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center items-center p-8">
          <Logo src="/static/images/logo_strefaBHP_white.png" />
        </div>
      </div>
    </div>
  );
}
