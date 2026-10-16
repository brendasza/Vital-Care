import { StyleSheet } from 'react-native';

const estilosAlertas = StyleSheet.create({

container: {
flex: 1,
backgroundColor: '#136f68',
},

header: {
backgroundColor: '#19253D',
paddingTop: 60,
paddingHorizontal: 20,
paddingBottom: 25,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
},

titulo: {
fontSize: 28,
fontWeight: 'bold',
color: '#00bfa5',
},

subtitulo: {
fontSize: 15,
color: '#C8D3E6',
marginTop: 5,
},

botaoLidas: {
width: 45,
height: 45,
backgroundColor: '#00BFA5',
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
elevation: 5,
},

card: {
backgroundColor: '#c4fbf3',
marginHorizontal: 18,
marginTop: 18,
borderRadius: 18,
padding: 18,
flexDirection: 'row',
alignItems: 'center',
elevation: 4,

shadowColor: '#000',
shadowOpacity: 0.08,
shadowRadius: 6,
shadowOffset: {
width:0,
height:2
},
},

iconeContainer:{
width:60,
height:60,
borderRadius:30,
backgroundColor:'#FDECEC',
justifyContent:'center',
alignItems:'center',
},

textos:{
flex:1,
marginLeft:15,
},

tituloCard:{
fontSize:17,
fontWeight:'700',
color:'#19253D',
},

descricao:{
fontSize:14,
color:'#666',
marginTop:4,
lineHeight:20,
},

horario:{
marginTop:10,
fontSize:13,
color:'#9AA5B1',
},

bolinha:{
width:12,
height:12,
borderRadius:6,
backgroundColor:'#EF4444',
marginLeft:10,
},

});

export default estilosAlertas;