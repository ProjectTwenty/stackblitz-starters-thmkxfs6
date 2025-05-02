"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Phone, 
  BookOpen, 
  PhoneCall, 
  Settings,
  ArrowLeft,
  Bell,
  User,
  Headphones
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Agents", href: "/agents", icon: Users },
  { name: "Call History", href: "/call-history", icon: Phone },
  { name: "Knowledge Base", href: "/knowledge-base", icon: BookOpen },
  { name: "Phone Numbers", href: "/phone-numbers", icon: PhoneCall },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col border-r border-border bg-background transition-all duration-300 relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <div className="flex items-center font-semibold">
            <span className="text-primary">ElevenLabs</span>
            <span className="ml-1 text-muted-foreground">Conversational AI</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto">
            <span className="font-bold text-primary">EL</span>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    collapsed ? "mr-0" : "mr-3"
                  )}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-border p-2">
        <div className="space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => {}}
          >
            <ArrowLeft
              className={cn("mr-3 h-5 w-5", collapsed ? "mr-0" : "mr-3")}
            />
            {!collapsed && <span>Back to ElevenLabs</span>}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => {}}
          >
            <Headphones
              className={cn("mr-3 h-5 w-5", collapsed ? "mr-0" : "mr-3")}
            />
            {!collapsed && <span>Audio Tools</span>}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => {}}
          >
            <Bell
              className={cn("mr-3 h-5 w-5", collapsed ? "mr-0" : "mr-3")}
            />
            {!collapsed && <span>Notifications</span>}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => {}}
          >
            <User
              className={cn("mr-3 h-5 w-5", collapsed ? "mr-0" : "mr-3")}
            />
            {!collapsed && (
              <div className="flex flex-col items-start text-xs">
                <span className="font-medium">My Account</span>
                <span className="text-muted-foreground">My Workspace</span>
              </div>
            )}
          </Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-20 h-8 w-8 rounded-full border border-border bg-background shadow-md hover:bg-accent"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ArrowLeft
          className={cn("h-4 w-4 transition-transform duration-300", 
            collapsed && "rotate-180"
          )}
        />
      </Button>
    </div>
  );
};

export default Sidebar;