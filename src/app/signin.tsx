import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SignInForm } from '../components/sign-in-reverse'

const signin = () => {
  return (
    <SafeAreaView className='h-full m-4 place-content-start'>
    <ScrollView>
        <View>
      <SignInForm />
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default signin

const styles = StyleSheet.create({})