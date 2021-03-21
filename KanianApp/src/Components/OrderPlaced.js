import React, {Component} from 'react';
import {Modal, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';

export default class OrderPlaced extends Component {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        transparent={true}
        animationType="fade">
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <View style={styles.iconView}>
              <Icon name="check-decagram" style={styles.icon} color={colors.primary} size={120} />
            </View>
            <Text style={styles.title}>
              Order Confirmed!
            </Text>
            <Text style={{fontSize:18, textAlign:'center', marginBottom:10}} >We will get back to you with your order
              shortly</Text>
            <View style={{borderRadius: 10, overflow: 'hidden',marginVertical:10}}>
              <Text onPress={this.props.onPress} style={styles.button}>Ok</Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: 'white',
    width: metrics.width * 0.8,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  iconView: {
    backgroundColor: 'transparent',
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    // marginVertical: 20,
  },
  // icon:{
  //   width: 100,
  //   height: 100,
  // },
  title: {
    fontSize: 22,
    fontFamily: fonts.primaryBold,
    textAlign: 'center',
    marginTop: 20,
    marginBottom:10,
    // lineHeight: 32,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.secondary,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.secondaryBold,
    fontWeight:'bold'
  },
});
