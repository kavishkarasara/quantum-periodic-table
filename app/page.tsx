import PeriodicTable from "@/components/PeriodicTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Periodic Table",
  description: "Interactive futuristic periodic table with isotope explorer",
};

export default function Page() {
  return <PeriodicTable />;
}
