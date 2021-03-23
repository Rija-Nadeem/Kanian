import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';
import Fav from './Fav';

export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // printFirstName=(name)=>{
  //   s = name.split(/(?<=^\S+)\s/)
  //   return s[0];
  // }
  // printSecondName=(name)=>{
  //   s = name.split(/(?<=^\S+)\s/)
  //   return s[1] ? s[1] : '';
  // }

  render() {
    const {name, image, description, price,bgcolor,isFav} = this.props.item;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Navigator.navigate('ProductDetail',{item:this.props.item,category:this.props.category})}>
        <View style={[styles.container,{backgroundColor:colors.primary}]}>
          <View style={styles.titleContainer} >
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {name.substr(0,name.indexOf(' '))}{'\n'}{name.substr(name.indexOf(' ')+1)}
              </Text>
          </View>
          <View style={styles.imageView}>
            <Image source={image} style={styles.image} />
          </View>
          <Fav isFav={isFav} item={this.props.item}/>
          
          <View style={styles.detailView}>
            
            {/* <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Text> */}
            <View style={{flexDirection:'row',}} >
              {/* <View style={{paddingRight:2}}>
                <Text style={{fontSize: 12 }}>Pp</Text> 
              </View> */}
              <Text style={styles.price}>
                ${price.replace('$', '')}.00
              </Text>
            </View>
            
            <View style={styles.iconView}>
              <Icon name="plus" color="white" size={24} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    marginRight: metrics.defaultMargin,
    borderRadius:50,
    borderBottomRightRadius:10,

  },
  imageView: {
    width: '100%',
    height: 200,
    // alignSelf:'center',
    backgroundColor:'transparent',
    borderRadius:30,
    // marginVertical:15,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'cover'
  },
  detailView: {
    paddingLeft: 30,
    paddingBottom: 20,
    paddingRight: 10,
    borderRadius: 15,
  },
  iconView: {
    backgroundColor: colors.secondary,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
   margin:5
  },
  titleContainer:{
    // width:'80%'
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondaryBold,
    paddingHorizontal:25,
    paddingTop:20,
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  desc: {
    color: colors.grey,
    marginVertical: 5,
    fontFamily: fonts.secondary,
  },
  price: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: fonts.secondaryBold,
  },
});
