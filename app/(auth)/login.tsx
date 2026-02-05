import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import { Link, router } from 'expo-router';

export default function AuthWelcomeScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.heading}>Your items, found.</Text>

        <View style={styles.primaryActions}>
          <Button label="Get Started" onPress={() => router.replace('/(tabs)/report')} />
          <Button
            label="Sign In"
            variant="outline"
            style={styles.signInButton}
            onPress={() => router.replace('/(tabs)/search')}
          />
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <View style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialLabel}>Continue with Google</Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={styles.socialIcon}>f</Text>
            <Text style={styles.socialLabel}>Continue with Facebook</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputField}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputField}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
        </View>

        <Button
          label="Continue"
          style={styles.continueButton}
          onPress={() => router.replace('/(tabs)/search')}
        />

        <Text style={styles.footerText}>
          By continuing, you agree to our
          <Text style={styles.footerLink}> Terms of Service </Text>
          and
          <Text style={styles.footerLink}> Privacy Policy.</Text>
        </Text>

        <Link href="/(tabs)" style={styles.skipLink}>
          <Text style={styles.skipText}>Skip for now</Text>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingTop: 64,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconBackground: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 32,
  },
  primaryActions: {
    gap: 12,
    marginBottom: 24,
  },
  signInButton: {
    backgroundColor: '#FFFFFF',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 13,
    color: '#6B7280',
  },
  socialButtons: {
    gap: 12,
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  socialIcon: {
    width: 24,
    textAlign: 'center',
    marginRight: 12,
    fontSize: 18,
  },
  socialLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  inputContainer: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  inputField: {
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  input: {
    fontSize: 15,
    color: '#111827',
  },
  continueButton: {
    marginTop: 4,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
  footerLink: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  skipLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  skipText: {
    color: '#4F46E5',
    fontWeight: '600',
    textAlign: 'center',
  },
});
