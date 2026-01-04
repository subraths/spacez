"use client";

import { useState } from "react";
import BaseOfferCard from "./BaseOfferCard";
import { MdContentCopy } from "react-icons/md";
import { MdCheck } from "react-icons/md";

export default function Coupon({
  couponCode,
  bannerText,
  description,
}: {
  couponCode: string;
  bannerText: string;
  description: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <BaseOfferCard
      sideBannerText={bannerText}
      action={
        <div
          onClick={handleCopyCode}
          className="text-primary-2 font-semibold text-lg cursor-pointer px-2"
        >
          <span className="pr-1">
            {copied ? (
              <MdCheck className="inline" />
            ) : (
              <MdContentCopy className="inline" />
            )}
          </span>
          <span>{copied ? "Copied" : "Copy"}</span>
        </div>
      }
      description={description}
      title={
        <div className="uppercase text-primary-1 text-xl font-semibold">
          {couponCode}
        </div>
      }
    />
  );
}
