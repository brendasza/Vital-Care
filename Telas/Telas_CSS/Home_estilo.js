import { StyleSheet } from 'react-native';

const estilosHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(175, 71%, 26%)',
  },

  gradienteCabecalho: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
  },

  topoCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  botaoMenuPacientes: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  areaFecharMenu: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 8,
  },

  menuPacientes: {
    position: 'absolute',
    zIndex: 10,
    top: 48,
    right: 0,
    width: 318,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    shadowColor: '#07142F',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 12,
  },

  tituloMenuPacientes: {
    color: '#19253D',
    fontSize: 14,
    fontWeight: '800',
    marginHorizontal: 6,
    marginBottom: 8,
  },

  itemPaciente: {
    minHeight: 64,
    borderRadius: 13,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  itemPacienteSelecionado: {
    backgroundColor: '#E8FBF7',
  },

  avatarMenu: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E7EEF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarMenuSelecionado: {
    backgroundColor: '#00BFA5',
  },

  inicialMenu: {
    color: '#496181',
    fontSize: 16,
    fontWeight: '800',
  },

  inicialMenuSelecionado: {
    color: '#FFFFFF',
  },

  dadosItemPaciente: {
    flex: 1,
    marginLeft: 10,
  },

  nomeItemPaciente: {
    color: '#19253D',
    fontSize: 15,
    fontWeight: '700',
  },

  detalhesItemPaciente: {
    color: '#7A879B',
    fontSize: 12,
    marginTop: 2,
  },

  statusItemPaciente: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  pontoStatus: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 4,
  },

  textoStatusItem: {
    fontSize: 11,
    fontWeight: '700',
  },

  tituloCabecalho: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  subtituloCabecalho: {
    fontSize: 16,
    color: '#E0E7FF',
    marginBottom: 20,
  },

  cartaoPerfil: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  informacoesPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  inicialPerfil: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },

  nomePerfil: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  detalhesPerfil: {
    fontSize: 13,
    color: '#E0E7FF',
  },

  statusPerfil: {
    backgroundColor: '#DBEAFE',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textoStatusPerfil: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#22C55E',
    marginLeft: 1,
  },

  sincronizacaoPerfil: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 5,
  },

  secao: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 15,
  },

  linhaCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  containerAcoesRapidas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  botaoAcaoRapida: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    width: '48%',
    padding: 15,
    alignItems: 'flex-start',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  textoAcaoRapida: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginTop: 8,
  },

  containerNotificacao: {
    position: 'relative',
  },

  notificacao: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoNotificacao: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  cabecalhoAlertasRecentes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  textoVerTodos: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0A7AFF',
  },

  cartaoAlerta: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },

  containerTextoAlerta: {
    marginLeft: 10,
  },

  mensagemAlerta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00bfa5',
  },

  horaAlerta: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
});

export default estilosHome;
