import { Button } from "@/components/ui/button"
import { GraficoBarras } from "@/components/GraficoBarras"
import { GraficoPizza } from "@/components/GraficoPizza"

export default function Relatorios() {
  function handleClick(){
    alert("clicou!")
  }

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <Button onClick={() => handleClick(e)}>Click me</Button>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <GraficoBarras titulo="Grafico 1"/>
        <GraficoBarras titulo="Grafico 2"/>
        <GraficoPizza/>
      </div>
      
    </div>
  );
}
