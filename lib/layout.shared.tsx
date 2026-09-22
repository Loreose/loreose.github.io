import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <div className="flex items-center gap-2 font-semibold">
          {/* Light Theme Logo */}
          <img
            src="/logo-dark.png"
            alt={appName}
            className="h-12 w-auto block dark:hidden"
          />
          {/* Dark Theme Logo */}
          <img
            src="/logo-light.png"
            alt={appName}
            className="h-12 w-auto hidden dark:block"
          />
          <span>{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: "main",
        text: "Documentation",
        url: "/docs",
        on: "nav",
      },
      {
        type: "icon",
        label: "Tebex",
        icon: (
          <div className="flex items-center justify-center">
            {/* Light Theme Tebex Icon */}
            <img
              src="/tebex-dark.png"
              alt="Tebex"
              width={22}
              height={22}
              className="opacity-75 hover:opacity-100 block dark:hidden"
            />
            {/* Dark Theme Tebex Icon */}
            <img
              src="/tebex-light.png"
              alt="Tebex"
              width={22}
              height={22}
              className="opacity-75 hover:opacity-100 hidden dark:block"
            />
          </div>
        ),
        text: "Tebex Store",
        url: "https://your-store.tebex.io",
      },
      {
        type: "icon",
        label: "Discord",
        icon: (
          <div className="flex items-center justify-center">
            {/* Light Theme Discord Icon */}
            <img
              src="/discord-dark.png"
              alt="Discord"
              width={22}
              height={22}
              className="opacity-75 hover:opacity-100 block dark:hidden"
            />
            {/* Dark Theme Discord Icon */}
            <img
              src="/discord-light.png"
              alt="Discord"
              width={22}
              height={22}
              className="opacity-75 hover:opacity-100 hidden dark:block"
            />
          </div>
        ),
        text: "Discord",
        url: "https://discord.gg/your-server",
      },
    ],
  };
}