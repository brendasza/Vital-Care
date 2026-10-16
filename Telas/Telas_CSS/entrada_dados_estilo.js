import { StyleSheet } from 'react-native';

const estilosEntradaDados = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136f68'
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  botaoVoltar: {
    marginRight: 15,
  },
  tituloCabecalho: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
  },
  conteudoScrollView: {
    padding: 20,
  },
  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 8,
    marginTop: 15,
  },
  entrada: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#374151',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  botaoEnviar: {
    backgroundColor: '#00bfa5',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#0A7AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  textoBotaoEnviar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default estilosEntradaDados;