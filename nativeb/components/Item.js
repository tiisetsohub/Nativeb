import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Item(props){

    const handlefocus = () => {
        props.settemplateModalVisible(true)
        props.setFocus(props.title)
    }
    return (
        <Pressable onPress={handlefocus}>
            <View style={styles.item}>
                <Text>{props.title}</Text>
                <Pressable onPress={() => console.log('work')} style={styles.optionsbutton} >
                    <Text style = {styles.optiontext}>···</Text>
                </Pressable>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#f4dff7",
        padding: 10,
        marginVertical: 8,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent : "space-between"
    },
    optionsbutton: {
        backgroundColor: 'white',
        borderWidth : 1,
        borderColor: 'white',
        borderRadius : 3,
        paddingHorizontal : 2
    },
    optiontext: {
        color: '#d123e8'
    }
});
