type Props = {
  urn: string;
  title: string;
  height: number;
};

export function LinkedInEmbed({ urn, title, height }: Props) {
  return (
    <iframe
      src={`https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`}
      title={title}
      height={height}
      loading="lazy"
      allowFullScreen
      className="w-full max-w-[504px] rounded-xl border border-border bg-white"
    />
  );
}
