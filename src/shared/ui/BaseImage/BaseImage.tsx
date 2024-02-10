type BaseImageProps = { ext?: string; code: string; alt: string; className?: string };

const BaseImage = ({ ext = 'jpg', code, alt, className }: BaseImageProps) => {
  return <img className={className} src={`data:image/${ext};base64,${code}`} alt={alt} />;
};

export default BaseImage;
