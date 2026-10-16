import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilosCadastro from './Telas_CSS/Cadastro_estilo';

const Cadastro = () => {

  const navegacao = useNavigation();

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const [tipoAtuacao, setTipoAtuacao] = useState('');
  const [possuiFormacao, setPossuiFormacao] = useState(false);

  const [areaFormacao, setAreaFormacao] = useState('');
  const [registroProfissional, setRegistroProfissional] = useState('');
  const [instituicao, setInstituicao] = useState('');

  const cadastrar = () => {


navigation.navigate('Cadastro');
  };

  const OpcaoTipo = ({ titulo }) => (

    <TouchableOpacity
      style={[
        estilosCadastro.opcao,
        tipoAtuacao === titulo &&
          estilosCadastro.opcaoSelecionada,
      ]}
      onPress={() => setTipoAtuacao(titulo)}
    >

      <Ionicons
        name={
          tipoAtuacao === titulo
            ? 'radio-button-on'
            : 'radio-button-off'
        }
        size={20}
        color="#0A7AFF"
      />

      <Text style={estilosCadastro.textoOpcao}>
        {titulo}
      </Text>

    </TouchableOpacity>

  );

  return (

    <KeyboardAvoidingView
      style={estilosCadastro.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView
        contentContainerStyle={estilosCadastro.scroll}
        showsVerticalScrollIndicator={false}
      >

        <LinearGradient
          colors={['#1E3462', '#19253D']}
          style={estilosCadastro.header}
        >

          <TouchableOpacity
            style={estilosCadastro.botaoVoltar}
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
            size={60}
            color="#FFFFFF"
          />

          <Text style={estilosCadastro.titulo}>
            Criar Conta
          </Text>

          <Text style={estilosCadastro.subtitulo}>
            Cadastro do Responsável
          </Text>

        </LinearGradient>

        <View style={estilosCadastro.card}>

          <Text style={estilosCadastro.secao}>
            Dados Pessoais
          </Text>

          <Text style={estilosCadastro.label}>
            Nome Completo
          </Text>

          <TextInput
            style={estilosCadastro.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome completo"
          />

          <Text style={estilosCadastro.label}>
            Data de Nascimento
          </Text>

          <TextInput
            style={estilosCadastro.input}
            value={dataNascimento}
            onChangeText={setDataNascimento}
            placeholder="dd/mm/aaaa"
          />

          <Text style={estilosCadastro.label}>
            Telefone
          </Text>

          <TextInput
            style={estilosCadastro.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(21) 99999-9999"
            keyboardType="phone-pad"
          />

          <Text style={estilosCadastro.label}>
            E-mail
          </Text>

          <TextInput
            style={estilosCadastro.input}
            value={email}
            onChangeText={setEmail}
            placeholder="email@email.com"
            keyboardType="email-address"
          />

          <Text style={estilosCadastro.label}>
            Senha
          </Text>

          <View style={estilosCadastro.inputSenha}>

            <TextInput
              style={estilosCadastro.campoSenha}
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
            />

            <TouchableOpacity
              onPress={() =>
                setMostrarSenha(!mostrarSenha)
              }
            >

              <Ionicons
                name={
                  mostrarSenha
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={22}
                color="#6B7280"
              />

            </TouchableOpacity>

          </View>

          <Text style={estilosCadastro.label}>
            Confirmar Senha
          </Text>

          <View style={estilosCadastro.inputSenha}>

            <TextInput
              style={estilosCadastro.campoSenha}
              secureTextEntry={!mostrarConfirmacao}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirme sua senha"
            />

            <TouchableOpacity
              onPress={() =>
                setMostrarConfirmacao(
                  !mostrarConfirmacao
                )
              }
            >

              <Ionicons
                name={
                  mostrarConfirmacao
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={22}
                color="#6B7280"
              />

            </TouchableOpacity>

          </View>

          <Text style={estilosCadastro.secao}>
            Tipo de Atuação
          </Text>

          <OpcaoTipo titulo="Familiar" />
          <OpcaoTipo titulo="Cuidador" />
          <OpcaoTipo titulo="Enfermeiro" />
          <OpcaoTipo titulo="Outro" />

          <Text style={estilosCadastro.secao}>
            Formação
          </Text>

          <View style={estilosCadastro.linhaEscolha}>

            <TouchableOpacity
              style={estilosCadastro.botaoEscolha}
              onPress={() =>
                setPossuiFormacao(true)
              }
            >

              <Ionicons
                name={
                  possuiFormacao
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
                color="#22C55E"
              />

              <Text style={estilosCadastro.textoOpcao}>
                Sim
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={estilosCadastro.botaoEscolha}
              onPress={() =>
                setPossuiFormacao(false)
              }
            >

              <Ionicons
                name={
                  !possuiFormacao
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
                color="#EF4444"
              />

              <Text style={estilosCadastro.textoOpcao}>
                Não
              </Text>

            </TouchableOpacity>

          </View>
                    {possuiFormacao && (
            <>

              <Text style={estilosCadastro.label}>
                Área de Formação
              </Text>

              <TextInput
                style={estilosCadastro.input}
                placeholder="Ex.: Enfermagem"
                value={areaFormacao}
                onChangeText={setAreaFormacao}
              />

              <Text style={estilosCadastro.label}>
                Instituição de Ensino
              </Text>

              <TextInput
                style={estilosCadastro.input}
                placeholder="Nome da instituição"
                value={instituicao}
                onChangeText={setInstituicao}
              />

              <Text style={estilosCadastro.label}>
                Registro Profissional
              </Text>

              <TextInput
                style={estilosCadastro.input}
                placeholder="COREN / CRM / CREFITO..."
                value={registroProfissional}
                onChangeText={setRegistroProfissional}
              />

            </>
          )}

          <Text style={estilosCadastro.secao}>
            Informações da Conta
          </Text>

          <View style={estilosCadastro.cardInformacao}>

            <Ionicons
              name="information-circle"
              size={22}
              color="#0A7AFF"
            />

            <Text style={estilosCadastro.textoInformacao}>
              O cadastro será utilizado para acompanhar um ou mais
              dependentes cadastrados no sistema VitalCare.
            </Text>

          </View>

          <TouchableOpacity
            style={estilosCadastro.botaoCadastrar}
            onPress={cadastrar}
          >

            <Ionicons
              name="person-add"
              size={22}
              color="#FFFFFF"
            />

            <Text style={estilosCadastro.textoBotao}>
              Criar Conta
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={estilosCadastro.botaoLogin}
            onPress={() => navegacao.goBack()}
          >

            <Text style={estilosCadastro.textoLogin}>
              Já possui uma conta? Entrar
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );

};

export default Cadastro;