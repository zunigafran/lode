import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SignUpForm } from '../components/sign-up-reverse'

const Signup = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <SignUpForm />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({})