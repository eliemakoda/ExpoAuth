import React from 'react';
import {
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import * as z from 'zod';
import {
  Mobile,
  Sms,
  Lock,
  EyeSlash,
  Eye,
  Message,
  TransmitSquare,
} from 'iconsax-react-native';
import { LanguagePicker, CardInfo } from '@chipsanalytics/ui-components-mobile';
import { theme, font } from '../constant/theme';
import PhoneInput from 'react-native-phone-number-input';
import { useState, useEffect, useRef } from 'react';
interface Props {
  navigation: any;
}
export const LoginForm = ({ navigation }: Props) => {
  const phoneInputs = useRef<PhoneInput>(null);

  const [emailSelected, SetemailSelected] = useState(true);
  const [email, setemail] = useState('');
  const [currentPassVisible, setcurrentPassVisible] = useState(true);
  const [password, setpassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submittable, setSubmittable] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [formattedValue, setFormattedValue] = useState('');
  const SignIn = () => {
    /* your signin logic here */
    if ((password && email) || (password && phoneNumber)) {
      navigation.navigate('Home');
    }
  };
  const onChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    setSubmittable(
      emailSelected
        ? email !== '' && password !== ''
        : phoneNumber !== '' && password !== ''
    );
  }, [emailSelected, email, password, phoneNumber]);

  const ForgotPassword = () => {
    navigation.navigate('ForgetPassword');
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}
    >
      <LanguagePicker
        LanguagePickerStyle={{ marginTop: '20%', marginLeft: '80%' }}
      />

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <View style={{ width: '100%' }}>
          <CardInfo
            title="Alviviance Clinic"
            titleStyle={{
              color: theme.colors.primary,
              textAlign: 'center',
              fontFamily: 'SFProDisplay-Bold',
              fontSize: 40,
              alignSelf: 'center',
              width: '100%',
            }}
            style={{
              borderRadius: 8,
              alignItems: 'center',
              borderWidth: 0,
            }}
          >
            <View style={{ marginTop: 12 }}>
              <Text style={style.signinText}>Sign into your account</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={style.message}>
                Enter your phone number or email address and password and a pin
                code to reconnect to your account.
              </Text>
            </View>
            <TouchableOpacity style={style.btncontainer}>
              <TouchableOpacity
                style={{
                  ...style.btn,
                  backgroundColor: emailSelected
                    ? theme.colors.primary
                    : theme.colors.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                }}
                onPress={() => SetemailSelected(true)}
              >
                <Sms
                  color={
                    emailSelected ? theme.colors.white : theme.colors.black
                  }
                  variant="Bulk"
                  size={20}
                />
                <Text
                  style={{
                    color: emailSelected
                      ? theme.colors.white
                      : theme.colors.black,
                    ...style.btntex,
                  }}
                >
                  Email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...style.btn,
                  backgroundColor: emailSelected
                    ? theme.colors.white
                    : theme.colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                }}
                onPress={() => SetemailSelected(false)}
              >
                <Mobile
                  color={
                    emailSelected ? theme.colors.black : theme.colors.white
                  }
                  variant="Bulk"
                  size={20}
                />
                <Text
                  style={{
                    color: emailSelected
                      ? theme.colors.black
                      : theme.colors.white,
                    ...style.btntex,
                  }}
                >
                  Mobile
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <View style={{ marginTop: 12 }}>
              <View>
                <Text style={style.label}>
                  {emailSelected ? 'Email' : 'Phone Number'}
                </Text>
                {emailSelected ? (
                  <View style={style.inputGroup}>
                    <Sms size={20} color="#637083" />
                    <TextInput
                      placeholderTextColor="#637083"
                      placeholder="  emmanuellenakita@gmail.com "
                      value={email}
                      onChangeText={(value) => setemail(value)}
                      style={style.input}
                    />
                  </View>
                ) : (
                  <View>
                    <View
                      style={{
                        ...styless.row,
                        //marginTop: "3%",
                        marginBottom: '1%',
                        maxHeight: 14,
                        maxWidth: 140,
                      }}
                    ></View>
                    <View
                      style={{
                        ...styless.row,
                        borderWidth: 0.5,
                        borderRadius: 8,
                        borderColor: '#999',
                      }}
                    >
                      <PhoneInput
                        placeholder=" "
                        ref={phoneInputs}
                        defaultValue={phoneNumber}
                        defaultCode={'CM'}
                        layout="first"
                        onChangeText={onChangePhoneNumber}
                        onChangeFormattedText={(text) => {
                          setFormattedValue(text);
                        }}
                        textContainerStyle={styles.commonContainerStyle}
                        containerStyle={{
                          ...styles.commonContainerStyle,
                          height: 42,
                        }}
                        textInputStyle={styles.commonContainerStyle}
                        countryPickerButtonStyle={styles.commonContainerStyle}
                        flagButtonStyle={{ ...styles.commonContainerStyle }}
                        codeTextStyle={{
                          ...styles.commonContainerStyle,
                        }}
                      />
                    </View>
                  </View>
                )}
              </View>

              <View style={{ marginTop: 8 }}>
                <Text style={style.label}>Password</Text>
                <View style={style.inputGroup}>
                  <Lock size={20} color="#637083" />
                  <TextInput
                    placeholderTextColor="#637083"
                    placeholder="  ****************"
                    secureTextEntry={currentPassVisible}
                    value={password}
                    onChangeText={(value) => setpassword(value)}
                    style={{ ...style.input, width: 256 }}
                  />
                  {currentPassVisible ? (
                    <TouchableOpacity
                      onPress={() => setcurrentPassVisible(!currentPassVisible)}
                    >
                      <EyeSlash size={20} color="#637083" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setcurrentPassVisible(!currentPassVisible)}
                    >
                      <Eye size={20} color="#637083" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={{
                  marginTop: 20,
                }}
                onPress={SignIn}
              >
                <View
                  style={{
                    height: 40,
                    backgroundColor: submittable
                      ? theme.colors.secondary
                      : 'transparent',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: theme.colors.secondary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'SFProDisplay-Regular',
                      color: submittable
                        ? theme.colors.white
                        : theme.colors.secondary,
                    }}
                  >
                    Sign in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </CardInfo>
          <TouchableOpacity
            style={{ paddingHorizontal: 12 }}
            onPress={ForgotPassword}
          >
            <Text
              style={{
                textAlign: 'center',
                color: theme.colors.orange,
                fontSize: 12,
                fontFamily: font.fontFamily.Bold,
                textDecorationLine: 'underline',
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  label: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 12,
  },
  formGroup: {},
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    height: 44,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderRadius: 8,
    gap: 6,
  },
  input: {
    fontSize: 16,
    fontStyle: 'normal',
    fontFamily: 'SFProDisplay-Regular',
  },
  signinText: {
    fontFamily: 'SFProDisplay-Bold',
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    color: theme.colors.primary,
  },
  message: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#4A4A4A',
    width: 351,
    height: 35,
  },
  btncontainer: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 12,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CED2DA',
    flexDirection: 'row',
  },
  btn: {
    paddingHorizontal: 20, // 12 pour mobile
    height: 40, // 40 32pour mobile
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btntex: {
    fontFamily: 'SFProDisplay-Semibold',
    fontSize: 14, // 12
  },
});

