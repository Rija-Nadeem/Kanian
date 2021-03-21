import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {colors, metrics} from '../utils/Theme';
import {
  SafeAreaView,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

class Wrapper extends Component {
  render() {
    const {top, bottom, showTopDrop} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar
          backgroundColor={ showTopDrop? colors.primary: colors.background}
          barStyle="dark-content"
        />
       
        <SafeAreaInsetsContext.Consumer>
          {(insets) => (
            <View
              style={{
                flex: 1,
                marginTop: top == 0 ? top : insets.top,
                paddingBottom: bottom == 0 ? bottom : insets.bottom,
                ...this.props.style,
              }}>
                <>
                
              {this.props.children}
              </>
            </View>
          )}
        </SafeAreaInsetsContext.Consumer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backview:{
    backgroundColor:colors.primary,
    width: metrics.width,
    height:'29%',
    position:'relative',
    top:0,
    left:0,
    borderBottomRightRadius:35,
    borderBottomLeftRadius:35,
  }
})

export default Wrapper;
