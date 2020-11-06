import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pinguin from '../imagens/286X180.png';
import PropTypes from 'prop-types';




function ListarProdutos(props) {
    const produtos = [
        { nome: 'Produto 01', preco: '59,99' },
        { nome: 'Produto 02', preco: '59,99' },
        { nome: 'Produto 03', preco: '59,99' },
        { nome: 'Produto 04', preco: '59,99' },
        { nome: 'Produto 05', preco: '59,99' },
        { nome: 'Produto 06', preco: '59,99' },



    ];

    function handleComprar(event,produto){
        event.preventDefault();
        props.adicionarProduto(produto);
        props.exibirMensagem(produto);

    }

    function render() {
        let key = 1;
        const cards = produtos.map(produto=>
        <Card
            key={key}
            data-testid={'card' + key++}
            style={{ width: '18rem', margin: '10px', float: 'left' }}>
            <Card.Img variant="top"  src={pinguin} />
            <Card.Body className="text-center">
                <Card.Title style={{ height: '40px' }}>
                    {produto.nome}
                </Card.Title>
                <Card.Text>
                    Descrição do Produto aqui...
                </Card.Text>
                <Button 
                variant="success"
                style= {{ width: '100%' }} 
                onClick={(event)=> handleComprar(event,produto)}>
                    Comprar ({produto.preco})
                </Button>
            </Card.Body>
        </Card>
        );
        return cards;
    }

    return render();
}


ListarProdutos.propTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired
}

export default ListarProdutos;