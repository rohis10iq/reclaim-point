import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';

interface TextFieldProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  containerStyle,
  style,
  ...inputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholderTextColor="#9CA3AF"
          style={[styles.input, style]}
          {...inputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  inputWrapper: {
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  input: {
    fontSize: 15,
    color: '#111827',
  },
});


