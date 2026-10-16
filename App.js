import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Home from './Frontend/Telas/Home';
import DadosManuais from './Frontend/Telas/Dados_manuais';
import DadosSaude from './Frontend/Telas/Dados_Saude';
import Historico from './Frontend/Telas/Historico';
import Login from './Frontend/Telas/Login';
import Cadastro from './Frontend/Telas/Cadastro';
import Perfil from './Frontend/Telas/Perfil';
import Alertas from './Frontend/Telas/Alertas';
import AdicionarPaciente from './Frontend/Telas/Telas_CSS/AdicionarPaciente';
import EditarPerfil from './Frontend/Telas/EditarPerfil';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PilhaAutenticacao() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

function PilhaHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePrincipal" component={Home} />
      <Stack.Screen name="EntradaManualDeDados" component={DadosManuais} />
    </Stack.Navigator>
  );
}

function PilhaSaude() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SaudePrincipal" component={DadosSaude} />
    </Stack.Navigator>
  );
}

function PilhaHistorico() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoricoPrincipal" component={Historico} />
    </Stack.Navigator>
  );
}

function PilhaPerfil() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="PerfilPrincipal"
        component={Perfil}
      />

      <Stack.Screen
        name="AdicionarPaciente"
        component={AdicionarPaciente}
      />

      <Stack.Screen
        name="EditarPerfil"
        component={EditarPerfil}
      />

    </Stack.Navigator>
  );
}

function PilhaAlertas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AlertasPrincipal" component={Alertas} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#19253d',
          borderTopWidth: 0,
          height: 65,
        },
        tabBarActiveTintColor: '#00bfa5',
        tabBarInactiveTintColor: '#8E9AAF',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Saúde') iconName = focused ? 'heart' : 'heart-outline';
          if (route.name === 'Histórico') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';
          if (route.name === 'Alertas') iconName = focused ? 'notifications' : 'notifications-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={PilhaHome} />
      <Tab.Screen name="Saúde" component={PilhaSaude} />
      <Tab.Screen name="Histórico" component={PilhaHistorico} />
      <Tab.Screen name="Perfil" component={PilhaPerfil} />
      <Tab.Screen name="Alertas" component={PilhaAlertas} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Auth" component={PilhaAutenticacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}