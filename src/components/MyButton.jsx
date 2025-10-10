import React from "react";
import { Button } from "react-native";

const MyButton = () => {
  return (
    <Button
      title="Press Here"
      onPress={() => alert("Button Pressed!")}
      color="red"
    />
  );
};

export default MyButton;
