import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, metrics} from '../utils/Theme';
import LinearGradient from 'react-native-linear-gradient';

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {image, price, name,bgcolor} = this.props.item;
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          Navigator.navigate('ProductDetail', {
            item: this.props.item,
            category: this.props.item.categoryid,
          })
        }>
            <View 
              style={[styles.container,{...this.props.style}]}>
                <Image source={image} style={styles.image} />
                <View style={{flex: 1}}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{name}</Text>
                  <View style={{ marginTop: 10, flexDirection:'row'}}>
                    {/* <Text style={{fontSize:12,paddingRight:2}} >Pp</Text> */}
                    <Text style={styles.price}>${price}.00</Text>
                  </View>
                </View>
                <View style={styles.iconView}>
                  <Icon name="plus" color="white" size={24} />
                </View>
            </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: metrics.width / 1.3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    padding: 15,
    marginRight: 20,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 20,
    resizeMode:'cover'
  },

  iconView: {
    backgroundColor: colors.secondary,
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
    fontWeight: 'bold',
    fontSize: 16,
    color:'white'
  },
  price: {
   
    fontSize: 20,
    fontWeight: 'bold',
  },
});
