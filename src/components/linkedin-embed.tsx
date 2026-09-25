type Props = {
  urn: string;
  title: string;
};

export function LinkedInEmbed({ urn, title }: Props) {
  return (
    <iframe
      src={`https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`}
      title={title}
      loading="lazy"
      allowFullScreen
      className="h-[420px] w-full rounded-xl border border-border bg-white"
    />
  );
}
