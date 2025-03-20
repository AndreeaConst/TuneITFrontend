import React from "react";
import { useWindowDimensions, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const SignupScreen = () => {
    const { width, height } = useWindowDimensions(); // Hook for dynamic screen size
    let btnStyle;
    /*if(width >= 1200) {
      btnStyle = styles.btnXL;
    } else if(width >= 992 && width <= 1199) {
      btnStyle = styles.btnL;
    } else if(width >= 768 && width <= 991) {
      btnStyle = styles.btnM;
    } else if(width >= 576 && width <= 767) {
      btnStyle = styles.btnSM;
    } else if(width <= 575) {
      btnStyle = styles.btnXSM;
    } */

    const [text, setText] = React.useState("");
  
    return (
      <View>
        <Text variant="titleMedium">Sign up</Text>
        <TextInput
          label="Username"
          value={text}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon icon="person" />}
        />
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          value={text}
          onChangeText={text => setText(text)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button textColor="white" mode="elevated" onPress={() => console.log('Pressed')}>
            Create account
        </Button>
         
      </View>
    );
  }

  export default SignupScreen;