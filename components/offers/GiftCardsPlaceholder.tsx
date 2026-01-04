import { useAuth } from "@/app/context/AuthContext";
import BaseSurfaceBtn from "../BaseSurfaceBtn";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

export default function GiftCardsPlaceholder() {
  const auth = useAuth();
  return (
    <div className="max-w-lg flex flex-col gap-4">
      <div className="flex bg-surface-2">
        <div className="text-primary-1 px-6 py-4 w-2/3">
          <span className="font-semibold text-lg">Assured vouchers up to</span>
          <br />
          <span className="font-semibold text-3xl/relaxed">
            {formatCurrency(1000)} ✨
          </span>
          <br />
          <span className="text-xl">of trending brands</span>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Image
            src={"/assets/gift-card-placeholder.svg"}
            height={150}
            width={150}
            alt="gift-card"
          />
        </div>
      </div>
      <div>
        <BaseSurfaceBtn tittle="Claim gift cards >>" action={auth.login} />
      </div>
    </div>
  );
}
