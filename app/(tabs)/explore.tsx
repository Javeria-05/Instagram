import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function ExploreScreen() {

  const screenWidth = Dimensions.get('window').width;

  const categories = [
    'For you',
    'Rawalpindi',
    'Luxury fashion',
    'Travel',
  ];

  const posts = [
    {
      image: 'https://i.pinimg.com/736x/c3/44/f9/c344f9d3fe6b117d89842c779635a2d7.jpg',
      views: '391K',
    },
    {
      image: 'https://i.pinimg.com/736x/46/b4/65/46b465c1193a9d44f4480ea4c6df0bdb.jpg',
      views: '550K',
    },
    {
      image: 'https://i.pinimg.com/736x/f3/6c/8f/f36c8f5324d9d49978931b7fa3bc29b0.jpg',
      views: '560K',
    },
    {
      image: 'https://i.pinimg.com/736x/0e/7d/de/0e7dde7e3e9a3b5ec029c411febb4d5b.jpg',
      views: '455K',
    },
    {
      image: 'https://i.pinimg.com/736x/e5/b2/4e/e5b24ea57c45162fa1f3af61386f8161.jpg',
      views: '620K',
    },
    {
      image: 'https://i.pinimg.com/736x/c0/4d/15/c04d154ac51e59768be3d866a6d227a8.jpg',
      views: '671K',
    },
    {
      image: 'https://i.pinimg.com/736x/0d/66/67/0d6667ffc3e73668767c3dc758b7468a.jpg',
      views: '750K',
    },
    {
      image: 'https://i.pinimg.com/1200x/8c/1d/9f/8c1d9f1d5f95be59204c800ffd9df2f9.jpg',
      views: '850K',
    },
    {
      image: 'https://i.pinimg.com/736x/f7/6d/05/f76d053b5f0690d484ceb656fd7d36c2.jpg',
      views: '920K',
    },
  ];

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>

        {/* Responsive Wrapper */}
        <View
  style={{
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    backgroundColor: 'black',
  }}>

          {/* Search Bar */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginTop: 10,
            }}>

            <View
              style={{
                flex: 1,
                backgroundColor: '#262626',
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 12,
                height: 45,
              }}>

              <Ionicons
                name="search"
                size={18}
                color="gray"
              />

              <TextInput
                placeholder="Search with Meta AI"
                placeholderTextColor="gray"
                style={{
                  color: 'white',
                  marginLeft: 8,
                  flex: 1,
                }}
              />

            </View>

            <Ionicons
              name="options-outline"
              size={22}
              color="white"
              style={{ marginLeft: 10 }}
            />

          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 15,
              paddingLeft: 10,
            }}>

            {categories.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor:
                    index === 0 ? '#262626' : 'transparent',
                  borderWidth: 1,
                  borderColor: '#333',
                  borderRadius: 20,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  marginRight: 10,
                }}>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                  }}>
                  {item}
                </Text>

              </View>
            ))}

          </ScrollView>

          {/* Grid */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 15,
            }}>

            {posts.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '33.3%',
                  height: 160,
                }}>

                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderWidth: 1,
                    borderColor: 'black',
                  }}
                />

                {item.views !== '' && (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>

                    <Ionicons
                      name="eye-outline"
                      size={14}
                      color="white"
                    />

                    <Text
                      style={{
                        color: 'white',
                        marginLeft: 4,
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      {item.views}
                    </Text>

                  </View>
                )}

              </View>
            ))}

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}