import { View, FlatList, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { useRouter } from "expo-router";
import { cn } from "~/lib/utils";
import Animated, {
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const FEATURES = [
  {
    id: "1",
    title: "Welcome to Busify",
    description:
      "Be polite for your choice and enjoy the ride. Book your bus ticket from a wide list of coach companies.",
  },
  {
    id: "2",
    title: "Easy Booking",
    description: "Book your favorite seats instantly with our smooth UI.",
  },
  {
    id: "3",
    title: "Secure Payments",
    description: "All your transactions are encrypted and secure.",
  },
  {
    id: "4",
    title: "Real-time Tracking",
    description: "Track your bus location live on the map in real-time.",
  },
  {
    id: "5",
    title: "24/7 Support",
    description: "Facing an issue? We’re just a call or text away anytime.",
  },
];

const AuthScreen = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedRef = useAnimatedRef<Animated.FlatList<any>>();

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    }
  ).current;

  return (
    <View className="flex-1 bg-zinc-900 py-5 gap-7">
      <View className="flex flex-col">
        <Animated.FlatList
          ref={animatedRef}
          data={FEATURES}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              className={cn("items-center justify-center gap-2 px-5")}
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width * 0.3,
              }}
            >
              <Text className="text-3xl font-bold text-white text-center">
                {item.title}
              </Text>
              <Text className="text-zinc-400 text-base font-light text-center">
                {item.description}
              </Text>
            </View>
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />

        <View className="flex-row justify-center gap-1">
          {FEATURES.map((_, index) => (
            <AnimatedDot key={index} isActive={currentIndex === index} />
          ))}
        </View>
      </View>

      <View className="flex-row gap-5 mt-8 px-5">
        <Button
          onPress={() => router.push("/(auth)/login")}
          className="flex-1 rounded-full"
          variant="secondary"
        >
          <Text>Login</Text>
        </Button>
        <Button
          onPress={() => router.push("/(auth)/signup")}
          className="flex-1 rounded-full"
          variant="default"
        >
          <Text>Join</Text>
        </Button>
      </View>
    </View>
  );
};

const AnimatedDot = ({ isActive }: { isActive: boolean }) => {
  const width = useSharedValue(8);
  const backgroundColor = useSharedValue("#71717a");

  React.useEffect(() => {
    width.value = withTiming(isActive ? 16 : 8, {
      duration: 200,
      easing: Easing.ease,
    });
    backgroundColor.value = withTiming(isActive ? "#6d28d9" : "#71717a", {
      duration: 200,
      easing: Easing.ease,
    });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: 4,
      borderRadius: 9999,
      backgroundColor: backgroundColor.value,
    };
  });

  return <Animated.View style={animatedStyle} />;
};

export default AuthScreen;
