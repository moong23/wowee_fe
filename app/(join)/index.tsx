import React from "react";
import { Platform, Text, View } from "react-native";
import SignUpButton from "@/components/SignUpButton";
import AppleIcon from "@/assets/icons/AppleIcon";
import KakaoIcon from "@/assets/icons/KakaoIcon";

const JoinScreen = () => {
  return (
    <View className="flex items-start justify-between w-full h-full pt-16 pb-24 px-14">
      <View className="pt-32">
        <Text className="text-title">지금 바로{"\n"}우리아이</Text>
      </View>
      <View className="flex flex-col w-full gap-4">
        {Platform.OS === "ios" ? (
          <SignUpButton
            Icon={() => <AppleIcon />}
            text="애플로 회원가입"
            className="bg-gray-apple"
            fontClassName="color-white"
            onPress={() => {
              console.log("ios 회원가입");
            }}
          />
        ) : (
          <SignUpButton
            Icon={() => <AppleIcon />}
            text="구글로 회원가입"
            className="bg-gray-apple"
            fontClassName="color-white"
            onPress={() => {
              console.log("ios 회원가입");
            }}
          />
        )}
        <SignUpButton
          Icon={() => <KakaoIcon />}
          text="카카오 간편 회원가입"
          className="bg-yellow-kakao"
          fontClassName="color-[#0E1117]"
          onPress={() => {
            console.log("android 회원가입");
          }}
        />
      </View>
    </View>
  );
};

export default JoinScreen;
