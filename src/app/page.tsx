import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <video
        src="/video-01.mp4"
        autoPlay
        muted
        loop
        className="absolute w-screen h-screen object-cover"
      ></video>

      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 bg-zinc-950/80 rounded-xl p-4 lg:p-6 flex flex-col">
        <div className="h-[clamp(100px,80vw,600px)] w-full rounded-lg overflow-hidden relative mb-6">
          <Image
            src="/image-01.jpeg"
            fill
            alt="image-01"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 mb-12">
          <h1 className="text-[clamp(20px,8vw,100px)] font-bold tracking-tight leading-none">
            Can&apos;t Decide
          </h1>
          <p className="text-[clamp(12px,5vw,50px)] font-medium text-zinc-300">
            Max Dean, Luke Dean, Locky
          </p>
        </div>

        <p className="text-zinc-300 text-sm">Powered by release.tv</p>
      </div>
    </main>
  );
}
