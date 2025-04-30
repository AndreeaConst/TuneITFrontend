import SvgComponentLoginScreen from '@/assets/images/login_screenSVG';
import SvgComponentLogoText160x160 from '@/assets/images/logo_text160x160SVG';
import SvgComponentLogoText300x300 from '@/assets/images/logo_text300x300SVG';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TextInput, useWindowDimensions, View, Image, ScrollView } from 'react-native';
import { Button, Checkbox, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const LogInScreen = ({ navigation } : {navigation: any}) => {
  const { width, height } = useWindowDimensions(); // Hook for dynamic screen size
  let fieldsWidth, logoMargin = -40;
  let logoImgSource = <SvgComponentLogoText300x300/>;

  if(width >= 1200) {
    fieldsWidth = styles.fieldsWidthXL;
  } else if(width >= 992 && width <= 1199) {
    fieldsWidth = styles.fieldsWidthL;
  } else if(width >= 768 && width <= 991) {
    fieldsWidth = styles.fieldsWidthM;
  } else if(width >= 576 && width <= 767) {
    fieldsWidth = styles.fieldsWidthSM;
  } else if(width <= 575) {
    fieldsWidth = styles.fieldsWidthXSM;
    logoMargin = 50;
    logoImgSource = <SvgComponentLogoText160x160/>;
  }

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [checkedRememberme, setCheckedRememberme] = useState(false);
  const [isEmailFieldFocused, setEmailFieldFocused] = useState(false);
  const [isPassFieldFocused, setPassFieldFocused] = useState(false);

  return (
    <ScrollView >
    <View>
        <SvgComponentLoginScreen 
        key={`${width}-${height}`} // Force re-render when dimensions change
          width={width} // Dynamically set width
          height={height} // Dynamically set height
          preserveAspectRatio="xMidYMid slice" // Maintain aspect ratio
          style={StyleSheet.absoluteFillObject}
        />

        <View style={[styles.loginContainer, {marginTop: logoMargin}]}>
          <SafeAreaProvider style={fieldsWidth}>
            <SafeAreaView>
              <View style={styles.logoContainer}>
                {logoImgSource}
              </View>

              <Text variant="titleMedium" style={[styles.label, {fontWeight: 'bold'}]}>Log in to your account</Text>
              <Text variant="labelMedium" style={styles.label}>Email</Text>
              <TextInput
                onChangeText={onChangeEmail}
                value={email}
                style={[styles.inputStyle, isEmailFieldFocused && styles.inputFocused]}
                onFocus={() => setEmailFieldFocused(true)}
                onBlur={() => setEmailFieldFocused(false)}
              />

              <Text variant="labelMedium" style={styles.label}>Password</Text>
              <TextInput
                onChangeText={onChangePassword}
                value={password}
                style={[styles.inputStyle, isPassFieldFocused && styles.inputFocused]}
                onFocus={() => setPassFieldFocused(true)}
                onBlur={() => setPassFieldFocused(false)}
              />
            </SafeAreaView>

            <View style={[styles.checkboxContainer]}>
              <Checkbox.Item status={checkedRememberme ? 'checked' : 'unchecked'} 
              labelStyle={{color: 'rgb(107 106 113)', fontSize:14}} label="Remember me" 
              onPress={() => {setCheckedRememberme(!checkedRememberme); }} />

              <Text style={[styles.linkLabel, {paddingLeft: 16}]}
                  onPress={() => {
                    navigation.navigate('ResetPassword')
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.d
                  }}>Forgot password?
              </Text>
            </View>

            <View>
              <Button style={styles.signupBtn} mode="elevated" onPress={() => navigation.navigate('Home')}><Text style={styles.signupBtnText}>Log in</Text></Button>

              <View style={styles.signupLabelContainer}>
                <Text variant="labelMedium" style={[styles.label, {color: 'black'}]}>
                  Don't have an account?
                </Text>

                <Text
                  style={[styles.label, styles.linkLabel]}
                  onPress={() => {
                    navigation.navigate('signup');
                  }}
                >Sign Up</Text>
              </View> 
          </View>
          </SafeAreaProvider>
        </View>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  inputFocused: {
    borderWidth: 2,
    outlineColor: 'rgb(169 10 152)',
    borderColor: 'rgb(169 10 152)' //for mobile
  },
  linkLabel: {
    color: "rgb(169 10 152)",
    fontWeight: "bold",
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 10,
    color: 'rgb(107 106 113)'
  },
  inputStyle: {
    paddingLeft: 15,
    borderRadius: 20,
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(218 207 218)'
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap'
  },
  signupLabelContainer: {
    justifyContent: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap', 
    display: 'flex',
    alignItems: 'center',
    color: 'black',
  },
  signupBtn: {
    marginTop: 20,
    fontWeight: "bold",
    backgroundColor: "rgb(169 10 152)"
  },
  signupBtnText: {
    color: "white"
  },
  fieldsWidthXL: {
    width: '30%',
  },
  fieldsWidthL: {
    width: '36%',
  },
  fieldsWidthM: {
    width: '50%',
  },
  fieldsWidthSM: {
    width: '50%',
  },
  fieldsWidthXSM: {
    width: '70%'
  }
});

export default LogInScreen;