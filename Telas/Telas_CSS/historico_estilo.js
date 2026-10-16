import { StyleSheet } from 'react-native';

const estilosHistorico = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136f68',
  },

  // MENU SUPERIOR
  header: {
    backgroundColor: '#19253d',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    position: 'relative',
  },

  backButton: {
    position: 'absolute',
    top: 45,
    left: 15,
    zIndex: 1,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 5,
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#C7D2FE',
  },

  content: {
    paddingHorizontal: 15,
  },

  // CARDS
  timeFiltersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    marginBottom: 15,
    padding: 5,
  },

  timeFilterButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  timeFilterButtonActive: {
    backgroundColor: '#19253d',
  },

  timeFilterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00bfa5',
  },

  timeFilterTextActive: {
    color: '#00bfa5',
  },

  metricFiltersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
  },

  metricFilterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#19253d',
  },

  metricFilterButtonActive: {
    backgroundColor: '#00bfa5',
  },

  metricFilterText: {
    fontSize: 14,
    color: '#fff',
  },

  metricFilterTextActive: {
    color: '#19253d',
    fontWeight: 'bold',
  },

  chartContainer: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
  },

  chartTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },

  // TITULOS
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00bfa5',
  },

  chartSubtitle: {
    fontSize: 13,
    color: '#666',
  },

  chartDateIcon: {},

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    padding: 15,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },

  summaryTitle: {
    fontSize: 13,
    color: '#00bfa5',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#19253d',
  },

  summaryUnit: {
    fontSize: 14,
    color: '#666',
  },

  exportButton: {
    backgroundColor: '#19253d',
    borderRadius: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
  },

  exportButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginLeft: 10,
  },
});

export default estilosHistorico;