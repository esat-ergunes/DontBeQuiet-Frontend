import React, {memo, useCallback,useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View,Text} from 'react-native';
import keyExtractor from 'ultis/keyExtractor';
import {useNavigation} from '@react-navigation/native';
import ButtonLinear from 'components/buttons/ButtonLinear';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {width_screen} from 'ultis/dimensions';
import ROUTES from 'ultis/routes';
import HashtagItem from '../../screens/SelectHashtag/components/HashtagItem';
import AsyncStorage from '@react-native-community/async-storage';
import dontBeQuietApi from '../../api/dontBequiet'
import { ScrollView } from 'react-native-gesture-handler';








/*const data = [
    {
      source: require('../../assets/SelectHashtag/1.png'),
      title: '#No Povrety',
      des: '3.4K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/2.png'),
      title: '#Zero Hunger',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/3.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/4.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/5.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/6.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },{
      source: require('../../assets/SelectHashtag/7.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/8.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/9.png'),
      title: '#Indusry_Innovation_and_Infrastructure',
      des: '1K+ events',
    },
    
    {
      source: require('../../assets/SelectHashtag/10.png'),
      title: '#Reduced_Inequalities',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/11.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/12.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/13.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/14.png'),
      title: '#Good Health and Well-being',
      des: '3K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/15.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/16.png'),
      title: '#Good Health and Well-being',
      des: '1K+ events',
    },
    {
      source: require('../../assets/SelectHashtag/17.png'),
      title: '#Good Health and Well-being',
      des: '4K+ events',
    },
  ];*/


const SelectHashtag = memo(() => {
   
    
    const {navigate} = useNavigation();
    const onMaintab = useCallback(() => {
      // Display an interstitial
  
        navigate(ROUTES.MainBottomTab);
  
    }, []);
  const numColumn=2;
    const renderItem = useCallback(({item}) => {
      const {source, title, des} = item;
      return <HashtagItem source={source} title={title} des={des} />;
    }, []);

    const [dataB,setDataB] = useState();
    async function _getAllHashTags(){
       
        try {
          const response = await dontBeQuietApi.get("/interests").then(res => {
            var data = res.data.data.data[0].interests
             //console.log(data)
             setDataB(data);
          })
        
        } catch (error) {
          console.log(error.message)
        }
    
      }

      _getAllHashTags();

      

      //console.log(dataB);






    return (
      
      <View style={styles.container}>

          

          <ScrollView 
          showsVerticalScrollIndicator={false}
           
            contentContainerStyle={{marginHorizontal:10}}
          >
        <FlatList
          data={dataB}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          numColumns={numColumn}
          style={styles.list}
        />
        </ScrollView>
        
      </View>
      
    );
  });
  
  export default SelectHashtag;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      flexDirection: 'row',
      flexWrap:"wrap",
      justifyContent: 'space-between',
     
    },
    list: {
      paddingTop: 24,
      marginBottom:60,
     
     
    },
  
    btnNext: {
      position: 'absolute',
      bottom: getBottomSpace() + 8,
      width: width_screen - 48,
      height: 50,
      alignSelf: 'center',
      borderRadius: 100,
    },
  });
  