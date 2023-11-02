import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import CreatePassword from './CreatePassword';
import { LanguagePicker } from '@chipsanalytics/ui-components-mobile';
import { CardInfo } from '@chipsanalytics/ui-components-mobile';
import { CopySuccess, TextalignCenter } from 'iconsax-react-native';
import Background from '../../../assets';
import { theme, font } from '../constant/theme';
interface Props {
  navigation: any;
}
export default function ConfirmScreen({ navigation }: any) {
  const Return = () => {
    //your logic here
    console.log('password verified returnining to signin...');
    navigation.navigate('signin');
  };
  return (
    <ImageBackground
      source={Background}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        marginTop: 30,
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: '#3E1C44',
          opacity: 0.8,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingTop: 0,
          marginTop: 15,
        }}
      >
        <Image
          source={require('../../../assets/img.jpg')}
          style={{
            height: 60,
            width: 60,
            // ...tw`rounded-lg`,
            borderRadius: 64,
          }}
        />
        <LanguagePicker
          LanguagePickerStyle={{ width: 60, position: 'relative' }}
        />
      </View>

      <CardInfo
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: '85%',
          marginVertical: '50%',
          marginHorizontal: '7%',
        }}
      >
        <View
          style={{
            // ...tw`flex-row mt-10 items-center text-center`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: '#442463',
              //fontWeight: "bold",
              backgroundColor: 'white',
              fontFamily: font.fontFamily.Bold,
              textAlign: 'center',
            }}
          >
            Clinic Alviviane
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D9F2E5',
            width: '23%',
            marginLeft: '38%',
          }}
        ></View>
        <View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 24,
              paddingTop: 24,
              fontFamily: font.fontFamily.Bold,
              color: '#5C8833',
              textAlign: 'center',
            }}
          >
            Successful password reset!
          </Text>
        </View>
        <View style={{ padding: 12 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: '#4A4A4A',
              fontFamily: font.fontFamily.Regular,
            }}
          >
            You can now use your new password to sign-in to your account
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#5C8833',
            marginBottom: 20,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'gray',
            // ...tw`w-85 rounded-lg`,
            width: '95%',
            height: 40,
            maxWidth: 85,
            borderRadius: 64,
          }}
          onPress={Return}
        >
          <View style={{ marginTop: '1%', width: '100%' }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Sign-in
            </Text>
          </View>
        </TouchableOpacity>
      </CardInfo>
    </ImageBackground>
  );
}
