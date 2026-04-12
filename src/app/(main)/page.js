import Banner from "@/components/Banner/Banner";
import StateSection from "@/components/StateSection/StateSection";
import TrendingApps from "@/components/TrendingApps/TrendingApps";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner></Banner>
        <StateSection></StateSection>
        <TrendingApps></TrendingApps>
        
        
      </main>
    </div>
  );
}
