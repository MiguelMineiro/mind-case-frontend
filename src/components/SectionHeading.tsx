import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  title,
  subtitle,
  actionLabel,
  actionTo,
}: {
  title: string;
  subtitle: string;
  actionLabel?: string;
  actionTo?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-white/55">{subtitle}</p>
      </div>
      {actionLabel && actionTo ? (
        <Link
          to={actionTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#00C1D5] transition hover:text-[#21D4E7]"
        >
          {actionLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
