import { StyleSheet } from 'react-native';

const estilosCartao = StyleSheet.create({
  cartao: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    padding: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  rotulo: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 8,
  },
  containerValor: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 5,
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#374151',
  },
  unidade: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  containerStatus: {
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  textoStatus: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  fundoBarraDeProgresso: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginTop: 10,
    width: '100%',
  },
  preenchimentoBarraDeProgresso: {
    height: '100%',
    borderRadius: 3,
  },
});

export default estilosCartao;