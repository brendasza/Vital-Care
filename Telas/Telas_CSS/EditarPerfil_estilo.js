import { StyleSheet } from 'react-native';

const estilosEditarPerfil = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#hsl(175, 71%, 26%)',
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 30,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitulo: {
    color: '#E5E7EB',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 20,
    marginTop: -10,
    borderRadius: 25,
    padding: 22,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },

  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3462',
    marginBottom: 16,
  },

  label: {
    fontSize: 15,
    color: '#13716a',
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
    backgroundColor: '#1E3462',
    borderColor: '#1E3462',
  },

  chipTexto: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '600',
  },

  chipTextoSelecionado: {
    color: '#FFFFFF',
  },

  botaoSalvar: {
    backgroundColor: '#1E3462',
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 6,

    shadowColor: '#1E3462',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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

});

export default estilosEditarPerfil;