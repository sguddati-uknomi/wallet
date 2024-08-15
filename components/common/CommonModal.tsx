import { IMAGES } from "@/assets/Images";
import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const CommonModal = ({
  children,
  onClose,
  modalVisible,
}: {
  children?: React.ReactNode;
  modalVisible?: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={1}
            onPress={onClose}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                alignSelf: "flex-end",
              }}
              source={IMAGES.icons.darkClose}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 24,
    width: 324,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

export default CommonModal;
