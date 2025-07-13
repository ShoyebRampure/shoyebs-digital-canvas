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
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;600;700&display=swap');

          * {
            font-family: 'Cambria', serif;
          }

          .sidebar-professional {
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            color: #1f2937;
            border-right: 1px solid #e5e7eb;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
            min-height: 100vh;
          }

          .sidebar-title {
            color: #1f2937;
            font-weight: 700;
            font-size: 1.25rem;
            letter-spacing: -0.025em;
            padding: 1rem 0;
            border-bottom: 2px solid transparent;
            background: linear-gradient(90deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .sidebar-link {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: #4b5563;
            font-weight: 500;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin: 0.25rem 0;
            display: block;
            text-decoration: none;
            position: relative;
            overflow: hidden;
          }

          .sidebar-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
            transition: left 0.6s;
          }

          .sidebar-link:hover::before {
            left: 100%;
          }

          .sidebar-link:hover {
            background: linear-gradient(135deg, #667eea15, #764ba215);
            color: #1f2937;
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
          }

          .sidebar-link:active {
            transform: translateX(2px);
          }

          .sidebar-connect-label {
            color: #6b7280;
            font-weight: 600;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 2rem;
            margin-bottom: 1rem;
            padding: 0 1rem;
          }

          .sidebar-social {
            transition: all 0.3s ease;
            color: #4b5563;
            font-weight: 500;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin: 0.25rem 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            position: relative;
            overflow: hidden;
          }

          .sidebar-social::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
            transition: left 0.6s;
          }

          .sidebar-social:hover::before {
            left: 100%;
          }

          .sidebar-social:hover {
            background: linear-gradient(135deg, #667eea15, #764ba215);
            color: #1f2937;
            transform: translateX(4px);
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
          }

          .sidebar-social:hover .social-icon {
            transform: scale(1.1);
          }

          .social-icon {
            transition: transform 0.3s ease;
          }

          .sidebar-content {
            padding: 1.5rem 1rem;
          }

          .nav-section {
            margin-bottom: 2rem;
          }

          @media (max-width: 768px) {
            .sidebar-professional {
              box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            }
            
            .sidebar-title {
              font-size: 1.1rem;
            }
            
            .sidebar-link,
            .sidebar-social {
              padding: 0.625rem 0.75rem;
            }
          }
        `}
      </style>

      <Sidebar className="sidebar-professional">
        <SidebarContent className="sidebar-content">
          <SidebarGroup className="nav-section">
            <SidebarGroupLabel>
              <span className="sidebar-title">
                Shoyeb Rampure
              </span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="sidebar-link scroll-smooth"
                    >
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="sidebar-connect-label">
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
                      className="sidebar-social"
                    >
                      <item.icon size={20} className="social-icon" />
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