import React, {memo,useState, useEffect } from 'react';
import {ScrollView,Platform,Image,Button,View } from 'react-native';
import UserItem from '../../../components/UserItem';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';




const Add_Post = memo(() => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.getMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
        
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log(status)
      
      }else{
        console.log(status)
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
    }
   
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
});

export default Add_Post;

