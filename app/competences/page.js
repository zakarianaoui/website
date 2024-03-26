import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Competences() {
  return (
    <div className="h-screen">
      <div className="bg-gray-100 p-5 text-justify text-gray-700 lg:p-20 flex-col items-center h-full">
        <Link href={'/'}> <ArrowLeftIcon className="h-10 w-10 text-blue-500 absolute top-5 left-10" /> </Link>
        <h1 className="my-8 text-center text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Competency matrix of IDeA
        </h1>
        {/* Ajoutez le code iframe ici */}
        <div className="flex items-center w-full">
          <iframe title="Suivi_compétence_FINAL" className="rounded-lg shadow-lg" width="1440" height="641.25" src="https://app.powerbi.com/reportEmbed?reportId=12f6d628-7428-49f0-9e2c-600c760996b0&autoAuth=true&ctid=35c1785d-3361-4341-a29e-fc685e52b8a5" allowFullScreen="true"></iframe>
          {/* Fin du code iframe */}
        </div>
      </div>
    </div>
  );
}