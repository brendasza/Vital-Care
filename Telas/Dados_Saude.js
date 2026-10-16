import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilosSaude from './Telas_CSS/Saude_estilo'; 

const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com';

const DadosSaude = () => {
  const navigation = useNavigation();

  // Estados para simular os dados que vao entrar da insersao manual
 const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('--');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState('--');
  const [nivelEstresse, setNivelEstresse] = useState('--');
  const [passosHoje, setPassosHoje] = useState('--');
  const [calorias, setCalorias] = useState('--');
  const [distancia, setDistancia] = useState('--');

useEffect(() => {

buscarDados();

const intervalo = setInterval(() => {
buscarDados();
}, 3000);

return () => clearInterval(intervalo);

}, []);

const buscarDados = async () => {

try {

const resposta = await fetch(
`https://${IP_SERVIDOR}/dados-saude`
);

if (!resposta.ok) {
throw new Error(
`HTTP ${resposta.status}`
);
}

const dados = await resposta.json();

let fc='--';
let sat='--';
let est='--';
let passos='--';

dados.forEach((item) => {

  if (item.idTipoMedicao === 1)
    fc = item.valor;

  if (item.idTipoMedicao === 2)
    sat = item.valor;

  if (item.idTipoMedicao === 3)
    est = item.valor;

  if (item.idTipoMedicao === 4)
    passos = item.valor;

});

setFrequenciaCardiaca(fc);
setSaturacaoOxigenio(sat);
setNivelEstresse(est);
setPassosHoje(passos);

}
catch(erro){

console.log(
'Erro ao buscar:',
erro.message
);

}

};


  useFocusEffect(
    React.useCallback(() => {
      // --- INÍCIO DA SEÇÃO PARA INTEGRAÇÃO COM DADOS DINÂMICOS ---
      // Imagine que aqui você faria uma chamada a uma API
      // ou leria dados de um armazenamento local/contexto.

      // Exemplo de como buscar os últimos dados manuais ou do sensor
      // const dadosRecentes = await obterUltimosDadosDeSaude();
      // if (dadosRecentes) {
      //   setFrequenciaCardiaca(dadosRecentes.frequenciaCardiaca);
      //   setSaturacaoOxigenio(dadosRecentes.saturacaoOxigenio);
      //   setNivelEstresse(dadosRecentes.nivelEstresse);
      //   setPassosHoje(dadosRecentes.passos);
      //   setCalorias(dadosRecentes.calorias);
      //   setDistancia(dadosRecentes.distancia);
      // }

      // Se você estivesse passando dados via params do navigation (ex: de DadosManuais),
      // poderia acessá-los aqui:
      // const dadosPassados = navigation.getParam('dadosManuais');
      // if (dadosPassados) {
      //   atualizarDadosDeEntradaManual(dadosPassados);
      // }


      // Dados  de exemplo
      console.log("Tela Dados_Saude em foco. Carregando dados...");
      return () => {
        console.log("Tela Dados_Saude perdeu o foco.");
      };
    }, [])
  );


  // Funções auxiliares para determinar status e cores das barras
  const getStatusFrequencia = (fc) => {
    if (fc >= 60 && fc <= 100) return { text: 'Normal', color: '#22C55E' };
    if (fc < 60) return { text: 'Baixa', color: '#F59E0B' };
    return { text: 'Alta', color: '#EF4444' };
  };

  const getStatusSaturacao = (sao2) => {
    if (sao2 >= 95) return { text: 'Excelente', color: '#22C55E' };
    return { text: 'Baixa', color: '#EF4444' };
  };

  const getStatusEstresse = (estresse) => {
    if (estresse <= 30) return { text: 'Baixo', color: '#22C55E' };
    if (estresse <= 70) return { text: 'Moderado', color: '#F59E0B' };
    return { text: 'Alto', color: '#EF4444' };
  };

  const statusFC = getStatusFrequencia(frequenciaCardiaca);
  const statusO2 = getStatusSaturacao(saturacaoOxigenio);
  const statusEstresse = getStatusEstresse(nivelEstresse);
  const progressoPassos = passosHoje / 10000; // Considerando meta de 10k

  return (
    <View style={estilosSaude.container}>
      <View style={estilosSaude.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={estilosSaude.backButton}>
          <Ionicons name="arrow-back" size={24} color="#00bfa5" />
        </TouchableOpacity>
        <View>
          <Text style={estilosSaude.headerTitle}>Monitoramento em Tempo Real</Text>
          <Text style={estilosSaude.headerSubtitle}>José da Silva • Atualização contínua</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={estilosSaude.scrollViewContent}>

        <View style={estilosSaude.card}>
          <View style={estilosSaude.cardHeader}>
            <View style={[estilosSaude.iconContainer, { backgroundColor: '#FEE2E2' }]}>
              <Ionicons name="heart-outline" size={24} color="#EF4444" />
            </View>
            <View>
              <Text style={estilosSaude.cardTitle}>Frequência Cardíaca</Text>
              <Text style={estilosSaude.cardSubtitle}>Agora</Text>
            </View>
            <Ionicons name="trending-up-outline" size={24} color="#22C55E" style={estilosSaude.trendIcon} />
          </View>
          <Text style={estilosSaude.mainValue}>{frequenciaCardiaca} <Text style={estilosSaude.unit}>bpm</Text></Text>
          <View style={estilosSaude.progressBarContainer}>
            <View style={estilosSaude.progressBarBackground}>
              <View style={[
                estilosSaude.progressBarFill,
                {
                  width: `${Math.min(100, Math.max(0, ((frequenciaCardiaca - 60) / (100 - 60)) * 100))}%`, // Exemplo de calculo para barra entre 60 e 100
                  backgroundColor: statusFC.color
                }
              ]} />
            </View>
          </View>
          <View style={estilosSaude.minMaxContainer}>
            <Text style={estilosSaude.minMaxText}>Mínimo: 60</Text>
            <Text style={[estilosSaude.statusBadge, { backgroundColor: statusFC.color, color: '#fff' }]}>{statusFC.text}</Text>
            <Text style={estilosSaude.minMaxText}>Máximo: 100</Text>
          </View>
        </View>

        <View style={estilosSaude.card}>
          <View style={estilosSaude.cardHeader}>
            <View style={[estilosSaude.iconContainer, { backgroundColor: '#DBEAFE' }]}>
              <Ionicons name="water-outline" size={24} color="#0A7AFF" />
            </View>
            <View>
              <Text style={estilosSaude.cardTitle}>Saturação de Oxigênio</Text>
              <Text style={estilosSaude.cardSubtitle}>Agora</Text>
            </View>
            <Ionicons name="trending-up-outline" size={24} color="#22C55E" style={estilosSaude.trendIcon} />
          </View>
          <Text style={estilosSaude.mainValue}>{saturacaoOxigenio} <Text style={estilosSaude.unit}>%</Text></Text>
          <View style={estilosSaude.progressBarContainer}>
            <View style={estilosSaude.progressBarBackground}>
              <View style={[
                estilosSaude.progressBarFill,
                {
                  width: `${Math.min(100, Math.max(0, ((saturacaoOxigenio - 95) / 5) * 100))}%`, 
                  backgroundColor: statusO2.color
                }
              ]} />
            </View>
          </View>
          <View style={estilosSaude.minMaxContainer}>
            <Text style={estilosSaude.minMaxText}>Nível Mínimo Saudável</Text>
            <Text style={[estilosSaude.statusBadge, { backgroundColor: statusO2.color, color: '#fff' }]}>{statusO2.text}</Text>
            <Text style={estilosSaude.minMaxText}>95%</Text>
          </View>
        </View>

        <View style={estilosSaude.card}>
          <View style={estilosSaude.cardHeader}>
            <View style={[estilosSaude.iconContainer, { backgroundColor: '#EDE9FE' }]}>
              <MaterialCommunityIcons name="brain" size={24} color="#8B5CF6" />
            </View>
            <View>
              <Text style={estilosSaude.cardTitle}>Nível de Estresse</Text>
              <Text style={estilosSaude.cardSubtitle}>1 min atrás</Text>
            </View>
            <Ionicons name="trending-up-outline" size={24} color="#22C55E" style={estilosSaude.trendIcon} />
          </View>
          <Text style={estilosSaude.mainValue}>{nivelEstresse} <Text style={estilosSaude.unit}>/100</Text></Text>
          <View style={estilosSaude.stressProgressBarContainer}>
            <View style={[estilosSaude.stressProgressBarSegment, { backgroundColor: '#22C55E', flex: 0.3 }]} />
            <View style={[estilosSaude.stressProgressBarSegment, { backgroundColor: '#F59E0B', flex: 0.4 }]} />
            <View style={[estilosSaude.stressProgressBarSegment, { backgroundColor: '#EF4444', flex: 0.3 }]} />
          </View>
          <View style={estilosSaude.minMaxContainer}>
            <Text style={estilosSaude.minMaxText}>Baixo</Text>
            <Text style={estilosSaude.minMaxText}>Moderado</Text>
            <Text style={estilosSaude.minMaxText}>Alto</Text>
          </View>
   <View
  style={[
    estilosSaude.statusBadge,
    {
      backgroundColor: statusEstresse.color,
      alignSelf: 'center',
      marginTop: 10,
    }
  ]}
>
  <Text style={estilosSaude.statusBadgeText}>
    {statusEstresse.text}
  </Text>
</View>
</View>

        <View style={estilosSaude.card}>
          <View style={estilosSaude.cardHeader}>
            <View style={[estilosSaude.iconContainer, { backgroundColor: '#D1FAE5' }]}>
              <MaterialCommunityIcons name="run" size={24} color="#22C55E" />
            </View>
            <View>
              <Text style={estilosSaude.cardTitle}>Atividade Física</Text>
              <Text style={estilosSaude.cardSubtitle}>Hoje</Text>
            </View>
          </View>
          <Text style={estilosSaude.mainValue}>{passosHoje} <Text style={estilosSaude.unit}>passos</Text></Text>
          <Text style={estilosSaude.goalText}>Meta: 10 000 passos ({Math.round(progressoPassos * 100)}%)</Text>
          <View style={estilosSaude.progressBarContainer}>
            <View style={estilosSaude.progressBarBackground}>
              <View style={[estilosSaude.progressBarFill, { width: `${Math.min(progressoPassos * 100, 100)}%`, backgroundColor: '#22C55E' }]} />
            </View>
          </View>

          <View style={estilosSaude.activityDetailsContainer}>
            <View style={estilosSaude.activityDetailItem}>
              <Text style={estilosSaude.activityDetailValue}>{calorias}</Text>
              <Text style={estilosSaude.activityDetailLabel}>Calorias</Text>
              <Text style={estilosSaude.activityDetailUnit}>kcal</Text>
            </View>
            <View style={estilosSaude.activityDetailItem}>
              <Text style={estilosSaude.activityDetailValue}>{distancia}</Text>
              <Text style={estilosSaude.activityDetailLabel}>Distância</Text>
              <Text style={estilosSaude.activityDetailUnit}>km percorridos</Text>
            </View>
          </View>
        </View>

    

      </ScrollView>
    </View>
  );
};

export default DadosSaude;