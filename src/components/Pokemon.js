import { View, Text ,FlatList, Image,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'

const Pokemon =({name,pic, types, desc})=>{
    return(
        <SafeAreaView>
        <View style={styles.mainDetails}>
            <Image style={styles.image} source={{url:pic}} resizeMode="contain"/>
            <Text style={styles.matinText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
            <FlatList
                // columnWrapperStyle={styles.types}
                data={types}
                // numColumns={2}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=> (
                    <View style={[styles[item.name],styles.type]}>
                        <Text style={styles.typeText}>{item.name}</Text>
                    </View>
                )}
            />
            <View style={styles.description}>
                <Text>
                    {desc}
                </Text>
            </View>
        </View>
    </SafeAreaView>
    );
}

export default Pokemon;

const styles = StyleSheet.create({
    mainDetails:{
        padding:30,
        alignItem:'center'
    },
    image:{
        width:200,
        height:200,
        left:60

    },
    matinText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    description:{
        marginTop:20,
        left:50,
    },
    types:{
        flexDirection:'row',
        marginTop:20
    },
    type:{
        padding:5,
        width:100,
        alignItems:'center',
        left:110,
        marginTop:10,
        
    },
    typeText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
        // left:110
    },
    normal:{
        backgroundColor:'#8a8s59'
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
