import { StyleSheet } from 'react-native';

const estilosConfiguracoes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136f68',
  },

  header: {
    backgroundColor: '#19253d',
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 6,
  },

  titulo: {
    color: '#00bfa5',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 18,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#19253d',
    marginHorizontal: 18,
    marginVertical: 12,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
  },

  texto: {
    flex: 1,
    marginLeft: 15,
    fontSize: 15.5,
    color: '#2E3A4D',
    fontWeight: '500',
  },

  subtexto: {
    color: '#8B97A8',
    fontSize: 13,
    marginTop: 3,
  },

  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
  },

  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
  },

  infoTitulo: {
    color: '#5E6B7B',
    fontSize: 15,
    fontWeight: '500',
  },

  infoValor: {
    color: '#19253d',
    fontSize: 15,
    fontWeight: '600',
  },

  botaoSair: {
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#E53935',
    height: 55,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 8,
  },
});

export default estilosConfiguracoes;