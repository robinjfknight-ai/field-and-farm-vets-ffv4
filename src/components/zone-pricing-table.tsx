import { visitFees } from "@/lib/practice";

export function ZonePricingTable() {
  const eq = visitFees.equine;

  const rows = [
    {
      label: eq.zone.label,
      fee: `£${eq.zone.fee} + 50% off mileage`,
      highlight: true,
      note: "Book 48+ hours in advance",
    },
    {
      label: eq.standard.label,
      fee: `£${eq.standard.fee} + mileage`,
      highlight: false,
      note: "",
    },
    {
      label: eq.emergency.label,
      fee: `£${eq.emergency.feeMin}–£${eq.emergency.feeMax} + mileage`,
      highlight: false,
      note: "",
    },
    {
      label: eq.ooh.label,
      fee: `£${eq.ooh.feeMin}–£${eq.ooh.feeMax} + mileage`,
      highlight: false,
      note: "",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-white/20">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/10">
            <th className="px-5 py-3 text-left font-semibold text-white">Visit type</th>
            <th className="px-5 py-3 text-left font-semibold text-white">Fee (exc. VAT)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className={`border-b border-white/10 last:border-0 ${
                row.highlight ? "bg-brand/30" : "bg-white/5"
              }`}
            >
              <td className="px-5 py-3.5">
                <p className={`font-medium ${row.highlight ? "text-white" : "text-white/80"}`}>
                  {row.label}
                </p>
                {row.note && (
                  <p className="mt-0.5 text-xs text-white/50">{row.note}</p>
                )}
              </td>
              <td className={`px-5 py-3.5 font-semibold ${row.highlight ? "text-brand-light" : "text-white/70"}`}>
                {row.fee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bg-white/5 px-5 py-3 text-xs text-white/40">
        Mileage at £{eq.mileage}/mile return from practice. All fees exc. VAT.
      </p>
    </div>
  );
}
