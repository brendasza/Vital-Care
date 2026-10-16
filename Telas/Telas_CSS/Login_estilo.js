import { StyleSheet } from 'react-native';

const estilosLogin = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#136f68',
  },

  scroll: {
    flexGrow: 1,
  },

  header: {
    height: 300,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  subtitulo: {
    marginTop: 8,
    color: '#E5E7EB',
    fontSize: 16,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 22,
    marginTop: -40,
    borderRadius: 24,
    padding: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  boasVindas: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F2937',
  },

  descricao: {
    marginTop: 8,
    marginBottom: 28,
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 5,
  },

  inputContainer: {
    height: 58,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1F2937',
  },

  esqueceuSenha: {
    color: '#0A7AFF',
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: 28,
  },

  botao: {
    height: 58,
    backgroundColor: '#0A7AFF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },

  textoOu: {
    marginHorizontal: 15,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  botaoCadastro: {
    height: 56,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#0A7AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCadastro: {
    color: '#0A7AFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});

export default estilosLogin;