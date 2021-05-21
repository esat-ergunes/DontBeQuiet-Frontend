import React, {memo, useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FONTS from 'ultis/fonts';
import IconArrowDown from 'svgs/IconArrowDown';
import ItemTag from 'screens/Filter/components/ItemTag';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {width_screen} from 'ultis/dimensions';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import ButtonLinear from 'components/buttons/ButtonLinear';
import CheckBox from 'components/CheckBox';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'ultis/routes';



const Filter = memo(() => {
  const [valuesDistance, setValuesDistance] = useState([1]);
  const [valuesPriceDistance, setValuesPriceDistance] = useState([10, 250]);
  const [isFree, setFree] = useState(false);
  const navigation = useNavigation();

  const onValuesDistanceChange = useCallback(values => {
    setValuesDistance(values);
  }, []);
  const onValuesPriceChange = useCallback(values => {
    setValuesPriceDistance(values);
  }, []);
  const onPressCheck = useCallback(() => {
    setFree(!isFree);
  }, [isFree]);
  const onPressShowAllEvent = useCallback(() => {

  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.optionHeader}>
          <Text style={styles.textOptionHeader}>When</Text>
          <TouchableOpacity>
            <IconArrowDown />
          </TouchableOpacity>
        </View>
        <View style={styles.hashTagView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemTag active={false} tagName={'All dates'} />
            <ItemTag active={true} tagName={'Today'} />
            <ItemTag active={false} tagName={'Tomorrow'} />
            <ItemTag active={false} tagName={'This week'} />
          </ScrollView>
        </View>

        <View style={styles.optionHeader}>
          <Text style={styles.textOptionHeader}>HashTag</Text>
          <TouchableOpacity>
            <IconArrowDown />
          </TouchableOpacity>
        </View>
        <View style={styles.hashTagView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ItemTag active={false} tagName={'All hashtag'} />
            <ItemTag active={true} tagName={'#Zero Hungry'} />
            <ItemTag active={false} tagName={'#Climate action '} />
            <ItemTag active={true} tagName={'#Reduced inequalities '} />
            
          </ScrollView>
        </View>
        

        <View style={styles.distanceHeader}>
          <Text style={styles.textOptionHeader}>Distance</Text>
          <Text style={styles.textDistance}>{valuesDistance[0]}Km</Text>
        </View>
        <MultiSlider
          min={1}
          max={50}
          containerStyle={styles.slider}
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          sliderLength={(327 / 375) * width_screen}
          values={valuesDistance}
          onValuesChange={onValuesDistanceChange}
        />
        <View style={styles.checkFree}>
          <CheckBox
            onPress={onPressCheck}
            isCheck={isFree}
            borderColor={'#7F8FA6'}
            checkedColor={'#7FFA50'}
          />
          <Text style={styles.textChecker}>Only free events</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <ButtonLinear
          title={'Show 100+ events'}
          style={styles.bottomButton}
          onPress={onPressShowAllEvent}
        />
      </View>
    </View>
  );
});

export default Filter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textOptionHeader: {
    fontSize: 16,
    fontFamily: FONTS.Medium,
    lineHeight: 25,
  },
  hashTagView: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 40,
  },
  star: {
    marginRight: 16,
  },
  rateStar: {
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 40,
  },
  textDistance: {
    fontSize: 16,
    fontFamily: FONTS.Medium,
    color: 'black',
    marginLeft: 8,
  },
  distanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackStyle: {
    height: 4,
    backgroundColor: '#F1F1F1',
  },
  selectedStyle: {
    backgroundColor: '#1D1D1B',
  },
  slider: {
    marginTop: 12,
    marginBottom: 35,
    paddingHorizontal: 8,
  },
  checkStyle: {
    padding: 0,
    backgroundColor: '#fff',
    borderColor: '#fff',
    width: 26,
    marginLeft: 0,
  },
  textChecker: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    color: '#353B48',
    marginLeft: 8,
    
  },
  bottomButton: {
    height: 50,
    borderRadius: 100,
  },
  buttonView: {
    paddingBottom: getBottomSpace() + 16,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },
  checkerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkFree: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});
