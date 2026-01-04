"use client";

import BaseOfferCard from "./BaseOfferCard";
import Image from "next/image";

export default function PaymentOffer({
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
  return (
    <BaseOfferCard
      accentColor={accentColor}
      sideBannerText={bannerText}
      description={description}
      title={
        <div className="uppercase text-primary-1 text-2xl font-semibold">
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
