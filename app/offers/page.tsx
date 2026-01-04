"use client";

import SigninToUnlock from "@/components/SigninToUnlock";
import { useAuth } from "../context/AuthContext";
import Coupon from "@/components/offers/Coupon";
import { formatCurrency } from "@/utils/formatCurrency";
import GiftCard from "@/components/offers/GiftCard";
import PaymentOffer from "@/components/offers/PaymentOffer";
import PaymentOffersPlaceholder from "@/components/offers/PaymentOffersPlaceholder";
import GiftCardsPlaceholder from "@/components/offers/GiftCardsPlaceholder";

export default function Offers() {
  const auth = useAuth();

  const coupons = [
    {
      bannerText: formatCurrency(1500),
      couponCode: "LONGSTAY",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
    {
      bannerText: formatCurrency(3000),
      couponCode: "EARLYBIRD",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
    {
      bannerText: "Flat 10%",
      couponCode: "RUSHDEAL",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    },
  ];

  const giftCards = [
    {
      bannerText: formatCurrency(1500),
      couponCode: "MYNTRA",
      accentColor: "bg-pink-500",
      img: "/assets/myntra.png",
      description: "Get this gift voucher on booking above ₹2000",
    },
    {
      bannerText: formatCurrency(1000),
      couponCode: "HAMMER",
      accentColor: "bg-black",
      img: "/assets/hammer.png",
      description: "Get this gift voucher on booking above ₹1500",
    },
  ];

  const paymentOffers = [
    {
      bannerText: "10% OFF",
      couponCode: "HDFC BANK",
      accentColor: "bg-blue-600",
      img: "/assets/hdfc.png",
      description: "Get 10% off on booking above ₹1500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-primary-1 font-semibold text-2xl">Offers</h1>
        {!auth.checkAuthStatus() ? (
          <SigninToUnlock />
        ) : (
          <h2 className="text-primary-1 text-lg">
            Book directly with us to get exclusive benefits
          </h2>
        )}
      </section>
      <section className="my-6 flex flex-col gap-4">
        <h2 className="font-semibold text-primary-1 mb-4">Sitewide coupons:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <Coupon
              key={coupon.couponCode}
              bannerText={coupon.bannerText}
              couponCode={coupon.couponCode}
              description={coupon.description}
            />
          ))}
        </div>
      </section>
      <section className="my-6 flex flex-col gap-4">
        <h2 className="font-semibold text-primary-1">Bonus gift cards:</h2>
        {auth.checkAuthStatus() ? (
          <>
            <p className="text-secondary-1">Collect multiple of these</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {giftCards.map((giftCard, i) => (
                <GiftCard
                  key={i}
                  bannerText={giftCard.bannerText}
                  couponCode={giftCard.couponCode}
                  img={giftCard.img}
                  accentColor={giftCard.accentColor}
                  description={giftCard.description}
                />
              ))}
            </div>
          </>
        ) : (
          <GiftCardsPlaceholder />
        )}
      </section>
      <section className="my-6 flex flex-col gap-4">
        <h2 className="font-semibold text-primary-1">Payment offers:</h2>
        {auth.checkAuthStatus() ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentOffers.map((offer, i) => (
              <PaymentOffer
                key={i}
                bannerText={offer.bannerText}
                couponCode={offer.couponCode}
                img={offer.img}
                accentColor={offer.accentColor}
                description={offer.description}
              />
            ))}
          </div>
        ) : (
          <PaymentOffersPlaceholder />
        )}
      </section>
    </div>
  );
}
