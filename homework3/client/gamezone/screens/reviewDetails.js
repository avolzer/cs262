import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';



export default function ReviewDetails({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);
    var urlstring = 'https://monopoly-service-2.herokuapp.com/players/'+ route.params.id + '/scores/'

    console.log(urlstring)

    useEffect(() => {
        fetch(urlstring)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
      }, []);

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ route.params.id }</Text>
                <Text style={globalStyles.titleText}>{ route.params.emailaddress } </Text>
                <Text style={globalStyles.titleText}>{ route.params.name }{"\n"}</Text>
                <Text style={globalStyles.titleText}>Scores:</Text>
                <FlatList 
                data={data} 
                keyExtractor={({ gameid }, index) => gameid.toString()}
                renderItem={({ item }) => (
                    <Card>
                        <Text style={globalStyles.titleText}>Game {item.gameid}: { item.score }</Text>
                    </Card>
            )} />
           
            </Card>
        </View>
    );
}
