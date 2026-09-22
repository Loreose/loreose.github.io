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
            className="h-10 w-auto block dark:hidden"
          />
          {/* Dark Theme Logo */}
          <img
            src="/logo-light.png"
            alt={appName}
            className="h-10 w-auto hidden dark:block"
          />
          <span>{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}