"use dom"
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WebHome({ name }: { name: string }) {
  return (
    <SafeAreaView>
    <View>
      <Text>WebHome {name}</Text>
    </View>
    </SafeAreaView>
  )
}