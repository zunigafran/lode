import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { useColorScheme } from 'nativewind';
import { Image, Platform, View } from 'react-native';
import { Text } from './ui/text';

const SOCIAL_CONNECTION_STRATEGIES = [
  {
    type: 'oauth_apple',
    source: { uri: 'https://img.clerk.com/static/apple.png?width=160' },
    useTint: true,
    name: 'Apple',
  },
  {
    type: 'oauth_google',
    source: { uri: 'https://img.clerk.com/static/google.png?width=160' },
    useTint: false,
    name: 'Google',
  },
  {
    type: 'oauth_facebook',
    source: { uri: 'https://img.clerk.com/static/facebook.png?width=160' },
    useTint: false,
    name: 'Facebook',
  },
];

interface SocialLoginProps {
  mode: 'login' | 'signup';
}

export function SocialLogin({ mode }: SocialLoginProps) {
  const { colorScheme } = useColorScheme();
  const actionText = mode === 'login' ? 'Login with' : 'Sign up with';

  return (
    <View className="gap-2 sm:flex-row sm:gap-3">
      {SOCIAL_CONNECTION_STRATEGIES.map((strategy) => {
        return (
          <Button
            key={strategy.type}
            variant="outline"
            size="sm"
            className="rounded-full outline-2 sm:flex-1"
            onPress={() => {
              // TODO: Authenticate with social provider and navigate to protected screen if successful
            }}>
            <Image
              className={cn('size-4', strategy.useTint && Platform.select({ web: 'dark:invert' }))}
              tintColor={Platform.select({
                native: strategy.useTint ? (colorScheme === 'dark' ? 'white' : 'black') : undefined,
              })}
              source={strategy.source}
            />
            <Text> {actionText}{` `}{strategy.name}</Text>
          </Button>
        );
      })}
    </View>
  );
}
