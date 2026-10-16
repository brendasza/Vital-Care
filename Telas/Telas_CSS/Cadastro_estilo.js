import { StyleSheet } from 'react-native';

const estilosCadastro = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#136f68',
  },

  scroll: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  header: {
    height: 270,
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },

  subtitulo: {
    color: '#E5E7EB',
    fontSize: 16,
    marginTop: 8,
  },

  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 20,
    marginTop: -35,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3462',
    marginTop: 12,
    marginBottom: 18,
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

  inputSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 15,
    height: 56,
    marginBottom: 18,
  },

  campoSenha: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },

  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 10,
  },

  opcaoSelecionada: {
    borderColor: '#0A7AFF',
    backgroundColor: '#EAF3FF',
  },

  textoOpcao: {
    marginLeft: 10,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },

  linhaEscolha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  botaoEscolha: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    justifyContent: 'center',
    paddingVertical: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cardInformacao: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EEF6FF',
    padding: 16,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 28,
  },

  textoInformacao: {
    flex: 1,
    marginLeft: 10,
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22,
  },

  botaoCadastrar: {
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

  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  botaoLogin: {
    marginTop: 22,
    alignItems: 'center',
  },

  textoLogin: {
    color: '#0A7AFF',
    fontSize: 16,
    fontWeight: '600',
  },

});

export default estilosCadastro;