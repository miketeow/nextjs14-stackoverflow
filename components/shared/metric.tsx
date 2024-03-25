import Image from "next/image";
import Link from "next/link";
import React from "react";
type MetricProps = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  isAuthor?: boolean;
};
const Metric = ({ imgUrl, alt, value, title, href, isAuthor }: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`flex items-center gap-1`}>
        {value}
        {title}
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center justify-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return (
    <div className="flex items-center justify-center flex-wrap gap-1">
      {metricContent}
    </div>
  );
};

export default Metric;
