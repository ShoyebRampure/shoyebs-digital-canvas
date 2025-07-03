import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Linkedin, Github } from "lucide-react";

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
    <>
      <style>
        {`
          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .font-harry {
            font-family: 'HarryP', serif;
          }

          .sidebar-hogwarts {
            background: linear-gradient(135deg, #121212, #1f1f1f);
            color: #fdf6e3;
            border-right: 1px solid #FFD70044;
            box-shadow: 0 0 12px #FFD70022;
          }

          .sidebar-title {
            color: #FFD700;
            text-shadow: 0 0 6px #FFD70088;
          }

          .sidebar-link {
            transition: all 0.3s ease;
            color: #fdf6e3;
          }

          .sidebar-link:hover {
            background-color: #FFD70033;
            color: #FFD700;
            border-radius: 6px;
            padding-left: 0.5rem;
          }

          .sidebar-connect-label {
            color: #c5b992;
            font-weight: 500;
          }

          .sidebar-social:hover {
            color: #FFD700 !important;
          }
        `}
      </style>

      <Sidebar className="sidebar-hogwarts font-harry">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              <span className="text-xl font-bold sidebar-title">
                🪄 Shoyeb Rampure
              </span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="block px-3 py-2 sidebar-link scroll-smooth"
                    >
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="mt-6 sidebar-connect-label">
              Connect
            </SidebarGroupLabel>
            <SidebarMenu>
              {socialLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white sidebar-link hover:sidebar-social"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
