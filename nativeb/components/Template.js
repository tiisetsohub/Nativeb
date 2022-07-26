import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export default function Template(props) {
    return (
        <Modal
            visible={props.templateModalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={() => {
                props.settemplateModalVisible(!props.templatemodalVisible);
            }}
        >
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <View style={styles.modalViewTop}>
                        <Pressable
                            style={styles.close}
                            onPress={() => props.settemplateModalVisible(false)}
                        >
                            <Text style={styles.textminiheadadd}> Ｘ </Text>
                        </Pressable>
                        <Text style={styles.textminihead}>{props.focus}</Text>
                        <Pressable
                            style={styles.edit}
                        >
                            <Text style={styles.textminiheadadd}>Edit</Text>
                        </Pressable>
                    </View>
                    <View style={styles.modalViewMid}>
                        <Text style={styles.textminihead}> </Text>
                    </View>
                    <Pressable style={styles.start}>
                        <Text style={styles.buttontext}>Start Workout</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: '#606070',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: 'white',
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
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    modalViewMid: {
        marginTop: 20,
    },
    close: {
        backgroundColor: '#f4dff7',
        position: 'absolute',
        left: 0,
        borderRadius: 6,
    },
    edit: {
        position: 'absolute',
        right: 0,
    },
    textminiheadadd: {
        fontSize: 15,
        color: '#d123e8'
    },
    textminihead: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    start: {
        marginTop: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d123e8',
        borderRadius: 6,
        width: '100%'
    },
    buttontext: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
});
