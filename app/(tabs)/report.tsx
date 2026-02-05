import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Link } from 'expo-router';

export default function ReportScreen() {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Report Item</Text>

        <Card style={styles.segmentCard}>
          <View style={styles.segmentControl}>
            <View style={[styles.segmentPill, styles.segmentPillActive]}>
              <Text style={[styles.segmentLabel, styles.segmentLabelActive]}>Lost Item</Text>
            </View>
            <View style={styles.segmentPill}>
              <Text style={styles.segmentLabel}>Found Item</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.uploadCard}>
          <View style={styles.uploadPlaceholder}>
            <Text style={styles.uploadIcon}>🖼️</Text>
            <Text style={styles.uploadText}>No image selected</Text>
          </View>
          <View style={styles.uploadActions}>
            <Chip label="Camera" />
            <Chip label="Gallery" />
            <Chip label="AI Generate" />
          </View>
        </Card>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Item Title</Text>
            <View style={styles.fieldInputWrapper}>
              <TextInput
                placeholder="e.g., 'Blue Backpack' or 'Silver Watch'"
                placeholderTextColor="#9CA3AF"
                style={styles.fieldInput}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Description</Text>
            <View style={[styles.fieldInputWrapper, styles.fieldInputMultiline]}>
              <TextInput
                placeholder="Provide details: brand, color, distinguishing marks, contents..."
                placeholderTextColor="#9CA3AF"
                style={[styles.fieldInput, styles.fieldInputTextArea]}
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Location</Text>
            <View style={styles.fieldInputWrapper}>
              <TextInput
                placeholder="Enter approximate location"
                placeholderTextColor="#9CA3AF"
                style={styles.fieldInput}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>Tags</Text>
            <View style={styles.fieldInputWrapper}>
              <TextInput
                placeholder="Add tags (e.g., 'wallet', 'cafe', 'student ID')"
                placeholderTextColor="#9CA3AF"
                style={styles.fieldInput}
              />
            </View>
          </View>
        </View>

        <View style={styles.toggleRow}>
          <View style={styles.toggleText}>
            <Text style={styles.toggleLabel}>Report Anonymously</Text>
          </View>
          <Switch value={false} />
        </View>

        <Text style={styles.helperText}>
          By submitting, you agree to our terms of service. All reports are verified by Campus Find
          staff before being made public.
        </Text>

        <Button label="Submit Report" style={styles.submitButton} />

        <View style={styles.navLinks}>
          <Link href="/(tabs)/search" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Search</Text>
          </Link>
          <Link href="/(tabs)/profile" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Profile</Text>
          </Link>
          <Link href="/(tabs)/explore" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Explore</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  segmentCard: {
    padding: 8,
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: '#EEF2FF',
    borderRadius: 999,
    padding: 4,
  },
  segmentPill: {
    flex: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  segmentPillActive: {
    backgroundColor: '#6366F1',
  },
  segmentLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  segmentLabelActive: {
    color: '#FFFFFF',
  },
  uploadCard: {
    gap: 12,
  },
  uploadPlaceholder: {
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 6,
  },
  uploadIcon: {
    fontSize: 32,
  },
  uploadText: {
    fontSize: 13,
    color: '#6B7280',
  },
  uploadActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navLinks: {
    marginTop: 8,
    gap: 10,
  },
  navLink: {
    paddingVertical: 6,
  },
  navLinkText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  form: {
    gap: 14,
  },
  fieldGroup: {
    gap: 6,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  fieldInputWrapper: {
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  fieldInputMultiline: {
    minHeight: 120,
  },
  fieldInput: {
    fontSize: 15,
    color: '#111827',
  },
  fieldInputTextArea: {
    height: 96,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  toggleText: {
    flex: 1,
  },
  toggleLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  helperText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    lineHeight: 18,
  },
  submitButton: {
    marginTop: 16,
  },
});

