interface Props {
  title: React.ReactNode;
  sideBannerText: string;
  accentColor?: string;
  action?: React.ReactNode;
  description: string;
}

export default function BaseOfferCard({
  title,
  sideBannerText,
  accentColor = "bg-surface-1",
  action,
  description,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className={`${accentColor} p-4 flex justify-center items-center`}>
        <span
          className="font-serif font-semibold text-2xl text-background"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {sideBannerText}
        </span>
      </div>
      <div className="flex flex-col p-4 gap-2 w-full bg-surface-2">
        <div className="flex justify-between">
          {title}
          {action}
        </div>
        <div className="min-h-20 md:min-h-36 text-secondary-1">
          {description}
        </div>
        <hr className="border-t border-t-gray-300" />
        <div>
          <button className="text-secondary-1 cursor-pointer hover:text-primary-1">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
