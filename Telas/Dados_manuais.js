import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import estilosEntradaDados from './Telas_CSS/entrada_dados_estilo';

const IP_SERVIDOR = 'limiting-advances-organised-fabric.trycloudflare.com'; 

const DadosManuais = () => {
  const navegacao = useNavigation();
  const [frequenciaCardiaca, setFrequenciaCardiaca] = useState('');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState('');
  const [nivelEstresse, setNivelEstresse] = useState('');
  const [pressaoArterial, setPressaoArterial] = useState('');

  const enviarMedicao = async (valor, tipo, nomeCampo) => {
    if (!valor || valor.trim() === '') return false;

    const numero = Number(valor.replace(',', '.')); 
    if (isNaN(numero)) {
      throw new Error(`Valor inválido em "${nomeCampo}".`);
    }

    let resposta;

try {
  const url = `https://${IP_SERVIDOR}/dados-saude`;

  console.log("================================");
  console.log("ENVIANDO POST PARA:");
  console.log(url);
  console.log("DADOS:");
  console.log({
    valor: numero,
    idDependente: 1,
    idRelogio: 1,
    idTipoMedicao: tipo,
  });

  resposta = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      valor: numero,
      idDependente: 1,
      idRelogio: 1,
      idTipoMedicao: tipo,
    }),
  });

  console.log("RESPOSTA RECEBIDA:");
  console.log("STATUS:", resposta.status);

} catch (erroDeRede) {
  console.log("ERRO REAL DO FETCH:");
  console.log(erroDeRede);

  Alert.alert(
    "ERRO REAL",
    String(erroDeRede)
  );

  throw erroDeRede;
}

    let corpo = null;
    try {
      corpo = await resposta.json();
    } catch (_) {
      corpo = null;
    }

    if (!resposta.ok) {
      const mensagemErro =
        corpo?.erro || corpo?.error || corpo?.message || `Erro ao salvar "${nomeCampo}" (status ${resposta.status}).`;
      throw new Error(mensagemErro);
    }

    return true;
  };

  const lidarComEnvio = async () => {
  console.log('BOTAO CLICADO');

  const todosPreenchidos = [
    frequenciaCardiaca,
    saturacaoOxigenio,
    nivelEstresse,
    pressaoArterial,
  ].every((v) => v.trim() !== '');

  if (!todosPreenchidos) {
    Alert.alert(
      'Campos obrigatórios',
      'Preencha todos os campos antes de salvar.'
    );
    return;
  }

  const fc = Number(frequenciaCardiaca.replace(',', '.'));
  const sat = Number(saturacaoOxigenio.replace(',', '.'));
  const estresse = Number(nivelEstresse.replace(',', '.'));
  const pressao = Number(pressaoArterial.replace(',', '.'));

  if ([fc, sat, estresse, pressao].some(isNaN)) {
    Alert.alert(
      'Erro',
      'Digite apenas números válidos.'
    );
    return;
  }

  if (fc < 30 || fc > 220) {
    Alert.alert(
      'Valor inválido',
      'Frequência cardíaca deve estar entre 30 e 220 bpm.'
    );
    return;
  }

  if (sat < 70 || sat > 100) {
    Alert.alert(
      'Valor inválido',
      'Saturação deve estar entre 70% e 100%.'
    );
    return;
  }

  if (estresse < 0 || estresse > 100) {
    Alert.alert(
      'Valor inválido',
      'Nível de estresse deve estar entre 0 e 100.'
    );
    return;
  }

  if (pressao < 0) {
    Alert.alert(
      'Valor inválido',
      'Pressão arterial não pode ser negativa.'
    );
    return;
  }

  try {
    await enviarMedicao(fc.toString(), 1, 'Frequência Cardíaca');
    await enviarMedicao(sat.toString(), 2, 'Saturação de O₂');
    await enviarMedicao(estresse.toString(), 3, 'Nível de Estresse');
    await enviarMedicao(pressao.toString(), 5, 'Pressão Arterial');

    Alert.alert(
      'Dados Salvos',
      'Dados inseridos com sucesso.',
      [
        {
          text: 'OK',
          onPress: () => {
            setFrequenciaCardiaca('');
            setSaturacaoOxigenio('');
            setNivelEstresse('');
            setPressaoArterial('');
            navegacao.goBack();
          },
        },
      ]
    );
  } catch (erro) {
    Alert.alert(
      'Erro',
      erro.message
    );
  }
};

  return (
    <View style={estilosEntradaDados.container}>
      <View style={estilosEntradaDados.cabecalho}>
        <TouchableOpacity onPress={() => navegacao.goBack()} style={estilosEntradaDados.botaoVoltar}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={estilosEntradaDados.tituloCabecalho}>Inserir Dados Manualmente</Text>
      </View>
      <ScrollView contentContainerStyle={estilosEntradaDados.conteudoScrollView}>
        <Text style={estilosEntradaDados.rotulo}>Frequência Cardíaca (bpm):</Text>
        <TextInput
          style={estilosEntradaDados.entrada}
          keyboardType="numeric"
          placeholder="Ex: 72"
          value={frequenciaCardiaca}
          onChangeText={setFrequenciaCardiaca}
        />

        <Text style={estilosEntradaDados.rotulo}>Saturação de O₂ (%):</Text>
        <TextInput
          style={estilosEntradaDados.entrada}
          keyboardType="numeric"
          placeholder="Ex: 98"
          value={saturacaoOxigenio}
          onChangeText={setSaturacaoOxigenio}
        />

        <Text style={estilosEntradaDados.rotulo}>Nível de Estresse (0-100):</Text>
        <TextInput
          style={estilosEntradaDados.entrada}
          keyboardType="numeric"
          placeholder="Ex: 42"
          value={nivelEstresse}
          onChangeText={setNivelEstresse}
        />

        <Text style={estilosEntradaDados.rotulo}>Pressão Arterial (mmHg):</Text>
        <TextInput
          style={estilosEntradaDados.entrada}
          keyboardType="numeric"
          placeholder="Ex: 120"
          value={pressaoArterial}
          onChangeText={setPressaoArterial}
        />

        <TouchableOpacity style={estilosEntradaDados.botaoEnviar} onPress={lidarComEnvio}>
          <Text style={estilosEntradaDados.textoBotaoEnviar}>Salvar Dados</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DadosManuais;
