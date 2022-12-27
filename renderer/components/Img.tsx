import Image from 'next/image';

interface IImg {
  src: string;
  width: string;
  height?: string;
  alt: string;
  [key: string]: string | undefined;
}

export default function Img({ src, width, height, alt, ...other }: IImg) {
  return (
    <Image
      src={src}
      width={width}
      height={height || width}
      alt={alt}
      {...other}
    />
  );
}
