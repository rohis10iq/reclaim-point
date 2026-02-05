import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { Link } from 'expo-router';

export default function SearchScreen() {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Search Items</Text>

        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search for items or upload image..."
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
          <View style={styles.filterIcon}>
            <Text style={styles.filterText}>⏵</Text>
          </View>
        </View>

        <View style={styles.chipsRow}>
          <Chip label="All Items" active />
          <Chip label="Lost" />
          <Chip label="Found" />
          <Chip label="Electronics" />
        </View>

        <View style={styles.cards}>
          <Card style={styles.itemCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg' }}
              style={styles.itemImage}
            />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>Blue Backpack Found</Text>
              <Text style={styles.itemDescription} numberOfLines={2}>
                Found near the university library entrance. Appears to be a standard student backpack.
              </Text>
              <View style={styles.itemMetaRow}>
                <Text style={styles.itemLocation}>📍 University Library</Text>
                <View style={styles.matchBadge}>
                  <Text style={styles.matchText}>High Match</Text>
                </View>
              </View>
            </View>
          </Card>

          <Card style={styles.itemCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/18105/pexels-photo.jpg' }}
              style={styles.itemImage}
            />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>Silver Laptop Lost</Text>
              <Text style={styles.itemDescription} numberOfLines={2}>
                Last seen in the main study hall on the second floor. May have a few stickers on the lid.
              </Text>
              <View style={styles.itemMetaRow}>
                <Text style={styles.itemLocation}>📍 Main Study Hall</Text>
                <View style={[styles.matchBadge, styles.matchBadgeLow]}>
                  <Text style={[styles.matchText, styles.matchTextLow]}>Possible Match</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.navLinks}>
          <Link href="/(tabs)/report" style={styles.navLink}>
            <Text style={styles.navLinkText}>Go to Report</Text>
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
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    marginRight: 8,
  },
  filterIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 16,
    color: '#4F46E5',
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  cards: {
    gap: 16,
  },
  itemCard: {
    padding: 0,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 180,
  },
  itemContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  itemDescription: {
    fontSize: 13,
    color: '#6B7280',
  },
  itemMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  itemLocation: {
    fontSize: 13,
    color: '#4B5563',
  },
  matchBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#EEF2FF',
  },
  matchText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4F46E5',
  },
  matchBadgeLow: {
    backgroundColor: '#ECFEFF',
  },
  matchTextLow: {
    color: '#0891B2',
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

