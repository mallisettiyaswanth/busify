import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Input } from "~/components/ui/input";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function IndexPage() {
  return (
    <View style={styles.container} className="bg-background">
      <ImageBackground
        source={require("./../assets/images/home_screen_bg.jpg")}
        style={styles.image}
        imageStyle={{ opacity: 0.15 }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "#EEF7FF"]}
          style={styles.gradient}
        />
        <View className="pt-14 p-5 flex flex-col gap-10">
          <View className="flex-row items-center justify-between">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full border border-primary h-14 w-14 bg-primary/10 shadow"
            >
              <MaterialCommunityIcons
                name="sort-reverse-variant"
                size={32}
                color="hsl(262.1 83.3% 57.8%)"
              />
            </Button>
            <View className="flex flex-row gap-3">
              <Button
                className="rounded-full h-14 w-14 bg-white border border-primary"
                size="icon"
              >
                <Feather name="bell" size={20} color="hsl(262.1 83.3% 57.8%)" />
              </Button>
              <Avatar alt="user_image" className="h-14 w-14 bg-primary/10">
                <AvatarImage
                  source={require("./../assets/images/login_page.jpg")}
                />
                <AvatarFallback>
                  <Text className="text-primary">U</Text>
                </AvatarFallback>
              </Avatar>
            </View>
          </View>
          <View className="flex flex-col gap-2">
            <Text
              className="text-blue-600 text-4xl"
              style={{
                fontWeight: "bold",
              }}
            >
              Good morning,
            </Text>
            <Text className="text-primary text-4xl tracking-tighter">
              Yaswanth
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content} className="items-center">
        <View className="border-2 w-11/12 border-zinc-300 rounded-2xl p-2 flex flex-col gap-5">
          <View className="flex gap-3 flex-col">
            <View className="flex flex-row gap-2 border-2 items-center px-3 rounded-2xl border-zinc-300">
              <FontAwesome5
                name="location-arrow"
                size={20}
                color="hsl(262.1 83.3% 57.8%)"
              />
              <Input placeholder="From" className="flex-1" />
            </View>
            <Button size="icon" variant="outline"></Button>
            <View className="flex flex-row gap-2 border-2 items-center px-3 rounded-2xl border-zinc-300">
              <Entypo
                name="location"
                size={24}
                color="hsl(262.1 83.3% 57.8%)"
              />
              <Input placeholder="From" className="flex-1" />
            </View>
          </View>
          <Button className="rounded-full bg-primary">
            <Text className="text-white text-lg font-semibold">Search</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF7FF",
  },
  image: {
    width: "100%",
    height: Dimensions.get("screen").height / 4.5,
    position: "relative",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
