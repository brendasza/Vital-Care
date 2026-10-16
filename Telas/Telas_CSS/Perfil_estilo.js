import { StyleSheet } from 'react-native';

const estilosPerfil = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#hsl(175, 71%, 26%)',
  },


  headerGradiente: {
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 70,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoIconeHeader: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
  },


  topoPerfil: {
    alignItems: 'center',
    marginTop: -60,
    marginHorizontal: 24,
    backgroundColor: '#c4fbf3',
    borderRadius: 26,
    paddingVertical: 26,
    paddingHorizontal: 20,

    shadowColor: '#0F172A',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  avatarAnel: {
    width: 106,
    height: 106,
    borderRadius: 53,
    backgroundColor: 'rgba(0,191,165,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1E3462',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  nome: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3462',
    textAlign: 'center',
  },

  tipo: {
    alignSelf: 'center',
    marginTop: 8,
    backgroundColor: '#E6FFFB',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    color: '#00A693',
    fontWeight: '700',
    fontSize: 13,
    overflow: 'hidden',
  },

  cardResumo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: '#F0FDFA',
    alignSelf: 'stretch',
  },

  textoResumo: {
    marginLeft: 10,
    color: '#0F766E',
    fontWeight: '600',
    fontSize: 14,
  },


  card: {
    backgroundColor: '#c4fbf3',
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 22,
    padding: 20,

    shadowColor: '#0F172A',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  tituloCard: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#13716a',
    marginBottom: 18,
  },


  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    
  },

  iconeLinha: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: 'hsl(175, 71%, 26%)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },

  valor: {
    fontSize: 15,
    color: '#1E3462',
    fontWeight: '600',
    marginTop: 2,
  },

  separadorLinha: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },

  botaoEditar: {
    marginTop: 18,
    backgroundColor: '#1E3462',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },


  cabecalhoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  quantidade: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#1E3462',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 8,
    overflow: 'hidden',
  },

  estadoLista: {
    paddingVertical: 26,
    alignItems: 'center',
  },

  textoEstadoLista: {
    color: '#6B7280',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },

  textoErro: {
    color: '#EF4444',
    marginBottom: 10,
    textAlign: 'center',
  },

  botaoTentarNovamente: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
  },

  textoTentarNovamente: {
    color: '#0A7AFF',
    fontWeight: '700',
  },

  cardPaciente: {
    backgroundColor: '#F9FAFB',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },

  linhaPaciente: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarPaciente: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1E3462',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  nomePaciente: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },

  idadePaciente: {
    marginTop: 3,
    color: '#6B7280',
    fontSize: 13,
  },

  statusPaciente: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  textoStatus: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 11,
  },

  botaoPaciente: {
    marginTop: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#00BFA5',
    borderRadius: 14,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotaoPaciente: {
    color: '#00A693',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 6,
  },

  botaoAdicionar: {
    marginTop: 4,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#00BFA5',
    borderStyle: 'dashed',
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0FDFA',
  },

  textoBotaoAdicionar: {
    color: '#00A693',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },

  // ---------- Sair ----------

  botaoSair: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FEE2E2',
  },

  textoBotaoSair: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 8,
  },

});

export default estilosPerfil;