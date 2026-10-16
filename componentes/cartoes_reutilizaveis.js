import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import estilosCartao from './CSS/cartoes_estilo'; 

const CartaoReutilizavel = ({ data, icone, rotulo, valor, unidade, status, corStatus, valorBarraDeProgresso, corBarraDeProgresso }) => {

  if (data) {
    const renderConteudoCartaoPersonalizado = () => {
      switch (data.tipo) {
        case 'frequenciaCardiaca':
        case 'saturacaoOxigenio':
          return (
            <View>
              <View style={personalStyles.linhaStatus}>
                <Ionicons name={data.iconeNome} size={24} color={data.iconeCor} style={personalStyles.icone} />
                <Text style={personalStyles.tituloCartao}>{data.titulo}</Text>
                <Text style={personalStyles.ultimaAtualizacao}>{data.ultimaAtualizacao}</Text>
                {data.mostrarGrafico && (
                  <Ionicons name="trending-up-outline" size={20} color="#63D471" style={personalStyles.graficoIcone} />
                )}
              </View>
              <View style={personalStyles.linhaValor}>
                <Text style={personalStyles.valorPrincipal}>{data.valor}</Text>
                <Text style={personalStyles.unidadePrincipal}>{data.unidade}</Text>
              </View>
              <Text style={personalStyles.faixa}>{data.faixa}</Text>
              <View style={personalStyles.barraProgressoContainer}>
                <View style={[personalStyles.barraProgresso, { width: `${data.progressoBarra * 100}%`, backgroundColor: data.corStatus }]} />
              </View>
              <View style={personalStyles.limites}>
                <Text style={personalStyles.limiteTexto}>{data.tipo === 'frequenciaCardiaca' ? `Mínimo: ${data.minimo}` : `Nível Mínimo Saudável: ${data.minimo}`}</Text>
                <Text style={[personalStyles.statusTexto, { backgroundColor: data.corStatus }]}>{data.status}</Text>
                {data.tipo === 'frequenciaCardiaca' && <Text style={personalStyles.limiteTexto}>Máximo: {data.maximo}</Text>}
              </View>
            </View>
          );
        case 'nivelEstresse':
          return (
            <View>
              <View style={personalStyles.linhaStatus}>
                <MaterialCommunityIcons name={data.iconeNome} size={24} color={data.iconeCor} style={personalStyles.icone} />
                <Text style={personalStyles.tituloCartao}>{data.titulo}</Text>
                <Text style={personalStyles.ultimaAtualizacao}>{data.ultimaAtualizacao}</Text>
                {data.mostrarGrafico && (
                  <Ionicons name="trending-up-outline" size={20} color="#63D471" style={personalStyles.graficoIcone} />
                )}
              </View>
              <View style={personalStyles.linhaValor}>
                <Text style={personalStyles.valorPrincipal}>{data.valor}</Text>
                <Text style={personalStyles.unidadePrincipal}>{data.unidade}</Text>
              </View>
              <View style={personalStyles.barraMultiColoridaContainer}>
                {data.progressosEstresse.map((prog, index) => (
                  <View
                    key={index}
                    style={[
                      personalStyles.barraMultiColoridaSegmento,
                      { backgroundColor: data.coresEstresse[index], flex: prog },
                    ]}
                  />
                ))}
              </View>
              <View style={personalStyles.limitesEstresse}>
                {data.faixasEstresse.map((faixa, index) => (
                  <Text key={index} style={personalStyles.limiteEstresseTexto}>{faixa}</Text>
                ))}
              </View>
              <Text style={[personalStyles.statusTexto, { backgroundColor: data.corStatus, alignSelf: 'center', marginTop: 10 }]}>{data.status}</Text>
            </View>
          );
        case 'atividadeFisica':
          return (
            <View>
              <View style={personalStyles.linhaStatus}>
                <Ionicons name={data.iconeNome} size={24} color={data.iconeCor} style={personalStyles.icone} />
                <Text style={personalStyles.tituloCartao}>{data.titulo}</Text>
                <Text style={personalStyles.ultimaAtualizacao}>{data.ultimaAtualizacao}</Text>
              </View>
              <View style={personalStyles.linhaValor}>
                <Text style={personalStyles.valorPrincipal}>{data.valor}</Text>
                <Text style={personalStyles.unidadePrincipal}>{data.unidade}</Text>
              </View>
              <Text style={personalStyles.metaTexto}>Meta: {data.meta}</Text>
              <View style={personalStyles.linhaDetalhesAtividade}>
                <View style={personalStyles.detalheAtividadeItem}>
                  <Text style={personalStyles.detalheAtividadeTitulo}>Calorias</Text>
                  <Text style={personalStyles.detalheAtividadeValor}>{data.calorias}</Text>
                </View>
                <View style={personalStyles.separadorVertical} />
                <View style={personalStyles.detalheAtividadeItem}>
                  <Text style={personalStyles.detalheAtividadeTitulo}>Distância</Text>
                  <Text style={personalStyles.detalheAtividadeValor}>{data.distancia}</Text>
                </View>
              </View>
            </View>
          );
        case 'localizacaoAtual':
          return (
            <View>
              <View style={personalStyles.linhaStatus}>
                <Ionicons name={data.iconeNome} size={24} color={data.iconeCor} style={personalStyles.icone} />
                <Text style={personalStyles.tituloCartao}>{data.titulo}</Text>
                <Text style={personalStyles.ultimaAtualizacao}>{data.ultimaAtualizacao}</Text>
              </View>
              <View style={personalStyles.linhaValorLocalizacao}>
                <Text style={personalStyles.valorLocalizacao}>{data.valor}</Text>
                <View style={personalStyles.statusLocalizacaoAtivo} />
              </View>
              <View style={personalStyles.mapaPlaceholder}>
                <Text style={personalStyles.mapaPlaceholderTexto}>Mapa em breve</Text>
              </View>
            </View>
          );
        default:
          return (
            <View>
              <Text style={personalStyles.tituloCartao}>Erro: Tipo de dado desconhecido</Text>
            </View>
          );
      }
    };

    return (
      <View style={personalStyles.cartao}>
        {renderConteudoCartaoPersonalizado()}
      </View>
    );
  }

  // Renderização para a Home.js 
  return (
    <View style={estilosCartao.cartao}>
      {icone}
      <Text style={estilosCartao.rotulo}>{rotulo}</Text>
      <View style={estilosCartao.containerValor}>
        <Text style={estilosCartao.valor}>{valor}</Text>
        <Text style={estilosCartao.unidade}>{unidade}</Text>
      </View>
      {status && (
        <View style={[estilosCartao.containerStatus, { backgroundColor: corStatus ? `${corStatus}20` : '#E5E7EB' }]}>
          <Text style={[estilosCartao.textoStatus, { color: corStatus || '#6B7280' }]}>
            {status}
          </Text>
        </View>
      )}
      {valorBarraDeProgresso !== undefined && (
        <View style={estilosCartao.fundoBarraDeProgresso}>
          <View style={[estilosCartao.preenchimentoBarraDeProgresso, { width: `${valorBarraDeProgresso * 100}%`, backgroundColor: corBarraDeProgresso || '#0A7AFF' }]} />
        </View>
      )}
    </View>
  );
};

