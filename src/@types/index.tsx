import { string } from "prop-types";
import { stringLiteral } from "@babel/types";

export interface Clients {
  id: string,
  nome: string,
  cpf: string,

}

export interface Itens {
  produto: string,
  variedade: string,
  pais: string,
  categoria: string,
  safra: number,
  preco: number
}

export interface Shopping {
  codigo: string,
  data: string,
  cliente: string,
  itens: Array<Itens>,
  valorTotal: number
}
