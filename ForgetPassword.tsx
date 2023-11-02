import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
// import Styles from "../../Styles/signincss";
// import tw from "twrnc";
import { Sms, ArrowSquareLeft, CopySuccess } from 'iconsax-react-native';
import { useState, useEffect } from 'react';
import { CardInfo } from '@chipsanalytics/ui-components-mobile';
import { LanguagePicker } from '@chipsanalytics/ui-components-mobile';
import { theme, font } from '../constant/theme';
import Background from '../../../assets';

interface Props {
  navigation: any;
}

export default function ForgetPassword({ navigation }: Props) {
  const [btnEnable, setEnable] = useState(false);

  const [email, setemail] = useState('');
  const [EmailSend, setEmailSend] = useState(false);
  const [submittable, setSubmittable] = useState(false);

  useEffect(() => {
    setSubmittable(email !== '');
  }, [email]);

  const BackToSignIn = () => {
    navigation.navigate('signin');
  };
  const OnclickSignin = () => {
    setEnable(true);
    if (email) {
      setTimeout(() => {
        navigation.navigate('ResetPassword');
      }, 3000);
    }
  };
  const SendResetPassword = () => {
    /* your reset password logic here */
    if (email) {
      console.log('Email send..');
      navigation.navigate('ResetPassword');
    }
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
        title="Forgot password?"
        titleStyle={{
          fontSize: 30,
          color: '#442463',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: font.fontFamily.Bold,
        }}
        style={{
          marginTop: '30%',
          display: 'flex',
          width: '95%',
          backgroundColor: 'white',
          borderWidth: 0,
          paddingVertical: '12%',
          marginLeft: '2%',
        }}
      >
        <View style={{ marginTop: '7%' }}>
          <Text
            style={{
              color: 'gray',
              fontFamily: font.fontFamily.Medium,
              fontStyle: 'normal',
              textAlign: 'center',
              // ...tw`sm:text-lg lg:text-xl xl:text-3xl`,
              fontSize: 14,
            }}
          >
            Enter your email address and a reset password link will be sent to
            your email.
          </Text>
        </View>

        <View style={{ marginTop: '5%' }}>
          <View style={{ ...styless.row, marginTop: '5%' }}>
            <Text
              style={{ ...styless.label, fontFamily: font.fontFamily.Medium }}
            >
              Email
            </Text>
          </View>
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
            <Sms size={20} color="gray" style={{ marginLeft: 12 }} />

            <TextInput
              style={styless.input}
              value={email}
              placeholder="enter your email"
              onChangeText={(value) => setemail(value)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            // ...tw`mt-3 items-center rounded-lg`,
            // borderRadius: ,
            backgroundColor: submittable
              ? theme.colors.secondary
              : 'transparent',
            display: 'flex',
            //width: "95%",
            paddingHorizontal: 14,
            gap: 8,
            height: 40,
            marginTop: '10%',
            borderRadius: 8,
            marginVertical: '7%',
            borderWidth: 1,
            borderColor: theme.colors.secondary,
          }}
          onPress={SendResetPassword}
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
              Send
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '95%',
            alignItems: 'center',
            marginLeft: '42%',
            height: 40,
          }}
          onPress={BackToSignIn}
        >
          <Text
            style={{
              color: theme.colors.orange,
              fontFamily: font.fontFamily.Bold,
              fontSize: 14,
              textAlign: 'center',
            }}
          >
            Signin
          </Text>
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
