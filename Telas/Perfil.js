import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilosPerfil from './Telas_CSS/Perfil_estilo';

// ATENÇÃO: essa URL é a de um túnel Cloudflare TEMPORÁRIO.
// Toda vez que o backend reiniciar / o túnel cair, ela muda,
// e é preciso colar a URL nova aqui (e em AdicionarPaciente.js,
// Home.js, Dados_Saude.js e Dados_manuais.js).
const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com';

// TODO: substituir pelo id do responsável logado quando existir sessão real
const ID_RESPONSAVEL_LOGADO = 1;

const calcularIdade = (dataNascimento) => {
  if (!dataNascimento) return null;

  const nascimento = new Date(dataNascimento);
  if (isNaN(nascimento.getTime())) return null;

  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const aindaNaoFezAniversario =
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate());

  if (aindaNaoFezAniversario) idade -= 1;

  return idade;
};

// Linha de dado pessoal com ícone dentro de um círculo colorido
const LinhaInfo = ({ icone: Icone, nomeIcone, corIcone, corFundo, label, valor, semSeparador }) => (
  <View>
    <View style={estilosPerfil.linha}>
      <View style={[estilosPerfil.iconeLinha, { backgroundColor: corFundo }]}>
        <Icone name={nomeIcone} size={18} color={corIcone} />
      </View>

      <View style={estilosPerfil.info}>
        <Text style={estilosPerfil.label}>{label}</Text>
        <Text style={estilosPerfil.valor}>{valor}</Text>
      </View>
    </View>

    {!semSeparador && <View style={estilosPerfil.separadorLinha} />}
  </View>
);

