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
import { useNavigation, useRoute } from '@react-navigation/native';

import estilosEditarPerfil from './Telas_CSS/EditarPerfil_estilo';


const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com';

const ID_RESPONSAVEL_LOGADO = 1;

const opcoesTipo = [
  { valor: 'Cuidador(a)', label: 'Cuidador(a)' },
  { valor: 'Enfermeiro(a)', label: 'Enfermeiro(a)' },
  { valor: 'Familiar', label: 'Familiar' },
  { valor: 'Outro', label: 'Outro' },
];

const converterDataParaISO = (data) => {
  const partes = (data || '').trim().split('/');

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

const EditarPerfil = () => {

  const navegacao = useNavigation();
  const rota = useRoute();

  const cuidadorAtual = rota.params?.cuidadorAtual || {};
  const aoSalvar = rota.params?.aoSalvar;

  const [nome, setNome] = useState(cuidadorAtual.nome || '');
  const [email, setEmail] = useState(cuidadorAtual.email || '');
  const [telefone, setTelefone] = useState(cuidadorAtual.telefone || '');
  const [nascimento, setNascimento] = useState(cuidadorAtual.nascimento || '');
 ;
  const [tipo, setTipo] = useState(cuidadorAtual.tipo || null);

  const [enviando, setEnviando] = useState(false);

  const validarCampos = () => {

    if (!nome || nome.trim() === '') {
      Alert.alert('Campo obrigatório', 'Informe seu nome.');
      return null;
    }

    if (!email || !email.includes('@')) {
      Alert.alert('E-mail inválido', 'Informe um e-mail válido.');
      return null;
    }

    if (!tipo) {
      Alert.alert('Campo obrigatório', 'Selecione seu tipo de perfil.');
      return null;
    }

    const dataISO = nascimento ? converterDataParaISO(nascimento) : null;

    if (nascimento && !dataISO) {
      Alert.alert(
        'Data inválida',
        'Informe a data de nascimento no formato dd/mm/aaaa.'
      );
      return null;
    }

    return {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      nascimento: nascimento.trim(),
      data_nascimento: dataISO,
      tipo,
    };
  };

  const salvarPerfil = async () => {

    const dadosValidados = validarCampos();

    if (!dadosValidados) {
      return;
    }

    setEnviando(true);

    try {

      const resposta = await fetch(
        `https://${IP_SERVIDOR}/responsaveis/${ID_RESPONSAVEL_LOGADO}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: dadosValidados.nome,
            email: dadosValidados.email,
            telefone: dadosValidados.telefone,
            data_nascimento: dadosValidados.data_nascimento,
            tipo: dadosValidados.tipo,
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
          corpo?.erro || `Erro ao salvar perfil (status ${resposta.status}).`;
        throw new Error(mensagemErro);
      }

      if (aoSalvar) {
        aoSalvar(dadosValidados);
      }

      Alert.alert(
        'Perfil atualizado',
        'Seus dados foram salvos com sucesso.',
        [
          {
            text: 'OK',
            onPress: () => navegacao.goBack(),
          },
        ]
      );

    } catch (erro) {
      Alert.alert('Erro', erro.message);
    } finally {
      setEnviando(false);
    }
  };

  return (

    <KeyboardAvoidingView
      style={estilosEditarPerfil.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView
        contentContainerStyle={estilosEditarPerfil.scroll}
        showsVerticalScrollIndicator={false}
      >

        <LinearGradient
          colors={['#1E3462', '#19253D']}
          style={estilosEditarPerfil.header}
        >

          <TouchableOpacity
            style={estilosEditarPerfil.botaoVoltar}
            onPress={() => navegacao.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Ionicons name="person-circle-outline" size={48} color="#FFFFFF" />

          <Text style={estilosEditarPerfil.titulo}>Editar Perfil</Text>

          <Text style={estilosEditarPerfil.subtitulo}>
            Atualize seus dados pessoais
          </Text>

        </LinearGradient>

        <View style={estilosEditarPerfil.card}>

          <Text style={estilosEditarPerfil.secao}>Dados Pessoais</Text>

          <Text style={estilosEditarPerfil.label}>Nome Completo</Text>

          <TextInput
            style={estilosEditarPerfil.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />

          <Text style={estilosEditarPerfil.label}>E-mail</Text>

          <TextInput
            style={estilosEditarPerfil.input}
            value={email}
            onChangeText={setEmail}
            placeholder="seuemail@exemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={estilosEditarPerfil.label}>Telefone</Text>

          <TextInput
            style={estilosEditarPerfil.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(21) 99999-9999"
            keyboardType="phone-pad"
          />

          <Text style={estilosEditarPerfil.label}>Data de Nascimento</Text>

          <TextInput
            style={estilosEditarPerfil.input}
            value={nascimento}
            onChangeText={setNascimento}
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
          />


          <Text style={estilosEditarPerfil.label}>Qual o seu perfil?</Text>

          <View style={estilosEditarPerfil.chipsContainer}>
            {opcoesTipo.map((opcao) => {
              const selecionado = tipo === opcao.valor;

              return (
                <TouchableOpacity
                  key={opcao.valor}
                  style={[
                    estilosEditarPerfil.chip,
                    selecionado && estilosEditarPerfil.chipSelecionado,
                  ]}
                  onPress={() => setTipo(opcao.valor)}
                >
                  <Text
                    style={[
                      estilosEditarPerfil.chipTexto,
                      selecionado && estilosEditarPerfil.chipTextoSelecionado,
                    ]}
                  >
                    {opcao.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={[
              estilosEditarPerfil.botaoSalvar,
              enviando && estilosEditarPerfil.botaoSalvarDesabilitado,
            ]}
            onPress={salvarPerfil}
            disabled={enviando}
          >

            {enviando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />
                <Text style={estilosEditarPerfil.textoBotao}>Salvar Alterações</Text>
              </>
            )}

          </TouchableOpacity>

          <TouchableOpacity
            style={estilosEditarPerfil.botaoCancelar}
            onPress={() => navegacao.goBack()}
            disabled={enviando}
          >
            <Text style={estilosEditarPerfil.textoCancelar}>Cancelar</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );

};

export default EditarPerfil;