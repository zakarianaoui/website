import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Competences() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex-col items-center h-full p-5 text-justify text-gray-700 lg:p-20">
        <Link href={'/'}>
          <ArrowLeftIcon className="absolute w-10 h-10 text-blue-500 top-5 left-10" />
        </Link>
        <h1 className="my-8 text-5xl font-extrabold text-center md:text-6xl lg:text-7xl">
          Competency matrix of IDeA
        </h1>
        <div className="flex items-center justify-center w-full">
          <a href="https://app.powerbi.com/reportEmbed?reportId=12f6d628-7428-49f0-9e2c-600c760996b0&autoAuth=true&ctid=35c1785d-3361-4341-a29e-fc685e52b8a5" target="_blank" rel="noopener noreferrer" className="rounded-lg shadow-lg">
            Go to Power BI Page
          </a>

        </div>
      </div>
    </div>
  );
}
