import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {

  const screenWidth = Dimensions.get('window').width;

  const highlights = [
    {
      title: 'Sky',
      image: 'https://i.pinimg.com/1200x/5c/69/5c/5c695cd94466761f57add5a46f447ac3.jpg',
    },
    {
      title: 'Life',
      image: 'https://i.pinimg.com/736x/c4/94/db/c494dbdb95326fe64cce87fe0e97260e.jpg',
    },
    {
      title: 'Fits',
      image: 'https://i.pinimg.com/1200x/a4/79/c9/a479c90f9c59b75efcd357c5689d4147.jpg',
    },
    {
      title: 'Travel',
      image: 'https://i.pinimg.com/1200x/c7/94/d1/c794d187e885462911a907272ae7667b.jpg',
    },
  ];

  const posts = [
    'https://i.pinimg.com/736x/e0/0b/09/e00b091522044fe5c7a4473d43f7f2c8.jpg',
    'https://i.pinimg.com/736x/6c/52/34/6c523472c4b1dd6ef3b6a240ca723168.jpg',
    'https://i.pinimg.com/736x/8a/73/fa/8a73fa8c1a4a53dac55513937bd62488.jpg',
    'https://i.pinimg.com/736x/fc/85/e5/fc85e52976ab9786e6eb57772d8fcfc2.jpg',
    'https://i.pinimg.com/736x/5e/21/c7/5e21c7c37e178e9024c8267205ee42cd.jpg',
    'https://i.pinimg.com/736x/bd/66/d1/bd66d14dbb3046c313e4c6eaf3e49e4b.jpg',
    'https://i.pinimg.com/736x/88/2e/1e/882e1ef841d1dc3ad785bf78aff21829.jpg',
    'https://i.pinimg.com/736x/47/1f/20/471f2037991371363ba37576e5995669.jpg',
    'https://i.pinimg.com/736x/51/19/93/5119932600d821cd805c03c18feeb77a.jpg',
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

          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              paddingTop: 15,
              alignItems: 'center',
            }}>
            
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Javeria
            </Text>

            <View
              style={{
                flexDirection: 'row',
                gap: 15,
              }}>

              <Ionicons
                name="add-circle-outline"
                size={28}
                color="white"
              />

              <Ionicons
                name="menu"
                size={28}
                color="white"
              />

            </View>

          </View>

          {/* Stats */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}>

            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/68/9b/da/689bdada769c16e1e78a36b9d888f635.jpg',
              }}
              style={{
                width: 85,
                height: 85,
                borderRadius: 50,
              }}
            />

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>18</Text>
              <Text style={{ color: 'white' }}>Posts</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>2.3K</Text>
              <Text style={{ color: 'white' }}>Followers</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>450</Text>
              <Text style={{ color: 'white' }}>Following</Text>
            </View>

          </View>

          {/* Bio */}
          <View
            style={{
              paddingHorizontal: 15,
              marginTop: 15,
            }}>
            
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Jiya ✨
            </Text>

            <Text
              style={{
                color: 'white',
                marginTop: 5,
              }}>
              Selenophile
            </Text>

            <Text
              style={{
                color: 'white',
                marginTop: 5,
              }}>
              Be like the moon, even alone, it still shines. 🌙
            </Text>

          </View>

          {/* Buttons */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              marginTop: 18,
              gap: 8,
            }}>

            <View
              style={{
                flex: 1,
                backgroundColor: '#262626',
                paddingVertical: 8,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white' }}>
                Edit Profile
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: '#262626',
                paddingVertical: 8,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white' }}>
                Share Profile
              </Text>
            </View>

            <View
              style={{
                width: 42,
                backgroundColor: '#262626',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>

              <Ionicons
                name="person-add-outline"
                size={20}
                color="white"
              />

            </View>

          </View>

          {/* Highlights */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 20,
              paddingLeft: 15,
            }}>

            <View
              style={{
                alignItems: 'center',
                marginRight: 15,
              }}>

              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#555',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

                <Ionicons
                  name="add"
                  size={28}
                  color="white"
                />

              </View>

              <Text
                style={{
                  color: 'white',
                  marginTop: 5,
                }}>
                New
              </Text>

            </View>

            {highlights.map((item, index) => (
              <View
                key={index}
                style={{
                  alignItems: 'center',
                  marginRight: 15,
                }}>

                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />

                <Text
                  style={{
                    color: 'white',
                    marginTop: 5,
                  }}>
                  {item.title}
                </Text>

              </View>
            ))}

          </ScrollView>

          {/* Tabs */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 20,
            }}>

            <Ionicons name="grid-outline" size={24} color="white" />
            <Ionicons name="play-circle-outline" size={24} color="gray" />
            <Ionicons name="person-outline" size={24} color="gray" />

          </View>

          {/* Posts */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>

            {posts.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{
                  width: '33.3%',
                  height: 130,
                }}
              />
            ))}

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}