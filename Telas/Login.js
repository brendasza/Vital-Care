import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import estilosLogin from './Telas_CSS/Login_estilo';

const Login = () => {

  const navegacao = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const fazerLogin = () => {

    // part onde vai entrar o bd 

    navigation.replace('Main');
  };

  return (

    <KeyboardAvoidingView
      style={estilosLogin.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <ScrollView
        contentContainerStyle={estilosLogin.scroll}
        showsVerticalScrollIndicator={false}
      >

        <LinearGradient
          colors={['#1E3462', '#19253D']}
          style={estilosLogin.header}
        >

          <View style={estilosLogin.logo}>

            <Ionicons
              name="heart-circle"
              size={70}
              color="#fff"
            />

          </View>

          <Text style={estilosLogin.titulo}>
            VitalCare
          </Text>

          <Text style={estilosLogin.subtitulo}>
            Monitoramento Remoto de Saúde
          </Text>

        </LinearGradient>

        <View style={estilosLogin.card}>

          <Text style={estilosLogin.boasVindas}>
            Bem-vindo!
          </Text>

          <Text style={estilosLogin.descricao}>
            Entre para acompanhar seus dependentes.
          </Text>

          <Text style={estilosLogin.label}>
            E-mail
          </Text>

          <View style={estilosLogin.inputContainer}>

            <Ionicons
              name="mail-outline"
              size={22}
              color="#6B7280"
            />

            <TextInput
              style={estilosLogin.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

          </View>

          <Text style={estilosLogin.label}>
            Senha
          </Text>

          <View style={estilosLogin.inputContainer}>

            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#6B7280"
            />

            <TextInput
              style={estilosLogin.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
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

          <TouchableOpacity>

            <Text style={estilosLogin.esqueceuSenha}>
              Esqueceu sua senha?
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={estilosLogin.botao}
            onPress={fazerLogin}
          >

            <Text style={estilosLogin.textoBotao}>
              Entrar
            </Text>

          </TouchableOpacity>

          <View style={estilosLogin.divisor}>

            <View style={estilosLogin.linha} />

            <Text style={estilosLogin.textoOu}>
              ou
            </Text>

            <View style={estilosLogin.linha} />

          </View>

          <TouchableOpacity
            style={estilosLogin.botaoCadastro}
            onPress={() =>
              navegacao.navigate('Cadastro')
            }
          >

            <Text style={estilosLogin.textoCadastro}>
              Criar uma conta
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>

  );

};

export default Login;