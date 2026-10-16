import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import estilosAlertas from './Telas_CSS/Alertas_estilo';

const Alertas = () => {

  const [notificacoes] = useState([
    {
      id: 1,
      tipo: 'critico',
      titulo: 'Frequência cardíaca elevada',
      descricao: 'José da Silva registrou 145 bpm.',
      horario: 'Agora',
      lida: false,
    },
  ]);

  return (
    <View style={estilosAlertas.container}>

      {/* Cabeçalho */}

      <View style={estilosAlertas.header}>

        <View>
          <Text style={estilosAlertas.titulo}>
            Notificações
          </Text>

          <Text style={estilosAlertas.subtitulo}>
            Alertas recebidos do relógio inteligente
          </Text>
        </View>

        <TouchableOpacity style={estilosAlertas.botaoLidas}>
          <Ionicons
            name="checkmark-done"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

      </View>

      {/* Lista */}

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {notificacoes.map((item) => (

          <TouchableOpacity
            key={item.id}
            style={estilosAlertas.card}
          >

            <View
              style={estilosAlertas.iconeContainer}
            >

              <Ionicons
                name="warning"
                size={30}
                color="#EF4444"
              />

            </View>

            <View
              style={estilosAlertas.textos}
            >

              <Text style={estilosAlertas.tituloCard}>
                {item.titulo}
              </Text>

              <Text style={estilosAlertas.descricao}>
                {item.descricao}
              </Text>

              <Text style={estilosAlertas.horario}>
                {item.horario}
              </Text>

            </View>

            <View
              style={estilosAlertas.bolinha}
            />

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
};

export default Alertas;