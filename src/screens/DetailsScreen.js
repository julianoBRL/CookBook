import React, { Component }  from 'react';

import LottieView from  "lottie-react-native";
import { Text, View, SafeAreaView, ScrollView, ImageBackground,TouchableOpacity } from 'react-native';

import styles from '../css/style';
import api from '../service/api';

export default class DetailsScreen extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    
        this.state = {
            
            isLoading: true,
            details: null,
        };
    }

    async componentDidMount() {
        this._isMounted = true;

        console.log("Componente montado");
        api.get("lookup.php?i="+this.props.route.params["mealId"])
        .then((response) => {
            if (this._isMounted) {
                console.log("SetState chamado");
                this.setState({
                    isLoading: false,
                    details: response.data.meals[0],
                });
            }
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    
    componentWillUnmount(){
        console.log("Componente desmontado");
        this._isMounted = false;
    }
    /*
    * Crashando aqui por causa de alguma coisa que não deveria estar aqui
    */
    render(){

        const { isLoading, details } = this.state;
        let ingredientes

        if(isLoading){
            return (
                <View style={styles.center}>
                    <LottieView
                        source={require("../../assets/loading.json")}
                        loop
                        autoPlay
                    />
                </View>
            )
        }else{

            return (
                <SafeAreaView>
                    <ScrollView style={styles.scrollViewDetails}
                    showsVerticalScrollIndicator={false}>
                        <View>
                            <ImageBackground
                                style={styles.thumbnail}
                                source={{uri: details.strMealThumb}}
                            >
                                <Text style={styles.dethaisTitle}>{details.strMeal}</Text>
                            </ImageBackground>
                        </View>

                        <View style={styles.dethaisContainer}>
                            <Text style={[styles.title,styles.detailsTitle]}>Id: {details.idMeal}</Text>
                        </View>

                        <View style={styles.spacer}/>
                            {(details.strIngredient1 != "" && details.strIngredient1 != null)?
                                <Text>{details.strMeasure1} - {details.strIngredient1}</Text> : null}
                            {(details.strIngredient2 != "" && details.strIngredient2 != null)?
                                <Text>{details.strMeasure2} - {details.strIngredient2}</Text> : null}
                            {(details.strIngredient3 != "" && details.strIngredient3 != null)?
                                <Text>{details.strMeasure3} - {details.strIngredient3}</Text> : null}
                            {(details.strIngredient4 != "" && details.strIngredient4 != null)?
                                <Text>{details.strMeasure4} - {details.strIngredient4}</Text> : null}
                            {(details.strIngredient5 != "" && details.strIngredient5 != null)?
                                <Text>{details.strMeasure5} - {details.strIngredient5}</Text> : null}
                            {(details.strIngredient6 != "" && details.strIngredient6 != null)?
                                <Text>{details.strMeasure6} - {details.strIngredient6}</Text> : null}
                            {(details.strIngredient7 != "" && details.strIngredient7 != null)?
                                <Text>{details.strMeasure7} - {details.strIngredient7}</Text> : null}
                            {(details.strIngredient8 != "" && details.strIngredient8 != null)?
                                <Text>{details.strMeasure8} - {details.strIngredient8}</Text> : null}
                            {(details.strIngredient9 != "" && details.strIngredient9 != null)?
                                <Text>{details.strMeasure9} - {details.strIngredient9}</Text> : null}
                            {(details.strIngredient10 != "" && details.strIngredient10 != null)?
                                <Text>{details.strMeasure10} - {details.strIngredient10}</Text> : null}
                            {(details.strIngredient11 != "" && details.strIngredient11 != null)?
                                <Text>{details.strMeasure11} - {details.strIngredient11}</Text> : null}
                            {(details.strIngredient12 != "" && details.strIngredient12 != null)?
                                <Text>{details.strMeasure12} - {details.strIngredient12}</Text> : null}
                            {(details.strIngredient13 != "" && details.strIngredient13 != null)?
                                <Text>{details.strMeasure13} - {details.strIngredient13}</Text> : null}
                            {(details.strIngredient14 != "" && details.strIngredient14 != null)?
                                <Text>{details.strMeasure14} - {details.strIngredient14}</Text> : null}
                            {(details.strIngredient15 != "" && details.strIngredient15 != null)?
                                <Text>{details.strMeasure15} - {details.strIngredient15}</Text> : null}
                            {(details.strIngredient16 != "" && details.strIngredient16 != null)?
                                <Text>{details.strMeasure16 } - {details.strIngredient16}</Text> : null}
                            {(details.strIngredient17 != "" && details.strIngredient17 != null)?
                                <Text>{details.strMeasure17} - {details.strIngredient17}</Text> : null}
                            {(details.strIngredient18 != "" && details.strIngredient18 != null)?
                                <Text>{details.strMeasure18} - {details.strIngredient18}</Text> : null}
                            {(details.strIngredient19 != "" && details.strIngredient19 != null)?
                                <Text>{details.strMeasure19} - {details.strIngredient19}</Text> : null}
                            {(details.strIngredient20 != "" && details.strIngredient20 != null)?
                                <Text>{details.strMeasure20} - {details.strIngredient20}</Text> : null}
                        <View style={styles.spacer}/>

                        <View style={styles.dethaisInstructions}>
                            <Text style={styles.dethaisInstruction}>{details.strInstructions}</Text>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            )
        }

    }

}