const styless = StyleSheet.create({
  container: {
    width: '70%',
    bottom: 30,
    height: 700,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  icons: {
    alignSelf: 'auto',
  },
  row: {
    flexDirection: 'row',
    //marginBottom: 16,
  },
  label: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    textTransform: 'capitalize',
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
const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -8,
    height: '100%',
  },
  phoneLabel: {
    paddingLeft: 16,
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: '#8392A1',
  },
  commonContainerStyle: {
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  codeFieldRoot: { marginBottom: 40, paddingHorizontal: 40 },
  cell: {
    width: 39,
    height: 39,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: 'green',
  },
  inputCodeFieldStyle: {
    fontSize: 24,
    fontFamily: 'SFProDisplay-Bold',
    color: '#000',
  },
  codeTextStyle: {
    fontSize: 12,
    fontFamily: 'SFProDisplay-Regular',
    lineHeight: 14,
    letterSpacing: 0.374,
    color: '#40464D',
    marginTop: 24,
    marginBottom: 48,
  },
  codeRetryStyle: {
    fontFamily: 'SFProDisplay-Bold',
    color: '#006D5B',
    textAlign: 'center',
  },
  headerTitleStyle: {
    fontSize: 36,
    fontFamily: 'SFProDisplay-Bold',
    color: '#585572',
    textAlign: 'center',
    width: '70%',

    top: 80,
  },
  headerSubtitleStyle: {
    color: 'gray',
    marginTop: 100,
  },
  phoneInputContainerStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  // *** OnboardingScreenStyles.js ***

  iconContainer: {
    backgroundColor: '#FFE9DF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#585572',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    fontFamily: 'SFProDisplay-Bold',
  },
  Flagselected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  subtitle: {
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
    marginVertical: 16,
    fontFamily: 'SFProDisplay-Regular',
  },
  startBtnStyle: {
    borderRadius: 40,
    minWidth: 140,
    paddingLeft: 8,
    marginHorizontal: 24,
    marginTop: '25%',
    backgroundColor: 'blue',
    padding: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  skipText: {
    textTransform: 'capitalize',
    color: '#8392A1',
  },

  //***  Language Switcher Style ***
  container: {
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    right: 10,
    top: 20,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  dropdown: {
    marginLeft: 10,
    marginTop: 5,
  },
  flatList: {
    maxHeight: 200,
    position: 'relative',
  },
  countryList: {
    left: -45,
    marginTop: 27,
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  countryItem: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 2,
    left: -9,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  selectedCountryItem: {
    backgroundColor: '#FFA500',
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    marginLeft: 7,
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },

  //***  HomeScreen Style ***
  sheetTitle: {
    fontSize: 16,
    fontFamily: 'SFProDisplay-Semibold',
    color: '#000',
    marginTop: 16,
    marginBottom: 32,
    letterSpacing: 0.37,
  },
  alertTextStyle: {
    marginTop: 24,
    color: '#000',
    fontSize: 20,
    fontFamily: 'SFProDisplay-Semibold',
  },
  alertMessageStyle: {
    marginBottom: 48,
    marginTop: 16,
    color: '#4A4A4A',
    width: '90%',
  },
  btnStyle: {
    marginTop: 24,
    backgroundColor: 'green',
    borderRadius: 8,
    height: 48,
  },

  //***  Billing Home Style ***
  textStyle: {
    color: '#F2F2F2',
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
  },
  commonViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 41,
    borderRadius: 43,
    backgroundColor: 'red',
  },
  titleStyle: {
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: 'SFProDisplay-Semibold',
  },
  btnContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    backgroundColor: '#DCDCE1',
    borderRadius: 43,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  tagStyle: {
    borderRadius: 8,
    width: 104,
    marginRight: 12,
  },
});
