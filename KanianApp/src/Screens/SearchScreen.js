import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/Button';
import RootView from '../Components/Wrapper';
import SearchBar from '../Components/SearchBar';
import CardComponent from '../Components/FoodCard';
import {colors, fonts, metrics, text} from '../utils/Theme';
import {connect} from 'react-redux';
import data from '../../data';
import {ItemCard} from '../Components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function SearchScreen(props) {
  const [list, setlist] = useState(data.items);
  const [searchQueryText, setsearchQueryText] = useState('');

  useEffect(() => {
    var updated_list = data.items.filter((val) =>
      val.name.toLowerCase().includes(searchQueryText.toLowerCase()),
    );
    setlist(updated_list);
  }, [props, searchQueryText]);

  return (
    <RootView>
      <Header textStyle={{fontWeight:'bold'}} title={'Search Food'}></Header>
      <SearchBar textInput={{color: colors.secondary}} onChangeText={(value) => setsearchQueryText(value)} />
      <View style={{margin: metrics.defaultMargin}}>
        <Text style={{fontWeight:'bold', color: colors.secondary}}>
          <Text style={{color: colors.secondary}}>Found </Text>
          <Text style={{fontSize:18, color: colors.primary}} >{list.length} </Text>
          Results
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={list}
        // style={{padding: 0,marginHorizontal:20}}
        keyExtractor={() => Math.random().toString()}
        renderItem={({item}) => (
          <ItemCard
            item={item}
            style={{marginBottom: metrics.defaultMargin, width: '90%',marginHorizontal:20}}
          />
        )}
      />
    </RootView>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(SearchScreen);
