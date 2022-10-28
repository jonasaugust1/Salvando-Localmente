import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { useEffect, useState } from "react"
import {Nota} from './src/componentes/Nota'
import { buscaNotas, criaTabela } from "./src/servicos/Notas"

export default function App() {
  const [notas, setNotas] = useState([])
  const [notaSelecionada, setNotaSelecionada] = useState({});

  useEffect(() => {
    criaTabela()
    mostraNotas()
  }, [])

  async function mostraNotas() {
    const todasNotas = await buscaNotas()
    setNotas(todasNotas)
    console.log(todasNotas)
  }

  // async function mostraNotas() {
  //   const chaves = await AsyncStorage.getAllKeys()
  //   const notas = await AsyncStorage.multiGet(chaves)
  //   setNotas(notas)
  //   console.log(notas)
  // }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada} />}
        keyExtractor={nota => nota.id}/>
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

