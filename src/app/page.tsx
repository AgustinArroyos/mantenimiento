import Image from "next/image";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      
      <Image
        src="/con.jpg"
        alt="IMG"
        width={200}
        height={200}
        className="w-96 h-96 "
      />
      <h1 className="text-4xl font-bold text-center">
       Sistema en mantenimiento.. </h1>
      

      <Image
        src="/IMG.png"
        alt="IMG"
        width={1000}
        height={1000}
        className="w-44 h-44 "
      />
    </div>
  );
}
