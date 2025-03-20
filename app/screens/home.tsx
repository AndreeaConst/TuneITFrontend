import { ImageBackground, Pressable, StyleSheet, useWindowDimensions, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';

const HomeScreen = ({ navigation } : {navigation: any}) => {
  const { width, height } = useWindowDimensions(); // Hook for dynamic screen size
  let btnStyle;
  if(width >= 1200) {
    btnStyle = styles.btnXL;
  } else if(width >= 992 && width <= 1199) {
    btnStyle = styles.btnL;
  } else if(width >= 768 && width <= 991) {
    btnStyle = styles.btnM;
  } else if(width >= 576 && width <= 767) {
    btnStyle = styles.btnSM;
  } else if(width <= 575) {
    btnStyle = styles.btnXSM;
  } 

  return (
    <View style={styles.viewStyle}>
      <ImageBackground source={require('@/assets/images/HomeScreenImage.jpeg')} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonsContainer}>

          <Button textColor="white" style={[styles.signInButton, btnStyle]} mode="elevated" onPress={() => console.log('Pressed')}>
            Sign in
          </Button>

          <Button style={[styles.signUpButton, btnStyle]} mode="elevated" onPress={() => navigation.navigate('Signup')}>
            Signup
          </Button>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  signInButton: {
    backgroundColor:'rgb(40 0 145)'
  },
  signUpButton: {
    marginTop: 20
  },
  btnXL: {
    width: '25%',
  },
  btnL: {
    width: '25%',
  },
  btnM: {
    width: '50%',
  },
  btnSM: {
    width: '50%',
  },
  btnXSM: {
    width: '50%',
  },
});

export default HomeScreen;