import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilosAdicionarPaciente from './AdicionarPaciente_estilo';

const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com';

const ID_RESPONSAVEL_LOGADO = 1;

const opcoesVinculo = [
  { valor: 'parente', label: 'Parente' },
  { valor: 'enfermeiro', label: 'Enfermeiro(a)' },
  { valor: 'cuidador', label: 'Cuidador(a)' },
  { valor: 'proprio_paciente', label: 'O próprio paciente' },
];

const AdicionarPaciente = () => {

  const navegacao = useNavigation();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idRelogio, setIdRelogio] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoVinculo, setTipoVinculo] = useState(null);

  const [enviando, setEnviando] = useState(false);

  const converterDataParaISO = (data) => {
    const partes = data.trim().split('/');

    if (partes.length !== 3) {
      return null;
    }

    const [dia, mes, ano] = partes;

    if (
      dia.length !== 2 ||
      mes.length !== 2 ||
      ano.length !== 4 ||
      isNaN(Number(dia)) ||
      isNaN(Number(mes)) ||
      isNaN(Number(ano))
    ) {
      return null;
    }

    return `${ano}-${mes}-${dia}`;
  };

  const validarCampos = () => {

    if (!nome || nome.trim() === '') {
      Alert.alert(
        'Campo obrigatório',
        'Informe o nome do paciente.'
      );
      return null;
    }

    const dataISO = converterDataParaISO(dataNascimento);

    if (!dataISO) {
      Alert.alert(
        'Data inválida',
        'Informe a data de nascimento no formato dd/mm/aaaa.'
      );
      return null;
    }

    if (!tipoVinculo) {
      Alert.alert(
        'Campo obrigatório',
        'Selecione qual o seu vínculo com o paciente.'
      );
      return null;
    }

    if (idRelogio && isNaN(Number(idRelogio))) {
      Alert.alert(
        'ID do relógio inválido',
        'Informe apenas números no ID do relógio.'
      );
      return null;
    }

    return {
      nome: nome.trim(),
      data_nascimento: dataISO,
      telefone: telefone.trim(),
      endereco: endereco.trim(),
      id_relogio: idRelogio.trim() ? Number(idRelogio) : null,
      tipo_vinculo: tipoVinculo,
    };
  };

  const salvarPaciente = async () => {

    const dadosValidados = validarCampos();

    if (!dadosValidados) {
      return;
    }

    setEnviando(true);

    try {

      const resposta = await fetch(
        `https://${IP_SERVIDOR}/dependentes`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            ...dadosValidados,
            id_responsavel: ID_RESPONSAVEL_LOGADO,
          }),
        }
      );

      let corpo = null;

      try {
        corpo = await resposta.json();
      } catch (_) {
        corpo = null;
      }

      if (!resposta.ok) {
        const mensagemErro =
          corpo?.erro ||
          `Erro ao salvar paciente (status ${resposta.status}).`;

        throw new Error(mensagemErro);
      }

      Alert.alert(
        'Paciente adicionado',
        `${dadosValidados.nome} foi cadastrado(a) com sucesso.`,
        [
          {
            text: 'OK',
            onPress: () => navegacao.goBack(),
          },
        ]
      );

    } catch (erro) {

      Alert.alert(
        'Erro',
        erro.message
      );

    } finally {

      setEnviando(false);

    }
  };

  return (
    <KeyboardAvoidingView
      style={estilosAdicionarPaciente.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView
        contentContainerStyle={estilosAdicionarPaciente.scroll}
        showsVerticalScrollIndicator={false}
      >

        <LinearGradient
          colors={['#1E3462', '#19253D']}
          style={estilosAdicionarPaciente.header}
        >

          <TouchableOpacity
            style={estilosAdicionarPaciente.botaoVoltar}
            onPress={() => navegacao.goBack()}
          >

            <Ionicons
              name="arrow-back"
              size={24}
              color="#FFFFFF"
            />

          </TouchableOpacity>

          <Ionicons
            name="person-add"
            size={50}
            color="#FFFFFF"
          />

          <Text style={estilosAdicionarPaciente.titulo}>
            Adicionar Paciente
          </Text>

          <Text style={estilosAdicionarPaciente.subtitulo}>
            Cadastre um novo dependente
          </Text>

        </LinearGradient>

        <View style={estilosAdicionarPaciente.card}>

          <Text style={estilosAdicionarPaciente.secao}>
            Dados do Paciente
          </Text>

          <Text style={estilosAdicionarPaciente.label}>
            Nome Completo
          </Text>

          <TextInput
            style={estilosAdicionarPaciente.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome do paciente"
          />

          <Text style={estilosAdicionarPaciente.label}>
            Data de Nascimento
          </Text>

          <TextInput
            style={estilosAdicionarPaciente.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
          />

          <Text style={estilosAdicionarPaciente.label}>
            Telefone
          </Text>

          <TextInput
            style={estilosAdicionarPaciente.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(21) 99999-9999"
            keyboardType="phone-pad"
          />

          <Text style={estilosAdicionarPaciente.label}>
            ID do Relógio
          </Text>

          <TextInput
            style={estilosAdicionarPaciente.input}
            value={idRelogio}
            onChangeText={setIdRelogio}
            placeholder="Ex: 12 (deixe em branco se ainda não tiver)"
            keyboardType="numeric"
          />

          <Text style={estilosAdicionarPaciente.label}>
            Endereço
          </Text>

          <TextInput
            style={estilosAdicionarPaciente.input}
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Rua, número, bairro, cidade"
          />

          <Text style={estilosAdicionarPaciente.label}>
            Qual o seu vínculo com o paciente?
          </Text>

          <View style={estilosAdicionarPaciente.chipsContainer}>
            {opcoesVinculo.map((opcao) => {
              const selecionado = tipoVinculo === opcao.valor;

              return (
                <TouchableOpacity
                  key={opcao.valor}
                  style={[
                    estilosAdicionarPaciente.chip,
                    selecionado && estilosAdicionarPaciente.chipSelecionado,
                  ]}
                  onPress={() => setTipoVinculo(opcao.valor)}
                >
                  <Text
                    style={[
                      estilosAdicionarPaciente.chipTexto,
                      selecionado && estilosAdicionarPaciente.chipTextoSelecionado,
                    ]}
                  >
                    {opcao.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={estilosAdicionarPaciente.cardInformacao}>

            <Ionicons
              name="information-circle"
              size={22}
              color="#0A7AFF"
            />

            <Text style={estilosAdicionarPaciente.textoInformacao}>
              O paciente cadastrado ficará vinculado à sua conta e
              poderá ter dados de saúde, relógio inteligente e
              condições médicas associados a ele.
            </Text>

          </View>

          <TouchableOpacity
            style={[
              estilosAdicionarPaciente.botaoSalvar,
              enviando &&
                estilosAdicionarPaciente.botaoSalvarDesabilitado,
            ]}
            onPress={salvarPaciente}
            disabled={enviando}
          >

            {enviando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#FFFFFF"
                />

                <Text style={estilosAdicionarPaciente.textoBotao}>
                  Salvar Paciente
                </Text>
              </>
            )}

          </TouchableOpacity>

          <TouchableOpacity
            style={estilosAdicionarPaciente.botaoCancelar}
            onPress={() => navegacao.goBack()}
            disabled={enviando}
          >

            <Text style={estilosAdicionarPaciente.textoCancelar}>
              Cancelar
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default AdicionarPaciente;