import React, { useEffect, useState } from 'react';
import { FlatList, Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

type ItemProps = {
  id: number; 
  title: string;
  category: string;
  image: string; 
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

const Item = ({title, imageURL, shopName}: ItemProps) => (
  <TouchableOpacity style={styles.item}>
    <Image
        style={styles.imageDetails}
        source={{ uri: imageURL }}
      />
    <View style={styles.itemMeta}>
      <Text style={styles.titleProduct} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      <Text style={styles.textShop}>{shopName}</Text>
    </View>
    <View style={styles.textRight}>
      <TouchableOpacity style={styles.btnColor}>
        <Text style={styles.btnText}>Chat</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default function App() {

  const [selectedId, setSelectedId] = useState([]);
  const [data, setData] = useState([]);

  

  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data)) 
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4376 11.1094H6.72435L14.9322 3.98438C15.0634 3.86953 14.9837 3.65625 14.8103 3.65625H12.7361C12.6447 3.65625 12.5579 3.68906 12.49 3.74766L3.63294 11.4328C3.55182 11.5031 3.48676 11.5901 3.44218 11.6877C3.39759 11.7854 3.37451 11.8915 3.37451 11.9988C3.37451 12.1062 3.39759 12.2123 3.44218 12.3099C3.48676 12.4076 3.55182 12.4945 3.63294 12.5648L12.5415 20.2969C12.5767 20.3273 12.6189 20.3438 12.6634 20.3438H14.8079C14.9814 20.3438 15.0611 20.1281 14.9298 20.0156L6.72435 12.8906H20.4376C20.5408 12.8906 20.6251 12.8062 20.6251 12.7031V11.2969C20.6251 11.1937 20.5408 11.1094 20.4376 11.1094Z" fill="white"/></svg>
        </View>
        <Text style={styles.headerTitle}>
          Chat
        </Text>
        <View>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.031 8.46888C17.1008 8.53854 17.1562 8.62131 17.194 8.71242C17.2318 8.80354 17.2513 8.90122 17.2513 8.99988C17.2513 9.09853 17.2318 9.19621 17.194 9.28733C17.1562 9.37844 17.1008 9.46121 17.031 9.53088L12.531 14.0309C12.4613 14.1007 12.3785 14.1561 12.2874 14.1939C12.1963 14.2318 12.0986 14.2512 12 14.2512C11.9013 14.2512 11.8036 14.2318 11.7125 14.1939C11.6214 14.1561 11.5386 14.1007 11.469 14.0309L9.21897 11.7809C9.14924 11.7111 9.09392 11.6284 9.05619 11.5373C9.01845 11.4461 8.99902 11.3485 8.99902 11.2499C8.99902 11.1513 9.01845 11.0536 9.05619 10.9625C9.09392 10.8714 9.14924 10.7886 9.21897 10.7189C9.2887 10.6491 9.37149 10.5938 9.4626 10.5561C9.5537 10.5184 9.65136 10.4989 9.74997 10.4989C9.84859 10.4989 9.94624 10.5184 10.0373 10.5561C10.1285 10.5938 10.2112 10.6491 10.281 10.7189L12 12.4394L15.969 8.46888C16.0386 8.39903 16.1214 8.34362 16.2125 8.30581C16.3036 8.268 16.4013 8.24854 16.5 8.24854C16.5986 8.24854 16.6963 8.268 16.7874 8.30581C16.8785 8.34362 16.9613 8.39903 17.031 8.46888Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.25C0 2.05109 0.0790176 1.86032 0.21967 1.71967C0.360322 1.57902 0.551088 1.5 0.75 1.5H3C3.1673 1.50005 3.32978 1.55603 3.4616 1.65904C3.59342 1.76205 3.68701 1.90618 3.7275 2.0685L4.335 4.5H21.75C21.8601 4.5001 21.9689 4.52445 22.0685 4.57133C22.1682 4.6182 22.2563 4.68644 22.3266 4.77121C22.3969 4.85597 22.4477 4.95518 22.4753 5.06178C22.5029 5.16838 22.5068 5.27976 22.4865 5.388L20.2365 17.388C20.2043 17.5599 20.1131 17.7151 19.9786 17.8268C19.8442 17.9386 19.6749 17.9998 19.5 18H6C5.82515 17.9998 5.65585 17.9386 5.52137 17.8268C5.38688 17.7151 5.29567 17.5599 5.2635 17.388L3.015 5.4105L2.415 3H0.75C0.551088 3 0.360322 2.92098 0.21967 2.78033C0.0790176 2.63968 0 2.44891 0 2.25ZM4.653 6L6.6225 16.5H18.8775L20.847 6H4.653ZM7.5 18C6.70435 18 5.94129 18.3161 5.37868 18.8787C4.81607 19.4413 4.5 20.2044 4.5 21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21C10.5 20.2044 10.1839 19.4413 9.62132 18.8787C9.05871 18.3161 8.29565 18 7.5 18ZM18 18C17.2044 18 16.4413 18.3161 15.8787 18.8787C15.3161 19.4413 15 20.2044 15 21C15 21.7956 15.3161 22.5587 15.8787 23.1213C16.4413 23.6839 17.2044 24 18 24C18.7957 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21C21 20.2044 20.6839 19.4413 20.1213 18.8787C19.5587 18.3161 18.7957 18 18 18ZM7.5 19.5C7.10218 19.5 6.72065 19.658 6.43934 19.9393C6.15804 20.2206 6 20.6022 6 21C6 21.3978 6.15804 21.7794 6.43934 22.0607C6.72065 22.342 7.10218 22.5 7.5 22.5C7.89783 22.5 8.27936 22.342 8.56066 22.0607C8.84196 21.7794 9 21.3978 9 21C9 20.6022 8.84196 20.2206 8.56066 19.9393C8.27936 19.658 7.89783 19.5 7.5 19.5ZM18 19.5C17.6022 19.5 17.2206 19.658 16.9393 19.9393C16.658 20.2206 16.5 20.6022 16.5 21C16.5 21.3978 16.658 21.7794 16.9393 22.0607C17.2206 22.342 17.6022 22.5 18 22.5C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21C19.5 20.6022 19.342 20.2206 19.0607 19.9393C18.7794 19.658 18.3978 19.5 18 19.5Z" fill="white"/>
</svg>
        </View>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item 
          title={item.title} 
          shopName={item.category}
          imageURL={item.image}  />}
        keyExtractor={item => item.id}
        style={styles.containerProject}
      />
      <View style={styles.containerFooter}>
        <View>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
        </View>
        <View>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
<path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"></path>
</svg>
        </View>
        <View>
          <svg width="27" height="26" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.78576 5.36082L10.2596 1.42737L9.74031 0.572754L0.214111 6.36082H25.4999V24.5001H1.99994V25.5001H26.4999V5.36082H3.78576Z" fill="black"/>
</svg>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    paddingHorizontal: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    lineHeight: 42
  },
  headerTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  notification: {
    height: 29,
    margin: 10,
    marginHorizontal: 20,
  },
  item: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    gap: 15
  },
  imageDetails: {
    height: 74,
    width: 74
  },
  itemMeta: {
    width: '40%'
  },
  btnColor: {
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  textRight: {
    justifyContent: 'center',
    width: '20%'
  },
  btnText: {
    fontSize: 15,
    color: 'white'
  },
  textShop: {
    marginTop: 10
  },
  containerProject: {
    marginTop: 10,
    marginBottom: 50
  },
  containerFooter: {
    bottom: 0,
    width: "120%",
    paddingLeft: 40,
    paddingRight: 60,
    left: -20,
    height: 50,
    backgroundColor: '#1BA9FF',
    position: 'fixed',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  
});
