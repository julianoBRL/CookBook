import React, { Component }  from 'react';
import LottieView from  "lottie-react-native";
import { 
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../css/style';
import api from '../service/api';

export default class CategoriesScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          categories: [],
          randomMeals: [],
        };
    }

    async componentDidMount() {
        api.get("categories.php")
        .then((response) => {
            this.setState({
                ...this.state, ...{
                  categories: response.data.categories,
                }
            });
            for (let i = 0; i <10; i++) {                
                api.get("random.php")
                .then((response) => {
                    if(i==9){
                        this.setState({
                            ...this.state, ...{
                            isLoading: false,
                            randomMeals: [...this.state.randomMeals ,response.data.meals[0]],
                            }
                        });
                    }else{
                        this.setState({
                            ...this.state, ...{
                            randomMeals: [...this.state.randomMeals ,response.data.meals[0]],
                            }
                        });
                    }
                }).catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
            }
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    render () {
        const { isLoading, categories, randomMeals } = this.state;
        let categoryList = [];
        let mealsList = [];

        if(isLoading){
            return(
                <View style={styles.center}>
                    <LottieView
                        source={require("../../assets/splash.json")}
                        loop
                        autoPlay
                    />
                </View>
            )
        }

        for (let i = 0; i < categories.length;i++) {
            let category = categories[i];
            categoryList.push(
                <TouchableOpacity style={styles.tagContainer} key={i}>
                    <Text style={styles.tagTitle}>
                        {category.strCategory}
                    </Text>
                </TouchableOpacity>
            );
        }

        for (let i = 0; i < randomMeals.length;i++) {
            let meal = randomMeals[i];
            mealsList.push(
                <TouchableOpacity key={i} onPress={() => {
                    this.props.navigation.push('Details', {
                        mealId: meal.idMeal,
                    });
                }}>
                    <View style={styles.mealContainer} >
                        <View style={styles.mealItem}>
                            <View style={styles.row}>
                                <Image
                                    style={styles.image}
                                    source={{uri: meal.strMealThumb}}
                                />
                                <View>
                                    <Text style={styles.title}>{meal.strMeal}</Text>
                                    <View  style={styles.row}>
                                        <TouchableOpacity style={styles.subTag}>
                                            <Text style={styles.tagTitle}>
                                                {meal.strArea}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.subTag}>
                                            <Text style={styles.tagTitle}>
                                                {meal.strCategory}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
        

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    animated={true}
                    backgroundColor="#AFAFAF2F"
                    hidden={false}/>

                <View style={styles.searchContainer}>
                    <Ionicons style={styles.searchIcon} name="search" size={20}/>
                    <TextInput style={styles.search} placeholder="Search..." inlineImageLeft=""/>
                </View>

                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    {categoryList}
                </ScrollView>
                
                <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}>
                    {mealsList}
                </ScrollView>

            </SafeAreaView>
        )
    }
}