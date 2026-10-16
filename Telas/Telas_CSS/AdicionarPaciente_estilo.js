import { StyleSheet } from 'react-native';

const estilosAdicionarPaciente = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#136f68',
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  header: {
    height: 190,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  botaoVoltar: {
    position: 'absolute',
    top: 55,
    left: 20,
  },

  titulo: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitulo: {
    color: '#E5E7EB',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 25,
    padding: 22,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 6,
  },

  secao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3462',
    marginBottom: 16,
  },

  label: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 5,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    marginBottom: 18,
  },

  cardInformacao: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EEF6FF',
    padding: 16,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 26,
  },

  textoInformacao: {
    flex: 1,
    marginLeft: 10,
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22,
  },

  botaoSalvar: {
    backgroundColor: '#0A7AFF',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#0A7AFF',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  botaoSalvarDesabilitado: {
    opacity: 0.6,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  botaoCancelar: {
    marginTop: 18,
    alignItems: 'center',
  },

  textoCancelar: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '600',
  },
chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 22,
    marginTop: 2,
  },

  chip: {
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },

  chipSelecionado: {
    backgroundColor: '#0A7AFF',
    borderColor: '#0A7AFF',
  },

  chipTexto: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
  },

  chipTextoSelecionado: {
    color: '#FFFFFF',
  },
});

export default estilosAdicionarPaciente;