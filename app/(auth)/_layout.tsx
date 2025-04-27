import React, { useEffect } from "react";
import { Stack, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const _Layout = () => {
  const segments = useSegments();
  const bottomHeight = useSharedValue(0);

  useEffect(() => {
    if (segments.at(-1) !== "(auth)") {
      bottomHeight.value = withTiming(2.5, { duration: 500 });
    } else {
      bottomHeight.value = withTiming(2 / 4, { duration: 500 });
    }
  }, [segments]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: bottomHeight.value,
    };
  });

  return (
    <View className="flex-1">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <ImageBackground
        source={require("../../assets/images/login_page.jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={{ height: 400, width: "100%", position: "absolute", top: 0 }}
        />
        <View className="flex-1 bg-black/40 absolute w-full h-full" />

        <View className="flex-1 pt-12 flex flex-col gap-3">
          {segments.at(-1) === "(auth)" && (
            <View className="w-full items-end px-3">
              <Button variant="ghost">
                <Text className="text-zinc-400">Skip</Text>
              </Button>
            </View>
          )}
          <Text className="text-primary font-bold text-center w-full text-5xl">
            Busify
          </Text>
        </View>

        <Animated.View
          className="bg-zinc-900 rounded-t-3xl overflow-hidden"
          style={animatedStyle}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" options={{ title: "Auth" }} />
            <Stack.Screen name="login" options={{ title: "Login" }} />
            <Stack.Screen name="signup" options={{ title: "Signup" }} />
          </Stack>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default _Layout;
