import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit'; 
import estilosHistorico from './Telas_CSS/historico_estilo'; 

const Historico = ({ navigation }) => {
  const [activeTimeFilter, setActiveTimeFilter] = useState('Hoje'); 
  const [activeMetricFilter, setActiveMetricFilter] = useState('Frequência Cardíaca'); 

  // Dados de exemplo  (tem que substir por dados reais)
  const getChartData = () => {
    switch (activeMetricFilter) {
      case 'Frequência Cardíaca':
        return {
          labels: ['00:00', '06:00', '12:00', '18:00', 'Agora'],
          datasets: [{
            data: [65, 62, 75, 70, 72, 68, 70], 
            color: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`, 
            strokeWidth: 2,
          }]
        };
      case 'Saturação O2':
        return {
          labels: ['00:00', '06:00', '12:00', '18:00', 'Agora'],
          datasets: [{
            data: [96, 97, 98, 97, 99, 98, 98],
            color: (opacity = 1) => `rgba(10, 122, 255, ${opacity})`, 
            strokeWidth: 2,
          }]
        };
      case 'Estresse':
        return {
          labels: ['00:00', '06:00', '12:00', '18:00', 'Agora'],
          datasets: [{
            data: [30, 45, 60, 50, 42, 55, 48],
            color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`, 
            strokeWidth: 2,
          }]
        };
      default:
        return { labels: [], datasets: [{ data: [] }] };
    }
  };

  const getSummaryData = () => {
    switch (activeMetricFilter) {
      case 'Frequência Cardíaca':
        return { media: '71', minimo: '50', maximo: '150', unidade: 'bpm' };
      case 'Saturação O2':
        return { media: '97', minimo: '96', maximo: '99', unidade: '%' };
      case 'Estresse':
        return { media: '47', minimo: '30', maximo: '60', unidade: '/100' };
      default:
        return { media: '-', minimo: '-', maximo: '-', unidade: '' };
    }
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(119, 119, 119, ${opacity})`, 
    strokeWidth: 2,
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#fff'
    },
    fillShadowGradientFrom: getChartData().datasets[0].color(0.5), 
    fillShadowGradientTo: getChartData().datasets[0].color(0),
  };

  const { media, minimo, maximo, unidade } = getSummaryData();

  return (
    <ScrollView style={estilosHistorico.container}>
      <View style={estilosHistorico.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={estilosHistorico.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={estilosHistorico.headerTitle}>Histórico e Gráficos</Text>
        <Text style={estilosHistorico.headerSubtitle}>Análise detalhada dos sinais vitais</Text>
      </View>

      <View style={estilosHistorico.content}>
        <View style={estilosHistorico.timeFiltersContainer}>
          {['Hoje', 'Semana', 'Mês'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                estilosHistorico.timeFilterButton,
                activeTimeFilter === filter && estilosHistorico.timeFilterButtonActive,
              ]}
              onPress={() => setActiveTimeFilter(filter)}
            >
              <Text
                style={[
                  estilosHistorico.timeFilterText,
                  activeTimeFilter === filter && estilosHistorico.timeFilterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={estilosHistorico.metricFiltersContainer}>
          {['Frequência Cardíaca', 'Saturação O2', 'Estresse'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                estilosHistorico.metricFilterButton,
                activeMetricFilter === filter && { backgroundColor: getChartData().datasets[0].color(1) }, // Cor dinâmica
              ]}
              onPress={() => setActiveMetricFilter(filter)}
            >
              <Text
                style={[
                  estilosHistorico.metricFilterText,
                  activeMetricFilter === filter && estilosHistorico.metricFilterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={estilosHistorico.chartContainer}>
          <View style={estilosHistorico.chartTitleContainer}>
            <View>
              <Text style={estilosHistorico.chartTitle}>{activeMetricFilter} ({unidade})</Text>
              <Text style={estilosHistorico.chartSubtitle}>Últimas 24 horas</Text>
            </View>
            <Ionicons name="calendar-outline" size={24} color="#777" style={estilosHistorico.chartDateIcon} />
          </View>
          <LineChart
            data={getChartData()}
            width={Dimensions.get('window').width - 60} 
            height={220}
            chartConfig={chartConfig}
            bezier
            style={{ marginVertical: 8, borderRadius: 10 }}
          />
        </View>

        <View style={estilosHistorico.summaryContainer}>
          <View style={estilosHistorico.summaryCard}>
            <Text style={estilosHistorico.summaryTitle}>Média</Text>
            <Text style={estilosHistorico.summaryValue}>{media}</Text>
            <Text style={estilosHistorico.summaryUnit}>{unidade}</Text>
          </View>
          <View style={estilosHistorico.summaryCard}>
            <Text style={estilosHistorico.summaryTitle}>Mínimo</Text>
            <Text style={estilosHistorico.summaryValue}>{minimo}</Text>
            <Text style={estilosHistorico.summaryUnit}>{unidade}</Text>
          </View>
          <View style={estilosHistorico.summaryCard}>
            <Text style={estilosHistorico.summaryTitle}>Máximo</Text>
            <Text style={estilosHistorico.summaryValue}>{maximo}</Text>
            <Text style={estilosHistorico.summaryUnit}>{unidade}</Text>
          </View>
        </View>

        <TouchableOpacity style={estilosHistorico.exportButton}>
          <Ionicons name="download-outline" size={20} color="#fff" />
          <Text style={estilosHistorico.exportButtonText}>Exportar Relatório Médico (PDF)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Historico;