import { StyleSheet } from 'react-native';

const estilosSaude = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136f68'
  },
  header: {
    backgroundColor: '#19253d', // Cor azul do cabeçalho
    paddingTop: 50, // Espaçamento para a barra de status
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#E0E7FF', 
    fontSize: 14,
    marginTop: 2,
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 80, // Espaço extra para não cobrir o tab bar
  },
  card: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00bfa5',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  trendIcon: {
    marginLeft: 'auto', // Empurra o ícone para a direita
  },
  mainValue: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  unit: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#666',
  },
  progressBarContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB', // Fundo cinza claro da barra
    borderRadius: 5,
    overflow: 'hidden', // Garante que o preenchimento não saia dos limites
    marginBottom: 10,
  },
  progressBarBackground: {
    height: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  minMaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minMaxText: {
    fontSize: 13,
    color: '#666',
  },
statusBadge: {
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 15,
},
  // Estilo específico para a barra de estresse (3 segmentos)
  stressProgressBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  stressProgressBarSegment: {
    height: '100%',
  },
  // Detalhes da atividade física
  goalText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  activityDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 15,
  },
  activityDetailItem: {
    alignItems: 'center',
    flex: 1,
  },
  activityDetailValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDetailLabel: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  activityDetailUnit: {
    fontSize: 12,
    color: '#999',
  },
  // Localização
  statusDotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    backgroundColor: '#ECFDF5', // Fundo verde claro para o status
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E', // Ponto verde
    marginRight: 5,
  },
  statusDotText: {
    color: '#22C55E',
    fontSize: 13,
    fontWeight: 'bold',
  },
  mapPlaceholder: {
    height: 150, // Altura para o placeholder do mapa
    backgroundColor: '#F3F4F6', // Cor de fundo do placeholder
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBadgeText: {
  color: '#FFF',
  fontSize: 14,
  fontWeight: '600',
},

});


export default estilosSaude;