// Estilos específicos para os cartões da tela de saúde (para não bater com estilosCartao)
const personalStyles = StyleSheet.create({
  cartao: {
    backgroundColor: '#c4fbf3',
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icone: {
    marginRight: 8,
  },
  tituloCartao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, 
  },
  ultimaAtualizacao: {
    fontSize: 12,
    color: '#777',
    marginRight: 5,
  },
  graficoIcone: {
    marginLeft: 'auto', 
  },
  linhaValor: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 5,
  },
  valorPrincipal: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  unidadePrincipal: {
    fontSize: 18,
    color: '#555',
  },
  faixa: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  barraProgressoContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  barraProgresso: {
    height: '100%',
    borderRadius: 4,
  },
  limites: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  limiteTexto: {
    fontSize: 12,
    color: '#777',
  },
  statusTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },
  barraMultiColoridaContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  barraMultiColoridaSegmento: {
    height: '100%',
  },
  limitesEstresse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  limiteEstresseTexto: {
    fontSize: 12,
    color: '#777',
    flex: 1,
    textAlign: 'center',
  },
  metaTexto: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  linhaDetalhesAtividade: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  detalheAtividadeItem: {
    alignItems: 'center',
  },
  detalheAtividadeTitulo: {
    fontSize: 12,
    color: '#777',
    marginBottom: 3,
  },
  detalheAtividadeValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  separadorVertical: {
    width: 1,
    backgroundColor: '#e0e0e0',
    height: '80%',
    alignSelf: 'center',
  },
  linhaValorLocalizacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  valorLocalizacao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  statusLocalizacaoAtivo: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#63D471', 
  },
  mapaPlaceholder: {
    backgroundColor: '#e0e0e0',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  mapaPlaceholderTexto: {
    color: '#777',
    fontSize: 14,
  },
});

export default CartaoReutilizavel;