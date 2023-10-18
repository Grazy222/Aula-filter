import "./styles.css";
import { useState } from "react";

export default function App() {
  const [produtos, setProdutos] = useState([
    {
      categoria: "esportes",
      produto: "Bicicleta Aro 29",
      preco: 1500
    },
    {
      categoria: "joias",
      produto: "Colar de Pérolas",
      preco: 1450
    },
    {
      categoria: "papelaria",
      produto: "Borracha",
      preco: 1200
    },
    {
      categoria: "tecnologia",
      produto: "RTX 4090",
      preco: 12000
    },
    {
      categoria: "pereciveis",
      produto: "Biscoito da Vaquinha",
      preco: 3
    },
    {
      categoria: "papelaria",
      produto: "Lápis",
      preco: 50
    },
    {
      categoria: "tecnologia",
      produto: "Ps5",
      preco: 5000
    },
    {
      categoria: "tecnologia",
      produto: "PC GAMER 32GB RAM",
      preco: 4500
    },
    {
      categoria: "automóveis",
      produto: "Moto PCX banhada a Ouro",
      preco: 25000
    }
  ]);
  // Esse aqui é o array que irá receber os nossos produtos filtrados com condição preco menor que 10000
  const [promocao, setPromocao] = useState([]);

  const FiltrarProdutos = () => {
    // setPromocao modifique o meu array promocao, adicione o array produtos com um filtro, esse filtro adicione somente os produtos cujo preço for menor que 10000
    setPromocao(produtos.filter((element) => element.preco < 10000));
  };

  // filter() ele é mais um dos métodos de arrays existentes, e o que ele faz é filtrar(copiar) informações dos nossos arrays, BASEADO NA CONDIÇÃO QUE VOCÊ UTILIZAR, SE VOCÊ NÃO UTILIZAR UMA CONDIÇÃO ELE NÃO FARÁ A FILTRAGEM!!!

  return (
    <>
      <h1>MegaLoja VnW</h1>
      {produtos.map((item) => (
        <ul>
          <li>{item.produto}</li>
          <li>Preço: R${item.preco},00</li>
        </ul>
      ))}
      <h2>SALDÃO DE ESTOQUEEE!!!</h2>
      <h3>O GERENTE FICOUUU MALUCO!!!</h3>
      {/* Esse map irá mapear todos os produtos que foram copiados do nosso array produtosPromocao */}
      {promocao.map((item) => (
        <ul>
          <li>{item.produto}</li>
          <li>{item.preco}</li>
        </ul>
      ))}
      {/* Aqui o onClick={} irá acordar,  */}
      <button onClick={FiltrarProdutos}>Ver as Promoções</button>
    </>
  );
}
