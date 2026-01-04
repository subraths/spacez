"use client";

import { useState } from "react";
import BaseOfferCard from "./BaseOfferCard";
import Image from "next/image";

export default function GiftCard({
  couponCode,
  bannerText,
  accentColor,
  img,
  description,
}: {
  couponCode: string;
  bannerText: string;
  accentColor: string;
  img: string;
  description: string;
}) {
  const [collect, setCollect] = useState(false);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(couponCode);
    setCollect(true);
    setTimeout(() => {
      setCollect(false);
    }, 1000);
  };

  return (
    <BaseOfferCard
      accentColor={accentColor}
      sideBannerText={bannerText}
      action={
        <div
          onClick={handleCopyCode}
          className="text-primary-2 font-semibold text-lg cursor-pointer px-2"
        >
          <span className="pr-1"></span>
          <span>{collect ? "Collected" : "Collect"}</span>
        </div>
      }
      description={description}
      title={
        <div className="uppercase text-primary-1 text-xl font-semibold">
          <span className="pr-2">
            <Image
              className="inline"
              src={img}
              height={30}
              width={30}
              alt={couponCode}
            />
          </span>
          {couponCode}
        </div>
      }
    />
  );
}
