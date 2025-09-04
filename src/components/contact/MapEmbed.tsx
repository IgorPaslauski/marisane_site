type Props = {
  src: string;
  height?: number;
  className?: string;
};

const MapEmbed = ({ src, height = 250, className }: Props) => {
  return <iframe src={src} width="100%" height={height} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={className} />;
};

export default MapEmbed;
