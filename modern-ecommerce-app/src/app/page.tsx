import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-600">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start ">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src={""} width={1024} height={1024} alt="logo" />
              </div>
              <h1>Your Image on a Custom Phone case</h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}