import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../../global.css"
import { Button } from '../components/ui/button'
import { Text } from '../components/ui/text'

const IosHome = () => {
  return (
    <SafeAreaView>
     <View>
     <Text>IosHome</Text>
     <Button variant="destructive">
      <Text>Destructive</Text>
    </Button>
    <Button variant="secondary">
      <Text>Secondary</Text>
    </Button>
    <Button>
      <Text>Button</Text>
    </Button>
    <Button variant="outline" size="icon">
    <Text>Icon</Text>
    </Button>
    </View>
    </SafeAreaView>
  )
}

export default IosHome

const styles = StyleSheet.create({})