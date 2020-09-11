import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, HistoricInfo, TableContainer, Container } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/vinho.jpg'
import api from '../../services/api'
import { Clients, Itens, Shopping } from '../../@types'
interface RepositoryParams {

  data: string;
}


const Historic: React.FC = () => {
  const [historics, setHistoric] = useState<Shopping[]>([]);
  const [clients, setClients] = useState<Clients[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  // console.log(historics, 'historico')
  useEffect(() => {
    api.get(`/598b16861100004905515ec7`).then((response) => {
      const clientHistoric = response.data.filter((historic: Shopping) => historic.data === params.data)
      console.log(clientHistoric, 'dados')
      setHistoric(clientHistoric);

    })
    api.get(`/598b16291100004705515ec5`).then((response) => {
      setClients(response.data);
    })
  }, [params.data])
  return (
    <>
      <Header>

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
          </Link>
      </Header>
      <HistoricInfo>
        <header>
          <img src={logoImg} alt="IMG" />
          <div>
            <strong>Histórico de compras.</strong>
            <p>acesso aos itens comprados na data fornecida.</p>
          </div>
        </header>
      </HistoricInfo>


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
              {historics.map((valor, index) => (
                valor.itens.map((item, index) => (
                  <tr key={index}>
                    <td className="title">{item.produto}</td>
                    <td className="title">{item.categoria}</td>
                    <td className="title">{item.pais}</td>
                    <td className="title">{item.safra}</td>
                    <td className="title">{item.preco}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>

    </>

  )
}


export default Historic;
