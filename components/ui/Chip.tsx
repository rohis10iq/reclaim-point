import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.base, active ? styles.active : styles.inactive]}>
      <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  active: {
    backgroundColor: '#EEF2FF',
    borderColor: '#6366F1',
  },
  inactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  labelActive: {
    color: '#4F46E5',
  },
  labelInactive: {
    color: '#6B7280',
  },
});


