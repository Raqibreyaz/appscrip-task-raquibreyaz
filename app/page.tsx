import React from "react";
import { Header } from "@/components/header/header";
import { Main } from "@/components/main/main";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
