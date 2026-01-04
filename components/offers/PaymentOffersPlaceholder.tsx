import { useAuth } from "@/app/context/AuthContext";
import BaseSurfaceBtn from "../BaseSurfaceBtn";
import Image from "next/image";

export default function PaymentOffersPlaceholder() {
  const auth = useAuth();
  return (
    <div className="max-w-lg flex flex-col gap-4">
      <div className="flex bg-surface-2">
        <div className="text-primary-1 px-6 py-4 w-3/4">
          <span className="text-xl">Save more on your bookings</span>
          <br />
          <span className="font-semibold text-3xl/relaxed">upto 15% Off</span>
          <br />
          <span className="font-semibold text-lg">
            on select payment methods
          </span>
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <Image
            src={"/assets/payments-offers-placeholder.svg"}
            height={100}
            width={100}
            alt="s"
          />
        </div>
      </div>
      <div>
        <BaseSurfaceBtn tittle="Unlock offers >>" action={auth.login} />
      </div>
    </div>
  );
}
