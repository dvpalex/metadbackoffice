import { useMutation } from "react-query";
import { IBeneficiarioForm, ILogin, TopMed } from "../services/top-med";
import { Http } from "../repositories/http";

export const useLogarApp = () => {
  const { mutate, status } = useMutation((data: ILogin) =>
    new TopMed(new Http()).login(data)
  );

  return { logar: mutate, status };
};

export const useCadastrarBeneficiario = () => {
  const { mutate, status } = useMutation((data: IBeneficiarioForm) =>
    new TopMed(new Http()).cadastrarBeneficiario(data)
  );

  return { cadastrar: mutate, status };
};
