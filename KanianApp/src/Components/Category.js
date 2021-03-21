import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  FoodCard,
  FoodIcon,
  HorizontalList,
  ItemCard,
  Wrapper,
} from '../Components';
import {colors, fonts, metrics} from '../utils/Theme';
import data from '../../data'

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:''
    };
  }

  render() {
      const {item,index,onPress,selected} = this.props;
    return (
        <TouchableWithoutFeedback
          onPress={onPress}>
          <View style={styles.category}>
            <View style={[styles.catImg,
            {
              backgroundColor:
                selected ? colors.secondary: 'white'
            },
            ]}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={[
              styles.catText,
              {
                  fontWeight:selected ? 'bold':'normal',
              },
              ]}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
    category: {
      // width:125,
      // padding:10,
      // backgroundColor:'red',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',

      
    },
    catImg:{
      backgroundColor:colors.secondary,
      padding:10,
      borderRadius:20,
      marginHorizontal:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    image:{
      width:50,
      height:40,
      resizeMode:'contain'
    },
    catText:{
      // fontFamily: fonts.primary,
      fontSize: 12,
      marginVertical:10,
      color:colors.secondary
    },
    categoryText: {
      fontFamily: fonts.primary,
      fontSize: 14,
      textAlign: 'center',
      width:'100%',
      marginVertical:10
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 5,
      marginTop:5
    },
  });
  