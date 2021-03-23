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
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
      <View style={styles.wrapper}>
        <View style={styles.topContent}>
          <View style={styles.topIcons}>
          <TouchableWithoutFeedback onPress={() => Navigator.goBack()}>
            <View style={styles.backIcon} >
              <Icon name="chevron-back" color={colors.background} size={30} />
            </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Navigator.navigate('Order')}>
              <View style={styles.iconCart} >
                <Icon2 name="cart"  color={colors.background} size={30} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.heading}>{name}</Text>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
              <View style={styles.price}>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  {/* <Text style={{fontSize:12,paddingRight:2}} >Pp</Text> */}
                  <Text style={styles.priceText}>${price.replace('$', '')}.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.productDescription}>
            <Text style={styles.smallHeading}>Description:</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
        <View style={styles.bottomBtnsCont}>
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
          <TouchableWithoutFeedback  onPress={()=>Navigator.navigate('Order')}>
            <View style={styles.buyNowCont} >
             <Text style={styles.buyNowText}>Buy Now</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary
  },
  topContent: {
    height: '50%',
    width: '100%',
    marginBottom: 30,
  },
  bottomContent: {
    height: '50%',
    width: '100%',
    backgroundColor: colors.background,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  topIcons: {
    top: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginBottom: metrics.largeMargin
  },
  backIcon: {
    // backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCart: {
    // backgroundColor: colors.background,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetail: {
    paddingHorizontal: 20,
    marginBottom: 25,
    fontSize: 32,
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '70%',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
    
  },
  image: {
    width: '60%',
    height: '100%',
    resizeMode: 'contain',
  },
  price: {
    backgroundColor: colors.background,
    borderRadius: 15,
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontFamily: fonts.secondaryBold,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.secondary,
  },
  heading: {
    fontFamily: fonts.primaryBold,
    fontSize: 28,
    color: colors.background,
    fontWeight:'bold',
    textTransform: 'uppercase'
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
  productDescription: {
    margin: 35,
  },
  bottomBtnsCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom:0,
    // backgroundColor:'red',
    left: metrics.smallMargin,
    paddingHorizontal: metrics.defaultMargin,
    flex:1
  },
  buttonView: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderTopStartRadius: 30,
    paddingHorizontal: 30,
    // marginLeft: metrics.defaultMargin,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: fonts.primaryBold,
    fontWeight:'bold'
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin,
    backgroundColor: colors.primary,
    padding: 10,
   borderRadius:20,
    width: '40%',
    justifyContent: 'space-between'
  },
  buyNowCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin,
    backgroundColor: colors.primary,
    // paddingHorizontal: 10,
    // paddingVertical:5,
    borderRadius:20,
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNowText: {
    fontFamily: fonts.primaryBold,
    fontSize: 20,
    color: colors.background,
    backgroundColor: colors.primary,
    fontWeight:'bold',
    textTransform: 'capitalize',
  },
  iconView: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: colors.grey,
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
