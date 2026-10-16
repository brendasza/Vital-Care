import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import estilosConfiguracoes from './Telas_CSS/configuracoes_estilo';

const Configuracoes = () => {
  const navigation = useNavigation();

  const [alertasCriticos, setAlertasCriticos] = useState(true);
  const [freqCardiaca, setFreqCardiaca] = useState(true);
  const [saturacao, setSaturacao] = useState(true);
  const [estresse, setEstresse] = useState(true);
  const [relogioOffline, setRelogioOffline] = useState(true);
 

  return (
    <View style={estilosConfiguracoes.container}>

      <View style={estilosConfiguracoes.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color="#fff"
          />
        </TouchableOpacity>

        <Text style={estilosConfiguracoes.titulo}>
          Configurações
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={estilosConfiguracoes.card}>

          <Text style={estilosConfiguracoes.tituloSecao}>
            Conta
          </Text>

          <TouchableOpacity style={estilosConfiguracoes.item}>
            <Ionicons name="person-outline" size={22} color="#1e3462"/>
            <Text style={estilosConfiguracoes.texto}>
              Editar Perfil
            </Text>
            <Ionicons name="chevron-forward"/>
          </TouchableOpacity>

          <TouchableOpacity style={estilosConfiguracoes.item}>
            <Ionicons name="lock-closed-outline" size={22} color="#1e3462"/>
            <Text style={estilosConfiguracoes.texto}>
              Alterar Senha
            </Text>
            <Ionicons name="chevron-forward"/>
          </TouchableOpacity>

        </View>

        <View style={estilosConfiguracoes.card}>

          <Text style={estilosConfiguracoes.tituloSecao}>
            Notificações
          </Text>

          <View style={estilosConfiguracoes.switchItem}>
            <Text style={estilosConfiguracoes.texto}>
              Alertas Críticos
            </Text>

            <Switch
              value={alertasCriticos}
              onValueChange={setAlertasCriticos}
              trackColor={{
                false:"#ccc",
                true:"#00bfa5"
              }}
            />
          </View>

          <View style={estilosConfiguracoes.switchItem}>
            <Text style={estilosConfiguracoes.texto}>
              Frequência Cardíaca Alterada
            </Text>

            <Switch
              value={freqCardiaca}
              onValueChange={setFreqCardiaca}
              trackColor={{
                false:"#ccc",
                true:"#00bfa5"
              }}
            />
          </View>

          <View style={estilosConfiguracoes.switchItem}>
            <Text style={estilosConfiguracoes.texto}>
              Saturação Baixa
            </Text>

            <Switch
              value={saturacao}
              onValueChange={setSaturacao}
              trackColor={{
                false:"#ccc",
                true:"#00bfa5"
              }}
            />
          </View>

          <View style={estilosConfiguracoes.switchItem}>
            <Text style={estilosConfiguracoes.texto}>
              Estresse Elevado
            </Text>

            <Switch
              value={estresse}
              onValueChange={setEstresse}
              trackColor={{
                false:"#ccc",
                true:"#00bfa5"
              }}
            />
          </View>

          <View style={estilosConfiguracoes.switchItem}>
            <Text style={estilosConfiguracoes.texto}>
              Relógio sem enviar dados
            </Text>

            <Switch
              value={relogioOffline}
              onValueChange={setRelogioOffline}
              trackColor={{
                false:"#ccc",
                true:"#00bfa5"
              }}
            />
          </View>

        </View>
    
        <View style={{ height: 40 }} />

      </ScrollView>

    </View>
  );
};

export default Configuracoes;
