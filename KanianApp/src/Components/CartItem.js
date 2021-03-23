import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts, metrics} from '../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, image, price, bgcolor, description} = this.props.item;
    return (
      <View 
        style={[styles.container,]}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft:10}}>
          <Image
            style={[styles.image, {backgroundColor: bgcolor}]}
            source={image}
          />
          <View style={{flex: 1, marginRight:7}}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
            <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom: 5,}}>
                  <View style={{ marginTop: 10, flexDirection:'row'}}>
                    {/* <Text style={{fontSize:12,paddingRight:2}} >Pp</Text> */}
                    <Text style={styles.price}>${price}.00</Text>
                  </View>
                <View style={styles.quantityView}>
                  <Icon
                    name="plus-circle"
                    style={styles.icon}
                    color='black'
                    onPress={this.props.onAdd}
                  />
                  <Text style={styles.quantity}>{this.props.quantity}</Text>
                  <Icon
                    name="minus-circle"
                    style={styles.icon}
                    onPress={this.props.onMinus}
                  />
                </View>
              </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: metrics.defaultMargin,
    marginBottom: metrics.smallMargin,
    marginTop:0,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor:colors.primary,

  },
  image: {
    width: 80,
    height: 80,
    borderRadius:20,
    marginRight: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    marginTop:10,
    color:'white',
    fontWeight:'bold'
  },
  desc:{
    color: colors.secondary,
    marginVertical: 5,
  },
  price: {
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    
  },
  quantityView: {
    backgroundColor: colors.lightBackground,
    padding: 5,
    borderRadius: 20,
    marginRight: 10,
    marginVertical: 5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  quantity: {
    alignSelf: 'center',
    marginHorizontal: 8,
    fontWeight:'bold'
  },
  icon: {
    fontSize: 24,
    color: colors.primary,
  },
});
