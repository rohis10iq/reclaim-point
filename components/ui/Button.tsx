import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'lg' | 'md';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  style,
  disabled,
  loading,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        size === 'lg' ? styles.sizeLg : styles.sizeMd,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        variant === 'ghost' && styles.ghost,
        isDisabled && styles.disabled,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#6366F1' : '#FFFFFF'} />
      ) : (
        <Text
          style={[
            styles.label,
            variant === 'outline' && styles.labelOutline,
            variant === 'ghost' && styles.labelGhost,
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeLg: {
    height: 52,
    paddingHorizontal: 24,
  },
  sizeMd: {
    height: 44,
    paddingHorizontal: 18,
  },
  primary: {
    backgroundColor: '#6366F1',
  },
  outline: {
    borderWidth: 1.5,
    borderColor: '#6366F1',
    backgroundColor: '#FFFFFF',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  labelOutline: {
    color: '#6366F1',
  },
  labelGhost: {
    color: '#111827',
  },
});


