import { useState, useEffect } from 'react';
import { ScrollView, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps){
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    /* Should be updated for the IP of the machine where the backend server is running */
    fetch('http://192.168.0.28:3333/games')
    .then(response => response.json())
    .then(data => setGames(data));
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
            source={logoImg}
            style={styles.logo}
        />

        <ScrollView>
          <Heading
            title="Encontre seu duo!"
            subtitle="Selecine o game que deseja jogar..."
          />

          <FlatList 
            data={games}
            keyExtractor={(item => item.id)}
            renderItem={({ item }) => 
              <GameCard
                data={item}
                onPress={() => handleOpenGame(item)}
              />
            }
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentList}
          />
          </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
