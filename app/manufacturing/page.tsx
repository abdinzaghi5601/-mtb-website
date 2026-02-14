import ManufacturingProcess from "@/components/ManufacturingProcess";

export const metadata = {
  title: "Manufacturing Process — TBM Machines and Manufacturing Services",
  description:
    "9-stage precision manufacturing process from raw steel to world-class TBM spares. CNC machining, heat treatment & rigorous quality assurance.",
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen">
      <ManufacturingProcess />
    </div>
  );
}
