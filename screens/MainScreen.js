import {View, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../utils/constants/colors';

function MainScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateUser() {
    console.log('update_user');
  }

  function triggerEvent() {
    console.log('custom_event');
  }
  function userLogin() {
    console.log('user_login');
  }
  function userLogout() {
    console.log('user_logout');
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer]}>
          <Title>Test App</Title>
          <Card>
            <InstructionText style={styles.instructionText}>
              User Login/Logout
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={userLogin}>Login</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={userLogout}>Logout</PrimaryButton>
              </View>
            </View>
          </Card>
          <Card>
            <InstructionText style={styles.instructionText}>
              Push a Button
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={updateUser}>Update User</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={triggerEvent}>
                  Trigger an Event
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default MainScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
