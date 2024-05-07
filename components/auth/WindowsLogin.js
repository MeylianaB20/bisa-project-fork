import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import {
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from "expo-auth-session";
import { useState } from "react";

WebBrowser.maybeCompleteAuthSession();

const WindowsLogin = () => {
  const navigation = useNavigation();

  const discovery = useAutoDiscovery(
    "https://login.microsoftonline.com/9029d1bf-84ff-4fb3-80de-e7dc18e9810b/v2.0"
  );

  const redirectUri = makeRedirectUri({
    scheme: undefined,
    path: "auth",
  });
  const clientId = "19f985f9-9f70-4bf8-ac51-f80412111f06";

  const [token, setToken] = useState("");

  const [request, , promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ["openid", "profile", "email", "offline_access"],
      redirectUri,
    },
    discovery
  );

  return (
    <View style={styles.layout}>
      <TouchableOpacity
        disabled={!request}
        style={styles.touchLayout}
        onPress={() => {
          promptAsync().then((codeResponse) => {
            if (request && codeResponse?.type === "success" && discovery) {
              exchangeCodeAsync(
                {
                  clientId,
                  code: codeResponse.params.code,
                  extraParams: request.codeVerifier
                    ? { code_verifier: request.codeVerifier }
                    : undefined,
                  redirectUri,
                },
                discovery
              ).then((res) => {
                setToken(res.accessToken);
                navigation.navigate("HomeTabs");
              });
            }
          });
        }}
      >
        <Image
          style={styles.windowsImage}
          source={require("../../assets/images/windows.png")}
        />
        <Text style={styles.signInWithMicrosoftText}>
          Sign In with Microsoft
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  touchLayout: {
    width: 320,
    height: 43,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: "#C6C6C6",
    borderWidth: 1,
  },

  windowsImage: {
    width: 33,
    height: 33,
  },

  signInWithMicrosoftText: {
    color: "#999090",
    paddingLeft: 20,
  },
});

export default WindowsLogin;
