import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import CartaoReutilizavel from '../componentes/cartoes_reutilizaveis';
import { useNavigation } from '@react-navigation/native';
import estilosHome from './Telas_CSS/Home_estilo';

const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com';

const Home = () => {
  const navegacao = useNavigation();

  const listaPacientes = [
    {
      id: 1,
      nome: 'José',
      idade: 78,
      dispositivo: 'TicWatch Pro 5',
      status: 'Saudável',
      corStatus: '#22C55E',
      inicial: 'J',
      alerta: 'Frequência cardíaca normalizada',
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 72,
      dispositivo: 'TicWatch Pro 5',
      status: 'Alerta',
      corStatus: '#F59E0B',
      inicial: 'M',
      alerta: 'Atenção: nível de estresse elevado',
    },
  ];

  const [indicePaciente, setIndicePaciente] = useState(0);
  const [menuPacientesAberto, setMenuPacientesAberto] = useState(false);

  const pacienteAtual = listaPacientes[indicePaciente];

  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('--');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState('--');
  const [nivelEstresse, setNivelEstresse] = useState('--');
  const [passosHoje, setPassosHoje] = useState('--');
  const [pressaoArterial, setpressaoArterial] = useState('--');

  useEffect(() => {
    buscarDados();

    const intervalo = setInterval(() => {
      buscarDados();
    }, 5000);

    return () => clearInterval(intervalo);
  }, [indicePaciente]);

  const buscarDados = async () => {
    try {
      const resposta = await fetch(`https://${IP_SERVIDOR}/dados-saude` );

      if (!resposta.ok) {
        throw new Error(`HTTP ${resposta.status}`);
      }

      const dados = await resposta.json();

      let fc = '--';
      let sat = '--';
      let est = '--';
      let passos = '--';
      let PreA = '--';

      dados.forEach((item) => {
        if (item.idTipoMedicao === 1) fc = item.valor;
        if (item.idTipoMedicao === 2) sat = item.valor;
        if (item.idTipoMedicao === 3) est = item.valor;
        if (item.idTipoMedicao === 4) passos = item.valor;
        if (item.idTipoMedicao === 5) PreA = item.valor;
      });

      setFrequenciaCardiaca(fc);
      setSaturacaoOxigenio(sat);
      setNivelEstresse(est);
      setPassosHoje(passos);
      setpressaoArterial(PreA);
    } catch (erro) {
      console.log('Erro ao buscar:', erro.message);
    }
  };

  const selecionarPaciente = (indice) => {
    setIndicePaciente(indice);
    setMenuPacientesAberto(false);
  };

  const lidarComEntradaManualDeDados = () => {
    navegacao.navigate('EntradaManualDeDados');
  };

  return (
    <View style={estilosHome.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#1e3462', '#19253d']}
          style={estilosHome.gradienteCabecalho}
        >
          <View style={estilosHome.topoCabecalho}>
            <Text style={estilosHome.tituloCabecalho}>VitalCare</Text>

            <TouchableOpacity
              accessibilityLabel="Abrir lista de pacientes"
              accessibilityRole="button"
              onPress={() =>
                setMenuPacientesAberto((aberto) => !aberto)
              }
              style={estilosHome.botaoMenuPacientes}
            >
              <Ionicons
                name={menuPacientesAberto ? 'close' : 'menu'}
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <Text style={estilosHome.subtituloCabecalho}>
            Monitoramento Remoto
          </Text>

          {menuPacientesAberto && (
            <>
              <Pressable
                style={estilosHome.areaFecharMenu}
                onPress={() => setMenuPacientesAberto(false)}
              />

              <View style={estilosHome.menuPacientes}>
                <Text style={estilosHome.tituloMenuPacientes}>
                  Pacientes monitorados
                </Text>

                {listaPacientes.map((paciente, indice) => {
                  const selecionado = indice === indicePaciente;

                  return (
                    <TouchableOpacity
                      key={paciente.id}
                      onPress={() => selecionarPaciente(indice)}
                      style={[
                        estilosHome.itemPaciente,
                        selecionado &&
                          estilosHome.itemPacienteSelecionado,
                      ]}
                    >
                      <View
                        style={[
                          estilosHome.avatarMenu,
                          selecionado &&
                            estilosHome.avatarMenuSelecionado,
                        ]}
                      >
                        <Text
                          style={[
                            estilosHome.inicialMenu,
                            selecionado &&
                              estilosHome.inicialMenuSelecionado,
                          ]}
                        >
                          {paciente.inicial}
                        </Text>
                      </View>

                      <View style={estilosHome.dadosItemPaciente}>
                        <Text style={estilosHome.nomeItemPaciente}>
                          {paciente.nome}
                        </Text>

                        <Text style={estilosHome.detalhesItemPaciente}>
                          {paciente.idade} anos
                        </Text>
                      </View>

                      <View style={estilosHome.statusItemPaciente}>
                        <View
                          style={[
                            estilosHome.pontoStatus,
                            { backgroundColor: paciente.corStatus },
                          ]}
                        />

                        <Text
                          style={[
                            estilosHome.textoStatusItem,
                            { color: paciente.corStatus },
                          ]}
                        >
                          {paciente.status}
                        </Text>
                      </View>

                      {selecionado && (
                        <Ionicons
                          name="checkmark-circle"
                          size={21}
                          color="#00BFA5"
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </>
          )}

          <View style={estilosHome.cartaoPerfil}>
            <View style={estilosHome.informacoesPerfil}>
              <View style={estilosHome.avatarPerfil}>
                <Text style={estilosHome.inicialPerfil}>
                  {pacienteAtual.inicial}
                </Text>
              </View>

              <View>
                <Text style={estilosHome.nomePerfil}>
                  {pacienteAtual.nome}
                </Text>

                <Text style={estilosHome.detalhesPerfil}>
                  {pacienteAtual.idade} anos • {pacienteAtual.dispositivo}
                </Text>
              </View>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <View style={estilosHome.statusPerfil}>
                <Ionicons
                  name="checkmark-circle"
                  size={15}
                  color={pacienteAtual.corStatus}
                />

                <Text style={estilosHome.textoStatusPerfil}>
                  {pacienteAtual.status}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={estilosHome.secao}>
          <Text style={estilosHome.tituloSecao}>Sinais Vitais</Text>

          <View style={estilosHome.linhaCartao}>
            <CartaoReutilizavel
              icone={
                <Ionicons
                  name="heart"
                  size={24}
                  color="#EF4444"
                />
              }
              rotulo="Frequência Cardíaca"
              valor={String(frequenciaCardiaca)}
              unidade="bpm"
              status="Normal"
              corStatus="#22C55E"
            />

            <CartaoReutilizavel
              icone={
                <Ionicons
                  name="water"
                  size={24}
                  color="#0A7AFF"
                />
              }
              rotulo="Saturação de O₂"
              valor={String(saturacaoOxigenio)}
              unidade="%"
              status="Ótimo"
              corStatus="#22C55E"
            />
          </View>

          <View style={estilosHome.linhaCartao}>
            <CartaoReutilizavel
              icone={
                <MaterialCommunityIcons
                  name="brain"
                  size={24}
                  color="#8B5CF6"
                />
              }
              rotulo="Nível de Estresse"
              valor={String(nivelEstresse)}
              unidade="/100"
              status="Moderado"
              corStatus="#F59E0B"
            />

            <CartaoReutilizavel
              icone={
                <FontAwesome5
                  name="walking"
                  size={24}
                  color="#22C55E"
                />
              }
              rotulo="Passos Hoje"
              valor={String(passosHoje)}
              unidade="passos"
              status="Meta: 10k"
              valorBarraDeProgresso={0.32}
              corBarraDeProgresso="#22C55E"
            />
          </View>

          <View style={estilosHome.linhaCartao}>
            <CartaoReutilizavel
              icone={
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={24}
                  color="#EF4444"
                />
              }
              rotulo="Pressão Arterial"
              valor={String(pressaoArterial)}
              unidade="mmHg"
              status="Normal"
              corStatus="#22C55E"
            />
          </View>
        </View>

        <View style={estilosHome.secao}>
          <Text style={estilosHome.tituloSecao}>Ações Rápidas</Text>

          <View style={estilosHome.containerAcoesRapidas}>
            <TouchableOpacity
              style={estilosHome.botaoAcaoRapida}
              onPress={() => navegacao.navigate('Histórico')}
            >
              <Ionicons
                name="stats-chart"
                size={24}
                color="#0A7AFF"
              />

              <Text style={estilosHome.textoAcaoRapida}>
                Relatórios
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilosHome.botaoAcaoRapida}
              onPress={() => navegacao.navigate('Alertas')}
            >
              <View style={estilosHome.containerNotificacao}>
                <Ionicons
                  name="notifications"
                  size={24}
                  color="#EF4444"
                />

                <View style={estilosHome.notificacao}>
                  <Text style={estilosHome.textoNotificacao}>
                    2
                  </Text>
                </View>
              </View>

              <Text style={estilosHome.textoAcaoRapida}>
                Alertas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilosHome.botaoAcaoRapida}
              onPress={lidarComEntradaManualDeDados}
            >
              <MaterialCommunityIcons
                name="pencil-box-multiple-outline"
                size={24}
                color="#0A7AFF"
              />

              <Text style={estilosHome.textoAcaoRapida}>
                Inserir dados manualmente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilosHome.botaoAcaoRapida}
            >
              <Ionicons
                name="settings"
                size={24}
                color="#0A7AFF"
              />

              <Text style={estilosHome.textoAcaoRapida}>
                Configurar
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={estilosHome.secao}>
          <View style={estilosHome.cabecalhoAlertasRecentes}>
            <Text style={estilosHome.tituloSecao}>
              Alertas Recentes
            </Text>

            <TouchableOpacity>
              <Text style={estilosHome.textoVerTodos}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>

          <View style={estilosHome.cartaoAlerta}>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color="#22C55E"
            />

            <View style={estilosHome.containerTextoAlerta}>
              <Text style={estilosHome.mensagemAlerta}>
                {pacienteAtual.alerta}
              </Text>

              <Text style={estilosHome.horaAlerta}>
                5 min atrás
              </Text>
            </View>
          </View>

          <View style={estilosHome.cartaoAlerta}>
            <Ionicons
              name="warning"
              size={24}
              color="#F59E0B"
            />

            <View style={estilosHome.containerTextoAlerta}>
              <Text style={estilosHome.mensagemAlerta}>
                Nível de estresse elevado
              </Text>

              <Text style={estilosHome.horaAlerta}>
                1h atrás
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
