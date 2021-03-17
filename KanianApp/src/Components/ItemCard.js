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
            <LinearGradient 
              colors={[colors.background, 'white' ]}
              locations={[0, 0.6]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={[styles.container,{backgroundColor:bgcolor,...this.props.style}]}>
                <Image source={image} style={styles.image} />
                <View style={{flex: 1}}>
                  <Text style={styles.title}>{name}</Text>
                  <Text style={styles.price}>${price}</Text>
                </View>
                <View style={styles.iconView}>
                  <Icon name="plus" color="white" size={24} />
                </View>
            </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: metrics.width / 1.3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    // shadowColor: colors.grey,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    padding: 15,
    marginRight: 20,
    borderRadius: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 20,
    resizeMode:'contain'
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
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
