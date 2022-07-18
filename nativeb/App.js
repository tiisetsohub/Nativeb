import { StyleSheet, Text, View, Pressable, FlatList, Modal, TextInput } from 'react-native';
import { useState, useReducer } from 'react';
import Header from './components/header';

const reducer = (templates, action) => {
  switch (action.type) {
    case 'add':
      return [...templates, newItem(action.payload.name)]
    case 'remove':
      return templates.filter(templates => templates.name !== action.payload.name)
    default:
      return templates
  }
}

const newItem = (name) => {
  return {mesocyclename: name, microcycles: []}
}

export default function App() {
  const [templates, dispatch] = useReducer(reducer, []);
  const [templateName, setTemplateName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const handleAddTemplate = () => {
    dispatch({ type: 'add', payload: { name: templateName } })
    setModalVisible(!modalVisible)
    setTemplateName('')

  }
  return (
    <View style={styles.container}>
      <Header title="Start Workout"/>
      <View style={styles.viewquickstart}>
        <Text style={styles.text}>Quick Start</Text>
        <Pressable style={styles.start}>
          <Text style={styles.buttontext}>Start a Workout</Text>
        </Pressable>
      </View>
      <View style={styles.viewminihead}>
        <Text style={styles.textminihead}>Templates</Text>
        <Pressable style={styles.buttonadd} onPress={() => setModalVisible(true)}>
          <Text style={styles.textminiheadadd}>＋Add</Text>
        </Pressable>
      </View>
      <View style={styles.viewscroll}>
        <Modal 
          visible={modalVisible}
          transparent={true}
          animationType = 'fade'
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalViewTop}>
                <Pressable
                  style={styles.close}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textminiheadadd}> Ｘ </Text>
                </Pressable>
                <Text style={styles.textminihead}>Add New Mesocycle</Text>
              </View>
              <View style={styles.modalViewMid}>
                <Text style={styles.text}>Mesocycle Name</Text>
                <View style={styles.modalinputview}>
                  <TextInput 
                    value={templateName}
                    placeholder='Add mesocycle'
                    style={styles.input}
                    onChangeText={value => setTemplateName(value)}
                  />
                  <Pressable
                    style={styles.buttonadd}
                    onPress={handleAddTemplate}>
                    <Text style={styles.textminiheadadd}>Save</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  viewquickstart: {
    marginTop: 30,
    width: '95%',
    alignItems: 'flex-start',
  },
  text: {
    color : 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  start: {
    marginTop: 15,
    padding : 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d123e8',
    borderRadius : 6,
    width: '100%'
  },
  buttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  },
  viewminihead: {
    marginTop : 20,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  textminihead: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textminiheadadd: {
    fontSize: 15,
    color: '#d123e8'
  },
  buttonadd: {
    padding: 5,
    backgroundColor: '#f4dff7',
    borderRadius : 6
  },
  viewscroll: {
    width: '95%',
    backgroundColor: 'red'
  },
  centeredView: {
    backgroundColor: '#606070', 
    opacity : 0.8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
  backgroundColor: 'white',
  opacity: 1,
  width: '95%',
  borderRadius: 20,
  padding: 10,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
  modalViewTop: {
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection : 'row',
    width: '100%'
  },
  close: {
    backgroundColor: '#f4dff7',
    position: 'absolute',
    left : 0,
    borderRadius : 6,
  },
  modalViewMid: {
    marginTop : 20,
  },
  input: {
    width: ' 80%',
    borderWidth : 1,
    height: 28,
    borderRadius : 6,
    paddingHorizontal : 5,
    marginRight : 5
  },
  modalinputview: {
    marginTop : 5,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },

});
