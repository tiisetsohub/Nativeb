import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
    return (
    <View style={styles.viewhead}>
        <Text style={styles.texthead}>{props.title}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    viewhead: {
        marginTop: 70,
        width: '95%',
        alignItems: 'flex-start',
    },
    texthead: {
        fontWeight: 'bold',
        fontSize: 35,
    },
});
