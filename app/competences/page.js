import SectionTitle from "@/components/home/sectionTitle";
export default function Competences() {
  return (
    <>
      <div className="bg-gray-100 p-5 text-justify text-gray-700 lg:p-20">
        <h1 className="my-8 text-center text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Competency matrix of IDeA 
        </h1>
        {/* Ajoutez le code iframe ici */}
        <iframe title="Suivi_compétence_FINAL" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=12f6d628-7428-49f0-9e2c-600c760996b0&autoAuth=true&ctid=35c1785d-3361-4341-a29e-fc685e52b8a5" frameborder="0" allowFullScreen="true"></iframe>
        {/* Fin du code iframe */}
      </div>
    </>
  );
}