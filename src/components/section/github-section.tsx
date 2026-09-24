"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import { DATA } from "@/data/resume";

const subscribe = () => () => {};

export default function GitHubSection() {
  const { resolvedTheme } = useTheme();
  // The theme is only known in the browser, so render the calendar after hydration.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-xl font-bold">GitHub Activity</h2>
        <Link
          href={DATA.contact.social.GitHub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          @{DATA.githubUsername}
        </Link>
      </div>
      <div className="border rounded-xl p-4 overflow-x-auto text-muted-foreground">
        {mounted ? (
          <GitHubCalendar
            username={DATA.githubUsername}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            blockSize={8}
            blockMargin={3}
            fontSize={12}
            errorMessage="Couldn't load GitHub activity right now."
          />
        ) : (
          <div className="h-[128px]" />
        )}
      </div>
    </div>
  );
}
