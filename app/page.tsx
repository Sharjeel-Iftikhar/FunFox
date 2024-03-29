import Image from "next/image";


export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src="/assets/background.png"
            alt="background image"
            className="w-full"
            width={1920}
            height={1080}
            quality={100}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center text-black">
            Welcome to FunFox Week 1
          </h1>
        </div>

      </div>
    </main>
    </>
    
  );
}
