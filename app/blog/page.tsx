import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto flex flex-col h-dvh py-4 space-y-4">
      <Header variant="blog" />
      <div className="flex-1 flex justify-center items-center">
        Coming Soon{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
