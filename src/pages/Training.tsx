import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Room } from "../components/Room";
import { Sidebar } from "../components/Sidebar";

export function Training () {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* 
          TODO: Quando não tiver slug de aulas, direcionar para a primeira 
          ou adicionar conteúdo introdutório 
        */}
        { slug ? <Room lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  )
}