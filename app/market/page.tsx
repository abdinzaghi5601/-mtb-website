import MarketAnalysis from "@/components/MarketAnalysis";
import FinancialHighlights from "@/components/FinancialHighlights";

export const metadata = {
  title: "Market & Finance — TBM Machines and Manufacturing Services",
  description:
    "TBM market analysis, India infrastructure demand, competitive positioning, financial projections and project cost breakdown.",
};

export default function MarketPage() {
  return (
    <div className="min-h-screen">
      <MarketAnalysis />
      <FinancialHighlights />
    </div>
  );
}
