import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconurl, dimention, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconurl}
        resizeMode="cover"
        style={styles.btnImg(dimention)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
