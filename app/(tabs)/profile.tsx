import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';

import { Card } from '@/components/ui/Card';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.headerIcons}>
            <Text style={styles.headerIcon}>⚙️</Text>
            <Text style={styles.headerIcon}>⋯</Text>
          </View>
        </View>

        <Card style={styles.userCard}>
          <View style={styles.userRow}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Haziqa Khan</Text>
              <Text style={styles.userPhone}>11223334444</Text>
              <View style={styles.userLocationRow}>
                <Text style={styles.userLocationIcon}>📍</Text>
                <Text style={styles.userLocationText}>University Campus, Hostel</Text>
              </View>
            </View>
          </View>
        </Card>

        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuLabel}>My Reports</Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuLabel}>Notification Settings</Text>
            </View>
            <Switch value />
          </View>

          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuLabel}>Help</Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuLabel}>Admin Tools</Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <View>
              <Text style={styles.menuLabel}>Change Password</Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </View>
        </View>

        <View style={styles.navLinks}>
          <Link href="/(tabs)/report" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Report</Text>
          </Link>
          <Link href="/(tabs)/search" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Search</Text>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIcon: {
    fontSize: 18,
  },
  userCard: {
    padding: 16,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
    gap: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  userPhone: {
    fontSize: 14,
    color: '#4B5563',
  },
  userLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLocationIcon: {
    marginRight: 4,
    fontSize: 13,
  },
  userLocationText: {
    fontSize: 13,
    color: '#6B7280',
  },
  menu: {
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  menuLabel: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
  menuChevron: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  navLinks: {
    marginTop: 16,
    gap: 10,
  },
  navLink: {
    paddingVertical: 6,
  },
  navLinkText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
});

