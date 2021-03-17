import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';
import Fav from './Fav';
// import ImageView from './ImageView';
import LinearGradient from 'react-native-linear-gradient';

export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, image, description, price,bgcolor,isFav} = this.props.item;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Navigator.navigate('ProductDetail',{item:this.props.item,category:this.props.category})}>
        <View style={styles.container}>
          <LinearGradient
           colors={[colors.background, 'white' ]}
           locations={[0, 0.8]}
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 1 }}
           style={styles.linearGrad}
          >
            <View style={styles.imageView}>
              <Image source={image} style={styles.image} />
            </View>
            
            <View style={styles.detailView}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
              <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
                {description}
              </Text>
              <Text style={styles.price}>
                ${price.replace('$', '')}
              </Text>
              <View style={styles.iconView}>
                <Fav style={{top:-4}} isFav={isFav} item={this.props.item}/>
              </View>

            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    marginRight: metrics.defaultMargin,
    marginBottom: metrics.defaultMargin,
    borderRadius:30,
    backgroundColor:colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,

  },
  linearGrad:{
    borderRadius:30,
  },
  imageView: {
    width: 100,
    height: 100,
    alignSelf:'center',
    // backgroundColor:'white',
    borderRadius:30,
    marginVertical:15,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'contain'
  },
  detailView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,


  },
  iconView: {
    backgroundColor: 'transparent',
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondaryBold,
    fontWeight:'bold'
  },
  desc: {
    color: colors.grey,
    marginVertical: 5,
    fontFamily: fonts.secondary,
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: fonts.secondaryBold,
    fontWeight:'bold'
  },
});
