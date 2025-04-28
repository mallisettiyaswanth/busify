import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@rn-primitives/select";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Snackbar } from "react-native-paper";

const Signup = () => {
  const form = useForm();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const onSubmit = (data: any) => {
    const { name, email, password } = data;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!name) {
      setSnackbarMessage("Name is required");
      setSnackbarVisible(true);
      return;
    }
    if (!email) {
      setSnackbarMessage("Email is required");
      setSnackbarVisible(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setSnackbarMessage("Please enter a valid email");
      setSnackbarVisible(true);
      return;
    }
    if (!password) {
      setSnackbarMessage("Password is required");
      setSnackbarVisible(true);
      return;
    }
    if (password.length < 6) {
      setSnackbarMessage("Password must be at least 6 characters");
      setSnackbarVisible(true);
      return;
    }

    console.log("Signup successful", data);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-[#EEF7FF] py-5">
          <View className="flex items-center text-white p-3 py-5 gap-5">
            <Text className="text-black text-3xl">Create an account</Text>
            <Text className="text-black/50 px-20 text-center leading-relaxed">
              Please fill in your details to create a new account
            </Text>
          </View>

          <View className="flex flex-col gap-3 px-5">
            <View className="flex gap-4 flex-col">
              {/* Name */}
              <View className="flex flex-col gap-2">
                <Label className="px-3">
                  <Text className="text-black/60 text-lg">Name</Text>
                </Label>
                <Controller
                  control={form.control}
                  name="name"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                      className="w-full bg-white border border-zinc-200 rounded-full border-none px-5 text-black shadow-sm"
                      placeholder="John Doe"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
              </View>

              {/* Email */}
              <View className="flex flex-col gap-2">
                <Label className="px-3">
                  <Text className="text-black/60 text-lg">Email</Text>
                </Label>
                <Controller
                  control={form.control}
                  name="email"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                      className="w-full bg-white border border-zinc-200 rounded-full border-none px-5 text-black shadow-sm"
                      placeholder="you@example.com"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
              </View>

              {/* Password */}
              <View className="flex flex-col gap-2">
                <Label className="px-3">
                  <Text className="text-black/60 text-lg">Password</Text>
                </Label>
                <Controller
                  control={form.control}
                  name="password"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      className="w-full bg-white border border-zinc-200 rounded-full border-none px-5 text-black shadow-sm"
                      placeholder="••••••"
                    />
                  )}
                />
              </View>

              {/* Signup Button */}
              <View className="w-full mt-3">
                <Button
                  className="rounded-full"
                  onPress={form.handleSubmit(onSubmit)}
                >
                  <Text className="text-lg text-white font-bold">Sign Up</Text>
                </Button>
              </View>
            </View>

            {/* Divider */}
            <View className="flex gap-2 flex-row items-center my-7">
              <Separator className="flex-1 bg-black/40" />
              <Text className="text-black/40 flex-1 text-center">
                Sign up with Google
              </Text>
              <Separator className="flex-1 bg-black/40" />
            </View>

            {/* Google Button */}
            <Button
              className="rounded-full bg-white flex gap-2 flex-row items-center"
              variant="outline"
            >
              <AntDesign
                name="google"
                size={20}
                color="hsl(262.1 83.3% 57.8%)"
              />
              <Text className="text-lg text-primary font-bold flex-1 text-center">
                Google
              </Text>
            </Button>
          </View>

          {/* Terms & Privacy */}
          <View className="flex flex-row items-center justify-center px-24 text-center mt-5">
            <Text className="text-black/40 text-center mt-5 leading-relaxed text-xs">
              By signing up, you agree to our{" "}
              <Text className="text-primary">Terms of Service</Text> and{" "}
              <Text className="text-primary">Privacy Policy</Text>
            </Text>
          </View>

          {/* Snackbar */}
          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            duration={2000}
            style={{
              backgroundColor: "hsl(262.1 83.3% 57.8%)",
              borderRadius: 10,
              marginBottom: 40,
            }}
            action={{
              label: "Dismiss",
              onPress: () => setSnackbarVisible(false),
              textColor: "white",
            }}
          >
            <Text className="text-white text-lg">{snackbarMessage}</Text>
          </Snackbar>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
