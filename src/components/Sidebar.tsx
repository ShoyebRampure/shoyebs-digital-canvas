
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Linkedin, Github, Award } from "lucide-react";

const navItems = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Achievements", url: "#achievements" },
  { title: "Certifications", url: "#certifications" },
  { title: "Contact", url: "#contact" },
];

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shoyeb-rampure-584958250/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/ShoyebRampure",
    icon: Github,
  },
];

export default function SidebarNav() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="text-lg font-bold text-primary">Shoyeb Rampure</span>
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="block px-2 py-2 rounded transition hover:bg-primary/30 scroll-smooth">
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-6">Connect</SidebarGroupLabel>
          <SidebarMenu>
            {socialLinks.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                    <item.icon size={20} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
