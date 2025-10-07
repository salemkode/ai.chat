import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { withUniwind } from "uniwind";
const GlassView = withUniwind(View)
const LinearGradient = withUniwind(View)

export default function HomeScreen() {
  return (
    <LinearGradient
      className="pt-8 flex-1"
    // Button Linear Gradient
    //colors={['black', '#7D0F3F']}
    //locations={[0.5, 0.8]}
    >
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <View className="h-20 mt-auto rounded-3xl bg-pink-400/50 border border-gray-400/20">
          <TextInput placeholder="Message T3 chat" placeholderTextColorClassName="text-red-300"
            className="p-3 text-xl text-white placeholder:text-red-300" />
          <GlassView className="h-5 w-5 mt-auto rounded-3xl bg-pink-400">
            <Text>+</Text>
          </GlassView>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
