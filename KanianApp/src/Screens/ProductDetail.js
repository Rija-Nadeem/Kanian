import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native';
import {View, Text} from 'react-native';
import {HorizontalList, Wrapper} from '../Components';
import {colors, fonts, metrics} from '../utils/Theme';
import {
  SafeAreaView,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigator from '../utils/Navigator';
import data from '../../data';
import {connect} from 'react-redux';
import {addItem, deleteItem} from '../Redux/actions';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addItem = () => {
    this.props.addItem(this.props.route.params.item);
  };

  deleteItem = () => {
    this.props.deleteItem(this.props.route.params.item);
  };

  render() {
    const {
      name,
      image,
      description,
      price,
      bgcolor,
      id,
    } = this.props.route.params.item;

    const flag = this.props.cart?.items.filter((val) => val.id == id);
    const quantity = flag.length !== 0 ? flag[0].quantity : 0;

    return (
      <Wrapper top={0} bottom={0} style={{backgroundColor: bgcolor}}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={image} />
        </View>
        <TouchableWithoutFeedback onPress={() => Navigator.goBack()}>
          <View style={styles.backIcon}>
            <Icon name="chevron-back" color="black" size={30} />
          </View>
        </TouchableWithoutFeedback>
        <View style={{paddingHorizontal: metrics.defaultMargin}}>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.smallHeading}>Description:</Text>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.quantityView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.deleteItem}
              style={styles.iconView}>
              <Icon name="remove" style={{...styles.icon}} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.addItem}
              style={styles.iconView}>
              <Icon name="add" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
            <TouchableWithoutFeedback
              // onPress={() =>
              //   Navigator.navigate('Checkout', {
              //     item: this.props.route.params.item,
              //   })}
              onPress={() =>
                Navigator.navigate('Order')}
              >
              <View
                style={[
                  styles.buttonView,
                  {paddingBottom:30},
                ]}>
                <Text style={styles.buttonText}>
                  Price: $ {price.replace('$', '')}
                </Text>
                <Text style={styles.buttonText}>Go to Cart</Text>
              </View>
            </TouchableWithoutFeedback>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: metrics.width,
    height: '90%',
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: fonts.secondaryBold,
    fontSize: 28,
    marginBottom: metrics.defaultMargin,
    color: colors.secondary,
    fontWeight:'bold'
  },
  smallHeading: {
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    marginBottom: metrics.defaultMargin,
    fontWeight:'bold'
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: metrics.defaultMargin,
    color: colors.secondary,
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonView: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderTopStartRadius: 30,
    paddingHorizontal: 30,
    marginLeft: metrics.defaultMargin,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: fonts.primaryBold,
    fontWeight:'bold'
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: metrics.defaultMargin,
    backgroundColor: colors.background,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin,
  },
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, {addItem, deleteItem})(ProductDetail);
