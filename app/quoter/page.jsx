import { Navbar } from "@/src/components/global/components/auth/nabvar";
import { QuoteBody } from "@/src/components/quoter/components/quoteBody";
import { QuoteTable } from "@/src/components/quoter/components/quoteTable";

export default function Home() {
    return (
      <>
        <Navbar />
        <div className="px-10 md:px-28 mt-20">
          <QuoteTable />
          <QuoteBody />
        </div>
      </>
    );
  }
