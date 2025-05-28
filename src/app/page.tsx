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
        <h2 className="text-2xl">Se estan agregando las siguientes funcionalidades </h2>
        <ul className="bg-white/70 rounded-xl shadow-lg p-6 w-full max-w-xl space-y-4 border border-gray-200">
          <li className="flex items-start gap-2 text-lg font-semibold text-blue-700">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-bold mr-2">1</span>
            Agregar botón <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">"importar csv"</span> y <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">"exportar csv"</span> cuya funcionalidad será corrección de DNIs
          </li>
          <li className="flex items-start gap-2 text-lg font-semibold text-blue-700">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-bold mr-2">2</span>
            Agregar botón <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">"importar csv"</span> y <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">"exportar csv"</span> cuya funcionalidad será Agregar alumnos al sistema
          </li>
          
          <li className="flex items-start gap-2 text-lg font-semibold text-blue-700">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-bold mr-2">3</span>
            Agregar botón <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">"Desinscribir Alumno"</span> cuya funcionalidad será Eliminar alumno de un grupo
          </li>

          <li className="flex items-start gap-2 text-lg font-semibold text-blue-700">
            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-bold mr-2">4</span>
             Eliminar Clases anteriores al 17 de Marzo
          </li>


        </ul>

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
