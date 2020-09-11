import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, TableContainer, Container } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/vinho.jpg'
import api from '../../services/api'

interface RepositoryParams {
  cpf: string;
  data: string;
}

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

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Shopping[]>([]);
  const [clients, setClients] = useState<Clients[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  console.log(repository, 'repository')

  useEffect(() => {
    api.get(`/598b16861100004905515ec7`).then((response) => {
      const clientHistoric = response.data.filter((historic: Shopping) => historic.data === params.data)
      console.log(clientHistoric, 'dados')
      setRepository(clientHistoric);

    })
    api.get(`/598b16291100004705515ec5`).then((response) => {
      setClients(response.data);
    })
  }, [params.cpf])

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
    const clientName = clients.filter(client => fixCpf(removeCpfMask(client.cpf)) === fixCpf(removeCpfMask(cpf)))
    // console.log(clientes, 'cliente')
    return clientName[0].nome;
  }
  return (
    <>
      <Header>

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
          </Link>
      </Header>

      <Container>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Pais</th>
                <th>Safra</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              {repository.map((valor, index) => (
                <tr key={index}>
                  <td className="title">{valor.itens.map(valor => valor.produto)}</td>
                  <td className="title">{valor.itens.map(valor => valor.categoria)}</td>
                  <td className="title">{valor.itens.map(valor => valor.pais)}|</td>
                  <td className="title">{valor.itens.map(valor => valor.safra)}</td>
                  <td className="title">{valor.itens.map(valor => valor.preco)}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>

    </>

  )
}


export default Repository;
