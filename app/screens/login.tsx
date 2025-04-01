import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TextInput, useWindowDimensions, View, Image } from 'react-native';
import { Button, Checkbox, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const LogInScreen = ({ navigation } : {navigation: any}) => {
  const { width, height } = useWindowDimensions(); // Hook for dynamic screen size
  let fieldsWidth, signupWidth;

  const logoImgs = {
    small: {
      imgName: 'Small', 
      uri: require('@/assets/images/logo_text160x160.svg')
    },
    regular: {
      imgName: 'Regular', 
      uri: require('@/assets/images/logo_text300x300.svg')
    }
  }

  let logoImgSource = logoImgs.regular.uri;

  if(width >= 1200) {
    fieldsWidth = styles.fieldsWidthXL;
    signupWidth = styles.signupWidthXL;
  } else if(width >= 992 && width <= 1199) {
    fieldsWidth = styles.fieldsWidthL;
    signupWidth = styles.signupWidthL;
  } else if(width >= 768 && width <= 991) {
    fieldsWidth = styles.fieldsWidthM;
  } else if(width >= 576 && width <= 767) {
    fieldsWidth = styles.fieldsWidthSM;
    signupWidth = styles.fieldsWidthSM;
  } else if(width <= 575) {
    fieldsWidth = styles.fieldsWidthXSM;
    signupWidth = styles.fieldsWidthXSM;
    logoImgSource = logoImgs.small.uri;
  }

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [checkedRememberme, setCheckedRememberme] = useState(false);
  const [isEmailFieldFocused, setEmailFieldFocused] = useState(false);
  const [isPassFieldFocused, setPassFieldFocused] = useState(false);

  return (
    <View style={styles.viewContainer}>
      <ImageBackground source={require('@/assets/images/login_screen.svg')} resizeMode="cover" style={styles.image}>
        <View style={styles.loginContainer}>
          <SafeAreaProvider style={fieldsWidth}>
            <SafeAreaView>
              <View style={styles.logoContainer}>
                <Image source={logoImgSource}/>
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
          </SafeAreaProvider>

          <View style={signupWidth}>
              <Button style={styles.signupBtn} mode="elevated" onPress={() => navigation.navigate('Home')}><Text style={styles.signupBtnText}>Log in</Text></Button>
              
              <Text variant="labelMedium" style={[styles.label,{justifyContent: 'center', display:'flex', flexWrap: 'wrap', color: 'black'}]}>Don't have an account? &nbsp;&nbsp;
                  <Text style={styles.linkLabel}
                    onPress={() => {
                      navigation.navigate('signup')
                      // Navigate after signing in. You may want to tweak this to ensure sign-in is
                      // successful before navigating.d
                    }}>Sign Up</Text>
                </Text>  
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: -45
  },
  inputFocused: {
    borderWidth: 2,
    outlineColor: 'rgb(169 10 152)'
  },
  linkLabel: {
    color: "rgb(169 10 152)",
    fontWeight: "bold"
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    paddingLeft: 10,
    color: 'rgb(107 106 113)'
  },
  inputStyle: {
    paddingLeft: 15,
    borderRadius: '20px',
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(218 207 218)'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  viewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap'
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
    width: '50%',
  },
  signupWidthXL: {
    width: '20%',
  },
  signupWidthL: {
    width: '25%',
  },
});

export default LogInScreen;