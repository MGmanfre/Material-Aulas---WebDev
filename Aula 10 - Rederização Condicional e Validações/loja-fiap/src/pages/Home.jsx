import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";
import 'ldrs/ring'

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true)

    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));
    
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .finally(()=>setIsLoading(false))
  }, []);

  const filtrados = allProducts
        .filter(pegaItem => pegaItem.title.includes("jackfsafsaet")||
        pegaItem.title.includes("cofsafsaat")||
        pegaItem.description.includes("jafsafcket")||
        pegaItem.description.includes("cfsafasoat"));

  if (isLoading) return <l-ring size="60" color="coral"></l-ring>

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Queridinhos">
        {allProducts
        .filter(pegaItem => pegaItem.rating.rate >= 4)
        .sort((a,b) => b.rating.rate - a.rating.rate || b.price - a.price)
        .map((product)=>(
          <ProductCard key={product.id} {...product}/>
        ))
        }
      </SectionContainer>

      <SectionContainer title="Baratinhos">
        {allProducts
        .filter(pegaItem => pegaItem.price > 0 && pegaItem.price <= 100)
        .sort((a,b) => a.price - b.price)
        .map((product)=>(
          <ProductCard key={product.id} {...product}/>
        ))
        }
      </SectionContainer>
      <SectionContainer title="Jaquetas e Casacos">
        { filtrados.length > 0 ?
        filtrados
        .sort((a,b) => a.price - b.price)
        .map((product)=>(
          <ProductCard key={product.id} {...product}/>
        ))
        :<p className="flex place-self-center">Nenhum produto encontrado</p>
        }
      </SectionContainer>
    </div>
  );
}
