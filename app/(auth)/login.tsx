import { View, Text } from "react-native";
import React from "react";
import { Input } from "~/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@rn-primitives/select";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const Login = () => {
  const form = useForm();

  return (
    <View className="flex-1 bg-zinc-900 py-5">
      <View className="flex items-center text-white p-3 py-5 gap-5">
        <Text className="text-white text-3xl">Verify your details</Text>
        <Text className="text-zinc-400 px-20 text-center leading-relaxed">
          Please review and confirm your verify information for accuracy
        </Text>
      </View>
      <View className="flex flex-col gap-3 px-5">
        <View className="flex gap-4 flex-col">
          <View className="flex flex-col gap-2">
            <Label className="text-white px-3">
              <Text className="text-white/80 text-lg">Email</Text>
            </Label>
            <Controller
              control={form.control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  className="w-full bg-zinc-700 rounded-full border-none px-5 text-white shadow-sm"
                  placeholder="passenger@bus.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          <View className="flex flex-col gap-2">
            <Label className="text-white px-3">
              <Text className="text-white/80 text-lg">Password</Text>
            </Label>
            <Controller
              control={form.control}
              name="password"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  className="w-full bg-zinc-700 rounded-full border-none px-5 text-white shadow-sm"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
              )}
            />
          </View>
          <View className="w-full mt-3">
            <Button className="rounded-full">
              <Text className="text-lg text-white font-bold">Login</Text>
            </Button>
          </View>
        </View>
        <View className="flex gap-2 flex-row items-center my-10">
          <Separator className="flex-1  bg-white/40" />
          <Text className="text-white/40 flex-1">Sign in with Google</Text>
          <Separator className="flex-1  bg-white/40" />
        </View>
        <View>
          <Button className="rounded-full bg-white/10">
            <Text className="text-lg text-white font-bold">Google</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
