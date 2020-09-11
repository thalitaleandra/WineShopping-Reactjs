import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { Container, TableContainer, Card, CardContainer, Repositories } from './styles';
import { Link } from 'react-router-dom';
import { variableDeclarator } from '@babel/types';
import { FiChevronRight, FiArrowDown, FiAward } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import { FaWineBottle, FaShopify } from 'react-icons/fa'
import vinhoImg from '../../assets/vinho.jpg'

interface Clients {
  id: string;
  nome: string;
  cpf: string;

}

interface Itens {
  produto: string,
  variedade: string,
  pais: string,
  categoria: string,
  safra: number,
  preco: number
}

interface Shopping {
  codigo: string,
  data: string,
  cliente: string,
  itens: Array<Itens>,
  valorTotal: number
}


const Dashboard: React.FC = () => {
  const [clientes, setClientes] = useState<Clients[]>([]);
  const [shoppings, setShoppings] = useState<Shopping[]>([]);
  const [ficlients, setFiclients] = useState<any[]>([]);

  useEffect(() => {
    async function loadClientes(): Promise<void> {
      const response = await api.get('/598b16291100004705515ec5')
      const historic = await api.get('/598b16861100004905515ec7', {

      })
      const biggerValue = [...historic.data.sort(compare)];

      const biggerRepeat = [...response.data];
      biggerRepeat.forEach((client: any) => {
        const count = getCount(client.cpf, biggerValue)
        client.count = count;

      })
      console.log(biggerRepeat, 'teste')


      setClientes(response.data);
      setShoppings(biggerValue);
      setFiclients([...biggerRepeat.sort(compareItens)]);
      //console.log(getClientName(biggerRepeat[0].cliente), 'primeiro biggerValue')
    }

    loadClientes();

  }, []);

  function compare(a: Shopping, b: Shopping) {
    if (b.valorTotal < a.valorTotal) {
      return -1;
    }
    if (b.valorTotal > a.valorTotal) {
      return 1;
    }
    return 0;
  }

  function compareItens(a: any, b: any) {
    if (b.count < a.count) {
      return -1;
    }
    if (b.count > a.count) {
      return 1;
    }
    return 0;
  }


  function removeCpfMask(cpf: string) {
    return cpf.replace(/[^\d]+/g, '');
  }

  function fixCpf(cpf: string) {
    if (cpf.length > 11) {
      return cpf.substring(1);
    }
    return cpf;
  }
  function getClientName(cpf: string) {
    const clientName = clientes.filter(client => fixCpf(removeCpfMask(client.cpf)) === fixCpf(removeCpfMask(cpf)))
    // console.log(clientes, 'cliente')
    return clientName[0].nome;
  }

  function getCount(cpf: string, shoppingsData: Shopping[]) {
    let count = 0;

    shoppingsData.forEach(shopping => {
      if (fixCpf(removeCpfMask(shopping.cliente)) === fixCpf(removeCpfMask(cpf))) {
        count = count + shopping.itens.length
      }
    })
    console.log(count)
    return count;
  }


  return (
    <>

      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <strong >Pódio dos Clientes mais fieis:</strong>
            </header>
            {ficlients.filter((valor, index) => index < 3).map((valor, index) => {
              return (
                <p > <FiAward /><strong>{index + 1}</strong> º : {valor.nome} </p>
              )
            })}

          </Card>
          <Card>
            <header>
              <strong >Pódio da quantidades de itens:</strong>
            </header>
            {ficlients.filter((valor, index) => index < 3).map((valor, index) => {
              return (
                <p ><FaWineBottle /> {valor.count}: comprados</p>
              )
            })}
          </Card>
          <Card>
            <header>
              <strong>Cliente maior compra em 2016:</strong>
            </header>
            {shoppings.filter((valor, index) => index < 1).map((valor, index) => {
              return (
                <h1><FaShopify /> {getClientName(valor.cliente)}</h1>
              )
            })}
          </Card>
        </CardContainer>
        <h3 >Clientes por maior valor de Compra</h3>
        <Repositories>

          {shoppings.map((valor, index) => (
            <Link key={index} to={`/repositories/${valor.data}`}>
              <img
                src={vinhoImg}
                alt="IMG"
              />
              <div>
                <strong>Cliente: {getClientName(valor.cliente)}</strong>
                <p>Valor Total de Compras: {valor.valorTotal}$</p>
                <p>{valor.data}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </Repositories>
      </Container>

    </>
  );
};

export default Dashboard;
