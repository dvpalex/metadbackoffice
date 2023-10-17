import { IHttp } from "../../interface/http";

export type ILogin = {
  username: string;
  password: string;
};

export type IRLogin = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export interface IBeneficiarioForm {
  IdentificacaoPessoa: string;
  CodigoCarteira: string;
  Nome: string;
  CPFCNPJ: string;
  DataNascimento: string;
  Sexo: string;
  TipoPessoa: string;
  StatusBeneficiario: string;
  CodigoEmpresa: string;
  CodigoSubempresa: string;
  ListaProdutos?: Produto[];
  Email: string;
  LogradouroResidencial: string;
  CEPResidencial: string;
  BairroResidencial: string;
  MunicipioResidencial: string;
  EstadoResidencial: string;
  PaisResidencial: string;
  TelefoneComercial: string;
  TelefoneCelular: string;
  TelefoneResidencial: string;
  BeneficiarioTitular: string;
}

export interface Produto {
  CodigoProduto: string;
  Situacao: string;
}

export class TopMed {
  constructor(private http: IHttp) {}

  async login(data: ILogin) {
    return this.http.post<ILogin, IRLogin>("V1/api/token", data);
  }

  async cadastrarBeneficiario(data: IBeneficiarioForm) {
    return this.http.post("v2/api/CadastroPessoa/", data);
  }
}
