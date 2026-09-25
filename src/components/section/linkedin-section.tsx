import { DATA } from "@/data/resume";

export default function LinkedInSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">LinkedIn</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured on LinkedIn</h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            Updates and thoughts I&apos;ve shared with my network.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        {DATA.linkedinPosts.map((post) => (
          <iframe
            key={post.urn}
            src={`https://www.linkedin.com/embed/feed/update/${post.urn}`}
            title={post.title}
            height={post.height}
            loading="lazy"
            allowFullScreen
            className="w-full max-w-[504px] rounded-xl border border-border bg-white"
          />
        ))}
      </div>
    </div>
  );
}
