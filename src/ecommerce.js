import './ecommerce.css'
import React, {useState} from 'react';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Checkout from './components/checkout/checkout';
import ListarProdutos from './components/produtos/listar-produtos';
import { id } from 'date-fns/locale';
import { func } from 'prop-types';


function Ecommerce() {
  
  const [carrinho, setCarrinho] = useState({produtos:[]});
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function adicionarProduto(produto){
        const objCarrinho = Object.assign({}, carrinho)
        // atualizar a quantidade 
        let novoProduto = true;
        objCarrinho.produtos.forEach((prod, indice) => {
          if(prod.nome === produto.nome) {
            objCarrinho.produtos[indice].quantidade++;
            novoProduto = false;
          }
        });


        //adicionar novo produto  ao carrinho
        if(novoProduto){
          objCarrinho.produtos.push({
            nome: produto.nome, preco: produto.preco, quantidade: 1
          });
        }

        setCarrinho(objCarrinho);
  }

  function handleExibirProdutos(){
    setExibirCheckout(false);
    setExibirProdutos(true);
  }

  function handleExibirCheckout(total){
    setExibirCheckout(true);
    setExibirProdutos(false);
    setTotal(total);


  }


  return (  
    <div>
      <Menu
      produtos={carrinho.produtos}
      handleExibirProdutos={handleExibirProdutos}
      handleExibirCheckout={handleExibirCheckout} />
      <Produtos 
      visivel={exibirProdutos}
      adicionarProduto={adicionarProduto} />
      <Checkout />
      
    </div>

    
  );
}

export default Ecommerce;
