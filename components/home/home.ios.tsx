import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>iOS home page</Text>
      <Link href="/pages/signin" asChild>
        <Text>
        SignIn
        </Text>
      </Link>
    </View>
  )
}

export default Home