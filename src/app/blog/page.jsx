import React from "react";
import NewRequest from "@/allApi/newsRequest/newRequest";
import Link from "next/link";
import Footer from "@/footer/footer";

async function Page() {
  const blogItems = await NewRequest();

  return (
    <>
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
<<<<<<< HEAD
        <div className="flex flex-col flex-wrap justify-center items-center pt-[8rem]">
          {blogItems.map((posts, index) => (
            <div key={index} className="pt-[1rem]">
              <h1 className=" text-white px-4 py-2">
=======
        <div className="mx-4 md:mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] relative md:top-[130px] lg:top-[130px]">
          {blogItems.map((posts, index) => (
            <div key={index} className="mt-4 md:mt-6">
              <h1 className="border-2 w-[90%] md:w-[400px] overflow-hidden text-white px-4 py-2">
>>>>>>> cdf375cad3ec33ac54aee98dc2934a39e73d36a7
                <Link href={`/blog/${posts.id}`}>
                  <span className="text-[#E6E31A]">{index}</span>-{posts.title}
                </Link>
              </h1>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Page;
