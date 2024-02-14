import { BellIcon } from "@heroicons/react/24/outline"
import { AvatarImage, AvatarFallback, Avatar } from "./avatar"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

export default function TopNav() {
    return (
      <div className="flex-auto flex flex-col justify-end">
        <header className="flex items-center justify-end p-4 bg-white border-b">
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="Josh Doe" src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">Josh Doe</span>
              <ChevronDownIcon className="h-4 w-4 text-gray-600" />
            </div>
            {/* <Button className="bg-blue-600 text-white">Start my exchange</Button> */}
          </div>
        </header>
      </div>
    )
  }