import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCadastrarBeneficiario } from "../../../hooks/useTopMed";
import { IBeneficiarioForm } from "../../../services/top-med";

const schema = yup.object().shape({
  IdentificacaoPessoa: yup.string().required("Campo obrigatório"),
  CodigoCarteira: yup.string().required("Campo obrigatório"),
  Nome: yup.string().required("Campo obrigatório"),
  CPFCNPJ: yup.string().required("Campo obrigatório"),
  DataNascimento: yup.string().required("Campo obrigatório"),
  Sexo: yup.string().required("Campo obrigatório"),
  TipoPessoa: yup.string().required("Campo obrigatório"),
  StatusBeneficiario: yup.string().required("Campo obrigatório"),
  CodigoEmpresa: yup.string().required("Campo obrigatório"),
  CodigoSubempresa: yup.string().required("Campo obrigatório"),
  Produtos: yup.string().required("Campo obrigatório"),
  SituacaoProduto: yup.string().required("Campo obrigatório"),
  Email: yup.string().required("Campo obrigatório"),
  LogradouroResidencial: yup.string().required("Campo obrigatório"),
  CEPResidencial: yup.string().required("Campo obrigatório"),
  BairroResidencial: yup.string().required("Campo obrigatório"),
  MunicipioResidencial: yup.string().required("Campo obrigatório"),
  EstadoResidencial: yup.string().required("Campo obrigatório"),
  PaisResidencial: yup.string().required("Campo obrigatório"),
  TelefoneComercial: yup.string().required("Campo obrigatório"),
  TelefoneCelular: yup.string().required("Campo obrigatório"),
  TelefoneResidencial: yup.string().required("Campo obrigatório"),
  BeneficiarioTitular: yup.string().required("Campo obrigatório"),
});

const BeneficiarioForm = () => {
  const { cadastrar, status } = useCadastrarBeneficiario();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IBeneficiarioForm) => {
    cadastrar(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Beneficiário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Identificação Pessoa
          </label>
          <input
            type="text"
            {...register("IdentificacaoPessoa")}
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Código Carteira
          </label>
          <input
            type="text"
            {...register("CodigoCarteira")}
            className="w-full border p-2"
          />
          {errors.CodigoCarteira && (
            <p className="text-red-600">{errors.CodigoCarteira.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Nome</label>
          <input
            type="text"
            {...register("Nome")}
            className="w-full border p-2"
          />
          {errors.Nome && <p className="text-red-600">{errors.Nome.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">CPF/CNPJ</label>
          <input
            type="text"
            {...register("CPFCNPJ")}
            className="w-full border p-2"
          />
          {errors.CPFCNPJ && (
            <p className="text-red-600">{errors.CPFCNPJ.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Data de Nascimento
          </label>
          <input
            type="text"
            {...register("DataNascimento")}
            className="w-full border p-2"
          />
          {errors.DataNascimento && (
            <p className="text-red-600">{errors.DataNascimento.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Sexo</label>
          <input
            type="text"
            {...register("Sexo")}
            className="w-full border p-2"
          />
          {errors.Sexo && <p className="text-red-600">{errors.Sexo.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Tipo de Pessoa
          </label>
          <input
            type="text"
            {...register("TipoPessoa")}
            className="w-full border p-2"
          />
          {errors.TipoPessoa && (
            <p className="text-red-600">{errors.TipoPessoa.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Status do Beneficiário
          </label>
          <input
            type="text"
            {...register("StatusBeneficiario")}
            className="w-full border p-2"
          />
          {errors.StatusBeneficiario && (
            <p className="text-red-600">{errors.StatusBeneficiario.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Código da Empresa
          </label>
          <input
            type="text"
            {...register("CodigoEmpresa")}
            className="w-full border p-2"
          />
          {errors.CodigoEmpresa && (
            <p className="text-red-600">{errors.CodigoEmpresa.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Código da Subempresa
          </label>
          <input
            type="text"
            {...register("CodigoSubempresa")}
            className="w-full border p-2"
          />
          {errors.CodigoSubempresa && (
            <p className="text-red-600">{errors.CodigoSubempresa.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Produtos</label>
          <input
            type="text"
            {...register("Produtos")}
            className="w-full border p-2"
          />
          {errors.Produtos && (
            <p className="text-red-600">{errors.Produtos.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Situação do Produto
          </label>
          <input
            type="text"
            {...register("SituacaoProduto")}
            className="w-full border p-2"
          />
          {errors.SituacaoProduto && (
            <p className="text-red-600">{errors.SituacaoProduto.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">E-mail</label>
          <input
            type="text"
            {...register("Email")}
            className="w-full border p-2"
          />
          {errors.Email && (
            <p className="text-red-600">{errors.Email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Logradouro Residencial
          </label>
          <input
            type="text"
            {...register("LogradouroResidencial")}
            className="w-full border p-2"
          />
          {errors.LogradouroResidencial && (
            <p className="text-red-600">
              {errors.LogradouroResidencial.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            CEP Residencial
          </label>
          <input
            type="text"
            {...register("CEPResidencial")}
            className="w-full border p-2"
          />
          {errors.CEPResidencial && (
            <p className="text-red-600">{errors.CEPResidencial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Bairro Residencial
          </label>
          <input
            type="text"
            {...register("BairroResidencial")}
            className="w-full border p-2"
          />
          {errors.BairroResidencial && (
            <p className="text-red-600">{errors.BairroResidencial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Município Residencial
          </label>
          <input
            type="text"
            {...register("MunicipioResidencial")}
            className="w-full border p-2"
          />
          {errors.MunicipioResidencial && (
            <p className="text-red-600">
              {errors.MunicipioResidencial.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Estado Residencial
          </label>
          <input
            type="text"
            {...register("EstadoResidencial")}
            className="w-full border p-2"
          />
          {errors.EstadoResidencial && (
            <p className="text-red-600">{errors.EstadoResidencial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            País Residencial
          </label>
          <input
            type="text"
            {...register("PaisResidencial")}
            className="w-full border p-2"
          />
          {errors.PaisResidencial && (
            <p className="text-red-600">{errors.PaisResidencial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Telefone Comercial
          </label>
          <input
            type="text"
            {...register("TelefoneComercial")}
            className="w-full border p-2"
          />
          {errors.TelefoneComercial && (
            <p className="text-red-600">{errors.TelefoneComercial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Telefone Celular
          </label>
          <input
            type="text"
            {...register("TelefoneCelular")}
            className="w-full border p-2"
          />
          {errors.TelefoneCelular && (
            <p className="text-red-600">{errors.TelefoneCelular.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Telefone Residencial
          </label>
          <input
            type="text"
            {...register("TelefoneResidencial")}
            className="w-full border p-2"
          />
          {errors.TelefoneResidencial && (
            <p className="text-red-600">{errors.TelefoneResidencial.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">
            Beneficiário Titular
          </label>
          <input
            type="text"
            {...register("BeneficiarioTitular")}
            className="w-full border p-2"
          />
          {errors.BeneficiarioTitular && (
            <p className="text-red-600">{errors.BeneficiarioTitular.message}</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default BeneficiarioForm;
