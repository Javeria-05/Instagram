import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {

  const screenWidth = Dimensions.get('window').width;

  const stories = [
    {
      name: 'Your Story',
      image: 'https://i.pinimg.com/736x/88/2e/1e/882e1ef841d1dc3ad785bf78aff21829.jpg',
    },
    {
      name: 'Maryam',
      image: 'https://i.pinimg.com/736x/8a/e7/8e/8ae78efc6d16548cc4972c5d485349e0.jpg',
    },
    {
      name: 'Ayesha',
      image: 'https://i.pinimg.com/736x/9d/d9/33/9dd9338f46a2a30bb67715f1b77a093e.jpg',
    },
    {
      name: 'Friends',
      image: 'https://i.pinimg.com/1200x/df/79/34/df793495b85c5b692ddea3dfe17f0cb9.jpg',
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
      
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingTop: 20,
            }}>
        
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontWeight: 'bold',
              }}>
              Instagram
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
                name="heart-outline"
                size={28}
                color="white"
              />

              <Ionicons
                name="chatbubble-outline"
                size={28}
                color="white"
              />

            </View>

          </View>

          {/* Stories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 20,
              paddingLeft: 15,
            }}>
        
            {stories.map((item, index) => (
              <View
                key={index}
                style={{
                  alignItems: 'center',
                  marginRight: 15,
                  position: 'relative',
                }}>
            
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 2,
                    borderColor: '#ff4d94',
                  }}
                />

                {/* Plus Button */}
                {index === 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 45,
                      backgroundColor: '#0095f6',
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: 'black',
                    }}>

                    <Ionicons
                      name="add"
                      size={14}
                      color="white"
                    />

                  </View>
                )}

                <Text
                  style={{
                    color: 'white',
                    marginTop: 5,
                  }}>
                  {item.name}
                </Text>

              </View>
            ))}

          </ScrollView>

          {/* Post */}
          <View
            style={{
              marginTop: 20,
            }}>
        
            {/* User Row */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                marginBottom: 10,
              }}>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
          
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/736x/e3/42/aa/e342aa7b7e11912f3a9cf0ea0e9a20f4.jpg',
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                  }}
                />

                <Text
                  style={{
                    color: 'white',
                    marginLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  Almas
                </Text>

              </View>

              <Ionicons
                name="ellipsis-vertical"
                size={20}
                color="white"
              />

            </View>

            {/* Main Post */}
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/7b/fd/de/7bfdde37ca1920199f593398d6dacfe5.jpg',
              }}
              style={{
                width: '100%',
                height: 420,
              }}
            />

            {/* Actions */}
            <View
              style={{
                flexDirection: 'row',
                gap: 15,
                padding: 15,
              }}>
          
              <Ionicons
                name="heart-outline"
                size={28}
                color="white"
              />

              <Ionicons
                name="chatbubble-outline"
                size={28}
                color="white"
              />

              <Ionicons
                name="paper-plane-outline"
                size={28}
                color="white"
              />

            </View>

            <Text
              style={{
                color: 'white',
                paddingHorizontal: 15,
                paddingBottom: 20,
              }}>
              Beautiful aesthetic moments ✨
            </Text>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}