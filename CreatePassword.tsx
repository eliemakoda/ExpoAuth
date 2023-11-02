import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { ImageBackground } from 'react-native';
import React from 'react';
import { Mobile, Sms, Lock, EyeSlash, Eye } from 'iconsax-react-native';
import { useState } from 'react';
// import Styles from "../../Styles/signincss";
import { CardInfo } from '@chipsanalytics/ui-components-mobile';
// import tw from "twrnc";
import { LanguagePicker } from '@chipsanalytics/ui-components-mobile';
import { theme, font } from '../constant/theme';
import { useEffect } from 'react';
import Background from '../../../assets';

interface Props {
  navigation: any;
}
export default function CreatePassword({ navigation }: Props) {
  const [password1, setpassword1] = useState('');
  const [pass1Visible, setpass1Visible] = useState(true);
  const [password2, setpassword2] = useState('');
  const [pass2Visible, setpass2Visible] = useState(true);
  const [submittable, setSubmittable] = useState(false);
  useEffect(() => {
    setSubmittable(password1 !== '' && password2 !== '');
  }, [password1, password2]);
  const onResetPassword = () => {
    if (password1 && password2) {
      /* your create password logic here and navigate */
      navigation.navigate('ConfirmScreen');
    }
  };
  //("../../../assets/Rectangle 834.png"
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
            borderRadius: 90,
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
          width: 320,
          borderWidth: 0,
          marginVertical: 50,
          borderRadius: 8,
          alignSelf: 'center',
          // opacity:1
          // zIndex:-1
          marginTop: 133,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginLeft: '25%',
            zIndex: -2,
          }}
        >
          <View style={{ alignItems: 'center' }}></View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 12,
          }}
        >
          <Text
            style={{
              color: '#442463',
              fontSize: 18,
              textAlign: 'center',
              fontFamily: font.fontFamily.Medium,
              // fontWeight: "bold",
            }}
          >
            create new password
          </Text>
          <View style={{ paddingTop: '1%', marginTop: '3%' }}>
            <Text
              style={{
                color: '#4A4A4A',
                fontSize: 14,
                textAlign: 'center',
                fontFamily: font.fontFamily.Regular,
              }}
            >
              Type in your new password and confirm it.
            </Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View style={{ marginTop: '5%' }}>
            <View style={{ ...styless.row, marginTop: '5%' }}></View>
            <View
              style={{
                ...styless.row,
                borderWidth: 0.5,
                borderRadius: 8,
                borderColor: '#999',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lock size={20} color="gray" style={{ marginLeft: 12 }} />

              <TextInput
                style={{
                  ...styless.input,
                  fontFamily: font.fontFamily.Regular,
                }}
                value={password1}
                placeholder="enter your new password"
                secureTextEntry={pass1Visible}
                onChangeText={(value) => setpassword1(value)}
              />
              <TouchableOpacity
                onPress={() => {
                  setpass1Visible(!pass1Visible);
                }}
              >
                {pass1Visible ? (
                  <EyeSlash
                    size={20}
                    color="gray"
                    style={{ marginRight: '2%' }}
                  />
                ) : (
                  <Eye size={20} color="gray" style={{ marginRight: '2%' }} />
                )}
              </TouchableOpacity>
            </View>

            <View style={{ ...styless.row, marginTop: '5%' }}></View>
            <View
              style={{
                ...styless.row,
                borderWidth: 0.5,
                borderRadius: 8,
                borderColor: '#999',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lock size={20} color="gray" style={{ marginLeft: 12 }} />

              <TextInput
                style={{
                  ...styless.input,
                  fontFamily: font.fontFamily.Regular,
                }}
                value={password2}
                placeholder="confirm your new password"
                secureTextEntry={pass2Visible}
                onChangeText={(value) => setpassword2(value)}
              />
              <TouchableOpacity
                onPress={() => {
                  setpass2Visible(!pass2Visible);
                }}
              >
                {pass2Visible ? (
                  <EyeSlash
                    size={20}
                    color="gray"
                    style={{ marginRight: '2%' }}
                  />
                ) : (
                  <Eye size={20} color="gray" style={{ marginRight: '2%' }} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            // ...tw`mt-3 items-center rounded-lg`,
            borderRadius: 8,
            backgroundColor: submittable
              ? theme.colors.secondary
              : 'transparent',
            display: 'flex',
            //width: "95%",
            paddingHorizontal: 14,
            gap: 8,
            height: 40,
            marginTop: '10%',
            // borderRadius: 8,
            marginVertical: '7%',
            borderWidth: 1,
            borderColor: theme.colors.secondary,
          }}
          onPress={onResetPassword}
        >
          <View style={{ marginTop: '3%' }}>
            <Text
              style={{
                color: submittable
                  ? theme.colors.white
                  : theme.colors.secondary,
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: font.fontFamily.Bold,
              }}
            >
              Create Password
            </Text>
          </View>
        </TouchableOpacity>
      </CardInfo>
    </ImageBackground>
  );
}

const styless = StyleSheet.create({
  container: {
    width: '100%',
    bottom: 30,
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 12,

    borderWidth: 0,
  },
  row: {
    flexDirection: 'row',
    //marginBottom: 16,
  },
  label: {
    flex: 1,
    color: '#000',
    //fontWeight: "bold",
    textAlign: 'left',
    fontSize: 14,
    fontFamily: font.fontFamily.Regular,
  },
  input: {
    flex: 1,
    //borderWidth: 0.5,
    padding: 8,
    //borderColor: '#999',
    // borderRadius: 8,
    width: 400,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButtonStyle: {
    color: 'white',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: 'green',
  },
  cancelButton: {
    backgroundColor: 'orange',
  },
  buttonStyle: {
    width: 100,
    height: 42,
    borderRadius: 10,
    alignItems: 'center', // Align icon and text horizontally
  },
});
