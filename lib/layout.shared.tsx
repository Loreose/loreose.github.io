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
            src="public/logo-dark.png"
            alt={appName}
            className="h-6 w-auto block dark:hidden"
          />
          {/* Dark Theme Logo */}
          <img
            src="public/logo-light.png"
            alt={appName}
            className="h-6 w-auto hidden dark:block"
          />
          <span>{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}