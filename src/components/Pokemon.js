import { View, Text ,FlatList, Image,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'

const Pokemon =({name,pic, types, desc})=>{
    // ทำให้รายละเอียดเปลี่ยนจากหลายบรรทัดเป็นบรรทัดเดียว
    desc = desc.replace(/\n/g, ' ')
    return(
        <View style={styles.mainDetails}>
            <Image style={styles.image} source={{uri: pic}} resizeMode="contain" />
            <Text style={styles.matinText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
            <View style={styles.typesContainer}>
                {
                types.map((item, key) => (
                    <View style={[styles[item.name],styles.type]} key={key}>
                        <Text style={styles.typeText}>{item.name.charAt(0) + item.name.slice(1)}</Text>
                    </View>
                ))
                }
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    {desc}
                </Text>
            </View>
        </View>
    );
}

export default Pokemon;

const styles = StyleSheet.create({
    mainDetails:{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 7
    },
    image:{
        marginTop: 10,
        width:200,
        height:200,
        alignSelf: 'center'
    },
    matinText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    typesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    type:{
        padding: 5,
        width: '40%',
        alignItems:'center',
        marginVertical: 14,
        borderRadius: 7
    },
    typeText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    description:{
        paddingHorizontal: 30
    },
    descriptionText: {
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: 'bold'
    },
    normal:{
        backgroundColor:'#A8A878'
    },
    fire:{
        backgroundColor:'#f08030'
    },
    water:{
        backgroundColor:'#6890f0'
    },
    electric:{
        backgroundColor:"#f8d030",
    },
    grass:{
        backgroundColor:'#78c850'
    },
    ice:{
        backgroundColor:'#98d8d8'
    },
    fighting:{
        backgroundColor:'#c03028'
    },
    poison:{
        backgroundColor:'#a04028'
    },
    ground:{
        backgroundColor:'#e9c968'
    },
    flying:{
        backgroundColor:'#a890f0'
    },
    physic:{
        backgroundColor:'#f85888'
    },
    bug:{
        backgroundColor:'#a85800'
    },
    rock:{
        backgroundColor:'#b8a038'
    },
    ghost:{
        backgroundColor:'#705898'
    },
    dragon:{
        backgroundColor:'#7038f8'
    },
    dark:{
        backgroundColor:'#705848'
    },
    steel:{
        backgroundColor:'#b8b8d0'
    },
    fairy:{
        backgroundColor:'#e898e8'
    }
});
