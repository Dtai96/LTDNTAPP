import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
}

export default function HomeScreen() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Laptop Gaming',
      price: '18.990.000đ',
      image: require('../../assets/images/products/laptopgay.jpg'),
    },
    {
      id: '2',
      name: 'Điện thoại',
      price: '12.500.000đ',
      image: require('../../assets/images/products/ip.jpg'),
    },
    {
      id: '3',
      name: 'Tai nghe',
      price: '1.290.000đ',
      image: require('../../assets/images/products/headphone.webp'),
    },
    {
      id: '4',
      name: 'Bàn phím',
      price: '890.000đ',
      image: require('../../assets/images/products/kb.jpg'),
    },
  ];

  const sections = [
    {
      title: 'Công nghệ',
      data: ['Laptop mới 2026', 'Điện thoại nổi bật', 'Phụ kiện công nghệ'],
    },
    {
      title: 'Khuyến mãi',
      data: ['Giảm giá 20%', 'Miễn phí vận chuyển', 'Voucher 500.000đ'],
    },
  ];

  const renderProduct = ({ item }: { item: Product }) => {
    return (
      <View style={styles.productCard}>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />

        <Text style={styles.productName}>{item.name}</Text>

        <Text style={styles.productPrice}>{item.price}</Text>

        <Pressable
          style={styles.buyButton}
          onPress={() => console.log('Mua:', item.name)}
        >
          <Text style={styles.buyButtonText}>Mua ngay</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>TechShop</Text>
          <Text style={styles.headerDescription}>
            Xin chào 👋
          </Text>
        </View>

        <Pressable style={styles.avatarButton}>
          <Text style={styles.avatarText}>DT</Text>
        </Pressable>
      </View>

      {/* NỘI DUNG CÓ THỂ CUỘN */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* KHU VỰC THÔNG TIN CHÍNH */}
        <View style={styles.banner}>
          <View style={styles.bannerLeft}>
            <Text style={styles.bannerTitle}>
              Công nghệ trong tầm tay
            </Text>

            <Text style={styles.bannerDescription}>
              Khám phá các sản phẩm công nghệ nổi bật với mức giá hấp dẫn.
            </Text>

            <Pressable
              style={styles.exploreButton}
              onPress={() => console.log('Khám phá')}
            >
              <Text style={styles.exploreButtonText}>
                Khám phá ngay
              </Text>
            </Pressable>
          </View>

          <Image
            source={{
              uri: 'https://picsum.photos/300/300?random=10',
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* DANH MỤC */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Danh mục
          </Text>

          <Pressable>
            <Text style={styles.viewAll}>
              Xem tất cả
            </Text>
          </Pressable>
        </View>

        <View style={styles.categoryContainer}>
          <Pressable style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>💻</Text>
            <Text style={styles.categoryText}>Laptop</Text>
          </Pressable>

          <Pressable style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>📱</Text>
            <Text style={styles.categoryText}>
              Điện thoại
            </Text>
          </Pressable>

          <Pressable style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>🎧</Text>
            <Text style={styles.categoryText}>
              Tai nghe
            </Text>
          </Pressable>

          <Pressable style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>⌨️</Text>
            <Text style={styles.categoryText}>
              Phụ kiện
            </Text>
          </Pressable>
        </View>

        {/* FLATLIST */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Sản phẩm nổi bật
          </Text>
        </View>

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
        />

        {/* HÌNH ẢNH QUẢNG CÁO */}
        <View style={styles.advertisement}>
          <Image
            source={{
              uri: 'https://picsum.photos/700/300?random=20',
            }}
            style={styles.advertisementImage}
          />

          <View style={styles.advertisementOverlay}>
            <Text style={styles.advertisementTitle}>
              Siêu sale công nghệ
            </Text>

            <Text style={styles.advertisementText}>
              Giảm giá lên đến 50%
            </Text>

            <Pressable style={styles.saleButton}>
              <Text style={styles.saleButtonText}>
                Xem ưu đãi
              </Text>
            </Pressable>
          </View>
        </View>

        {/* SECTION LIST */}
        <Text style={styles.sectionTitle}>
          Tin tức & Ưu đãi
        </Text>

        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          scrollEnabled={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles.newsSectionTitle}>
              {section.title}
            </Text>
          )}
          renderItem={({ item }) => (
            <Pressable style={styles.newsItem}>
              <View>
                <Text style={styles.newsText}>
                  {item}
                </Text>

                <Text style={styles.newsDescription}>
                  Xem thông tin chi tiết
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </Pressable>
          )}
        />

        {/* NÚT CUỐI TRANG */}
        <Pressable
          style={styles.mainButton}
          onPress={() => console.log('Xem thêm')}
        >
          <Text style={styles.mainButtonText}>
            Xem thêm nội dung
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // HEADER
  header: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 20,
    paddingVertical: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerDescription: {
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 3,
  },

  avatarButton: {
    width: 45,
    height: 45,
    borderRadius: 23,

    backgroundColor: '#22C55E',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // BANNER
  banner: {
    margin: 16,
    padding: 18,

    backgroundColor: '#2563EB',
    borderRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },

  bannerLeft: {
    flex: 1,
    paddingRight: 10,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  bannerDescription: {
    color: '#DBEAFE',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },

  bannerImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  exploreButton: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,

    alignSelf: 'flex-start',

    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 10,
  },

  exploreButtonText: {
    color: '#2563EB',
    fontWeight: 'bold',
  },

  // SECTION
  sectionHeader: {
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',

    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 10,
  },

  viewAll: {
    color: '#2563EB',
    fontWeight: '600',
  },

  // CATEGORY
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 16,
  },

  categoryItem: {
    width: '23%',

    backgroundColor: '#FFFFFF',

    paddingVertical: 15,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 2,
  },

  categoryIcon: {
    fontSize: 28,
  },

  categoryText: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },

  // PRODUCT
  productList: {
    paddingHorizontal: 16,
  },

  productCard: {
    width: 170,

    backgroundColor: '#FFFFFF',

    marginRight: 12,
    padding: 10,

    borderRadius: 15,

    elevation: 3,
    marginBottom: 10,
  },

  productImage: {
    width: '100%',
    height: 130,

    borderRadius: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',

    color: '#111827',

    marginTop: 10,
  },

  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',

    color: '#DC2626',

    marginTop: 5,
  },

  buyButton: {
    backgroundColor: '#2563EB',

    marginTop: 10,
    paddingVertical: 10,

    borderRadius: 8,

    alignItems: 'center',
  },

  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // ADVERTISEMENT
  advertisement: {
    height: 180,

    margin: 16,
    marginTop: 25,

    borderRadius: 18,

    overflow: 'hidden',
  },

  advertisementImage: {
    width: '100%',
    height: '100%',
  },

  advertisementOverlay: {
    position: 'absolute',

    left: 20,
    top: 25,
  },

  advertisementTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
  },

  advertisementText: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 15,
  },

  saleButton: {
    backgroundColor: '#F59E0B',

    paddingHorizontal: 15,
    paddingVertical: 9,

    borderRadius: 8,

    alignSelf: 'flex-start',

    marginTop: 15,
  },

  saleButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // NEWS
  newsSectionTitle: {
    backgroundColor: '#E5E7EB',

    paddingHorizontal: 16,
    paddingVertical: 10,

    fontSize: 16,
    fontWeight: 'bold',

    color: '#374151',
  },

  newsItem: {
    backgroundColor: '#FFFFFF',

    marginHorizontal: 16,
    marginTop: 8,

    padding: 15,

    borderRadius: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 1,
  },

  newsText: {
    fontSize: 15,
    fontWeight: '600',

    color: '#111827',
  },

  newsDescription: {
    color: '#9CA3AF',
    marginTop: 4,
    fontSize: 12,
  },

  arrow: {
    fontSize: 30,
    color: '#9CA3AF',
  },

  // MAIN BUTTON
  mainButton: {
    backgroundColor: '#111827',

    margin: 16,
    marginTop: 25,

    paddingVertical: 15,

    alignItems: 'center',

    borderRadius: 12,
  },

  mainButtonText: {
    color: '#FFFFFF',

    fontSize: 16,
    fontWeight: 'bold',
  },
});