const Perfil = () => {
  const navigation = useNavigation();

  const [cuidador, setCuidador] = useState({
    nome: 'Brenda',
    tipo: 'Cuidadora',
    email: 'brenda@email.com',
    telefone: '(21) 99999-9999',
    nascimento: '05/01/2010',
  });

  const abrirEdicaoDePerfil = () => {
    navigation.navigate('EditarPerfil', {
      cuidadorAtual: cuidador,
      aoSalvar: (dadosAtualizados) => setCuidador(dadosAtualizados),
    });
  };

  const [pacientes, setPacientes] = useState([]);
  const [carregandoPacientes, setCarregandoPacientes] = useState(true);
  const [erroPacientes, setErroPacientes] = useState(null);

  const buscarPacientes = useCallback(async () => {
    setCarregandoPacientes(true);
    setErroPacientes(null);

    try {
      const resposta = await fetch(
        `https://${IP_SERVIDOR}/dependentes?id_responsavel=${ID_RESPONSAVEL_LOGADO}`
      );

      if (!resposta.ok) {
        throw new Error(`HTTP ${resposta.status}`);
      }

      const dados = await resposta.json();
      setPacientes(Array.isArray(dados) ? dados : []);
    } catch (erro) {
      console.log('Erro ao buscar pacientes:', erro.message);
      setErroPacientes('Não foi possível carregar seus pacientes.');
    } finally {
      setCarregandoPacientes(false);
    }
  }, []);

  // Recarrega a lista sempre que a tela ganha foco
  // (ex: ao voltar da tela "Adicionar Paciente")
  useFocusEffect(
    useCallback(() => {
      buscarPacientes();
    }, [buscarPacientes])
  );

  return (
    <View style={estilosPerfil.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >

        <LinearGradient
          colors={['#1E3462', '#19253D']}
          style={estilosPerfil.headerGradiente}
        >
          <View style={estilosPerfil.header}>
            <TouchableOpacity
              style={estilosPerfil.botaoIconeHeader}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={estilosPerfil.titulo}>Meu Perfil</Text>

            <TouchableOpacity style={estilosPerfil.botaoIconeHeader} onPress={abrirEdicaoDePerfil}>
              <Ionicons name="create-outline" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={estilosPerfil.topoPerfil}>
          <View style={estilosPerfil.avatarAnel}>
            <View style={estilosPerfil.avatar}>
              <Ionicons name="person" size={44} color="#FFFFFF" />
            </View>
          </View>

          <Text style={estilosPerfil.nome}>{cuidador.nome}</Text>
          <Text style={estilosPerfil.tipo}>{cuidador.tipo}</Text>

          <View style={estilosPerfil.cardResumo}>
            <MaterialCommunityIcons name="heart-pulse" size={22} color="#00BFA5" />
            <Text style={estilosPerfil.textoResumo}>
              Monitorando {pacientes.length}{' '}
              {pacientes.length === 1 ? 'paciente' : 'pacientes'}
            </Text>
          </View>
        </View>

        {/* Dados Pessoais */}
        <View style={estilosPerfil.card}>
          <Text style={estilosPerfil.tituloCard}>Dados Pessoais</Text>

          <LinhaInfo
            icone={Ionicons}
            nomeIcone="person-outline"
            corIcone="#1E3462"
            corFundo="#EEF2FF"
            label="Nome"
            valor={cuidador.nome}
          />

          <LinhaInfo
            icone={Ionicons}
            nomeIcone="mail-outline"
            corIcone="#0A7AFF"
            corFundo="#EFF6FF"
            label="Email"
            valor={cuidador.email}
          />

          <LinhaInfo
            icone={Ionicons}
            nomeIcone="call-outline"
            corIcone="#22C55E"
            corFundo="#F0FDF4"
            label="Telefone"
            valor={cuidador.telefone}
          />

          <LinhaInfo
            icone={Ionicons}
            nomeIcone="calendar-outline"
            corIcone="#F59E0B"
            corFundo="#FFFBEB"
            label="Data de nascimento"
            valor={cuidador.nascimento}
            semSeparador
          />

          <TouchableOpacity style={estilosPerfil.botaoEditar} onPress={abrirEdicaoDePerfil}>
            <Ionicons name="create-outline" size={18} color="#FFFFFF" />
            <Text style={estilosPerfil.textoBotao}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Pacientes Monitorados */}
        <View style={estilosPerfil.card}>
          <View style={estilosPerfil.cabecalhoLista}>
            <Text style={estilosPerfil.tituloCard}>Pacientes Monitorados</Text>
            <Text style={estilosPerfil.quantidade}>{pacientes.length}</Text>
          </View>

          {carregandoPacientes && (
            <View style={estilosPerfil.estadoLista}>
              <ActivityIndicator color="#1E3462" />
            </View>
          )}

          {!carregandoPacientes && erroPacientes && (
            <View style={estilosPerfil.estadoLista}>
              <Ionicons name="cloud-offline-outline" size={30} color="#EF4444" />
              <Text style={estilosPerfil.textoErro}>{erroPacientes}</Text>

              <TouchableOpacity
                style={estilosPerfil.botaoTentarNovamente}
                onPress={buscarPacientes}
              >
                <Text style={estilosPerfil.textoTentarNovamente}>Tentar novamente</Text>
              </TouchableOpacity>
            </View>
          )}

          {!carregandoPacientes && !erroPacientes && pacientes.length === 0 && (
            <View style={estilosPerfil.estadoLista}>
              <Ionicons name="people-outline" size={36} color="#9CA3AF" />
              <Text style={estilosPerfil.textoEstadoLista}>
                Você ainda não tem pacientes cadastrados.
              </Text>
            </View>
          )}

          {!carregandoPacientes && !erroPacientes && pacientes.map((paciente) => {
            const idade = calcularIdade(paciente.data_nascimento);

            return (
              <View key={paciente.id_dependente} style={estilosPerfil.cardPaciente}>

                <View style={estilosPerfil.linhaPaciente}>
                  <View style={estilosPerfil.avatarPaciente}>
                    <Ionicons name="person" size={28} color="#FFFFFF" />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={estilosPerfil.nomePaciente}>{paciente.nome}</Text>
                    <Text style={estilosPerfil.idadePaciente}>
                      {idade !== null ? `${idade} anos` : 'Idade não informada'}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={estilosPerfil.botaoPaciente}
                  onPress={() =>
                    navigation.navigate('Saúde', {
                      screen: 'SaudePrincipal',
                      params: { id_dependente: paciente.id_dependente },
                    })
                  }
                >
                  <Text style={estilosPerfil.textoBotaoPaciente}>Visualizar Dados</Text>
                  <Ionicons name="chevron-forward" size={16} color="#00A693" />
                </TouchableOpacity>

              </View>
            );
          })}

          <TouchableOpacity
            style={estilosPerfil.botaoAdicionar}
            onPress={() => navigation.navigate('AdicionarPaciente')}
          >
            <Ionicons name="add-circle-outline" size={20} color="#00A693" />
            <Text style={estilosPerfil.textoBotaoAdicionar}>Adicionar Paciente</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={estilosPerfil.botaoSair}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={estilosPerfil.textoBotaoSair}>Sair da Conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Perfil;