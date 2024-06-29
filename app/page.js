import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BeforeAfter from "./components/BeforeAfter";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <BeforeAfter /> 
    </main>
  );
}
