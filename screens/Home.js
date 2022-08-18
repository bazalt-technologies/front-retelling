import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
var {height, width} = Dimensions.get('window');
const Home = ({navigation}) => (
    <View style={styles.bg}>
        <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
            <Text style={styles.headerText}>Пересказы</Text>
        </View>

        <View style={styles.scrollPart}>
            <ScrollView>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar in velit at porta. Suspendisse ut metus rhoncus tortor dictum placerat. Integer euismod orci sed magna tempor sodales. Quisque quis nisi risus. Nulla vel est ultrices nunc aliquet consectetur et at turpis. Maecenas eu faucibus leo. Vestibulum id leo in lectus pellentesque elementum. Vestibulum vitae dapibus eros. Etiam lobortis in magna at cursus. Aenean rhoncus vulputate lacinia. Quisque vestibulum neque in eleifend finibus. Nunc interdum ex quis odio facilisis faucibus. Aenean tempor leo sit amet elit lobortis vulputate. Sed condimentum eros dui, quis euismod diam scelerisque vitae. Mauris at euismod odio, quis semper felis. Proin molestie sed sem a pulvinar.Praesent sagittis malesuada magna, in hendrerit ex vulputate ut. Donec volutpat nulla diam. Nulla nec massa dapibus, dictum orci eu, hendrerit lorem. Nulla a pulvinar magna. Sed eget scelerisque augue. Fusce porttitor ligula sapien, volutpat vulputate est placerat ac. Donec consectetur orci sapien, sit amet consectetur tellus finibus at. Cras maximus convallis nibh ut vestibulum. Curabitur tincidunt elementum est, sed pulvinar quam accumsan vel. Morbi eu interdum turpis. Morbi blandit congue tellus faucibus tempor. Fusce dictum lorem nec quam tempor tincidunt. Integer vel consequat metus, sit amet suscipit risus. Nullam dignissim euismod gravida. Donec molestie, diam vitae tincidunt tincidunt, turpis velit egestas est, sit amet pulvinar dolor erat ac lectus.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend, sem non condimentum tincidunt, odio lectus congue neque, tincidunt mattis lectus est varius sapien. Proin ullamcorper mattis eros, a facilisis eros ultrices sit amet. Morbi quis nunc a orci dignissim commodo. Sed in ultrices augue. Aenean massa diam, laoreet eget orci vitae, malesuada dapibus tellus. Donec vitae mattis arcu, at laoreet est.Praesent fermentum nulla libero, nec fringilla nisi consequat id. Quisque arcu sem, ultricies malesuada pharetra et, molestie vitae felis. Curabitur convallis ullamcorper ornare. Morbi volutpat elementum lacus et fringilla. Phasellus at nisi vel eros pharetra dignissim vel eu metus. Morbi elementum diam id diam varius tincidunt. Etiam placerat elit ac ex pretium convallis. Nunc ut lectus finibus, fringilla tortor et, scelerisque ipsum. Etiam venenatis placerat odio, nec feugiat sapien facilisis quis. Aenean dui orci, venenatis ut tellus finibus, pharetra commodo enim. Etiam quis ante urna. Fusce quis felis ligula. Sed porttitor, mauris a mollis placerat, justo diam suscipit odio, in feugiat enim libero eu urna. Praesent vestibulum massa eu quam pretium mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada mattis leo, quis facilisis enim maximus vitae.In maximus turpis ut nulla faucibus lobortis. Pellentesque sit amet massa efficitur, condimentum quam non, dictum elit. Fusce at orci non elit tristique venenatis a sed tellus. Nulla dignissim, velit id suscipit lacinia, mi risus accumsan est, non lacinia quam arcu at ex. Morbi ornare erat quis dolor efficitur sagittis. Suspendisse facilisis maximus ipsum, eu auctor urna malesuada non. Nam at suscipit massa. Etiam dictum accumsan tortor quis facilisis. Nulla sollicitudin nisi id lorem interdum ullamcorper. Fusce maximus bibendum suscipit. Praesent vitae orci mauris.Nulla id magna at eros semper laoreet. Nunc consectetur, libero dignissim faucibus scelerisque, nunc lectus sollicitudin elit, vitae mattis urna mi quis ipsum. Ut facilisis laoreet nisi, id dignissim ligula congue quis. Integer a pellentesque ex, non lacinia ligula. Nullam ut ex eget nisl laoreet facilisis eget ut massa. Mauris convallis augue vitae leo facilisis viverra id eu magna. Aenean pharetra posuere dui, nec dapibus massa sagittis vel. Nam mollis tristique arcu. Phasellus rutrum commodo ex, vitae rhoncus felis elementum et. Morbi placerat viverra augue, vel cursus arcu accumsan ac. Sed iaculis leo a diam congue euismod. Donec hendrerit mauris sed luctus gravida. Phasellus semper enim eget tellus interdum fringilla. Donec in elit quis tellus finibus vestibulum at vel quam. Nulla vitae libero rutrum, placerat leo quis, vehicula sapien. Nulla ullamcorper odio eget enim vulputate, venenatis scelerisque nisi consectetur.Etiam ut magna semper, imperdiet enim ac, imperdiet felis. Fusce malesuada blandit lacus, nec aliquam ante porttitor at. In imperdiet justo et dui luctus cursus. Nam commodo purus arcu, eget tempus arcu dapibus at. Maecenas mollis lacus id auctor pharetra. Sed condimentum pharetra venenatis. Sed ligula eros, gravida ac porttitor vel, euismod sit amet justo. Donec vitae mauris iaculis, fringilla augue non, aliquet risus. Nulla maximus arcu sed metus faucibus, et porta mauris accumsan.Nunc eu massa nibh. Etiam nibh arcu, egestas in tempus id, malesuada eget lacus. Nulla augue lorem, vehicula placerat vulputate et, lacinia non libero. In sed dignissim nunc. Nam malesuada consequat suscipit. Morbi sed venenatis risus. Aenean eget convallis augue. Integer et dictum augue.Praesent ante felis, semper ac fringilla ac, fringilla ac urna. Sed vel iaculis sapien. In aliquam, ipsum at venenatis tincidunt, libero odio malesuada justo, quis faucibus ex massa rutrum lorem. Maecenas fermentum quam egestas eros lobortis, sit amet luctus quam luctus. Nullam in ex sed enim ullamcorper interdum et vel nunc. Etiam hendrerit tempus pulvinar. In lacus neque, tincidunt a ex sed, porta tristique nisi. Morbi lacus erat, eleifend quis elit ac, pretium rutrum tortor. Proin sagittis volutpat convallis. Sed elementum magna nunc, nec tempus urna aliquam cursus. Curabitur porta, dui non feugiat mattis, nunc nulla bibendum dolor, eu maximus metus magna et urna. Sed vel porttitor est, vel vestibulum libero. Nullam pharetra interdum dapibus. Ut ut vestibulum dui.In euismod, odio vitae molestie ullamcorper, eros nulla consectetur neque, non varius libero velit nec risus. Aliquam ac posuere erat. Vestibulum cursus vestibulum feugiat. Nullam at pulvinar quam, eu rhoncus dui. Nullam ut ornare turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eleifend viverra velit sit amet pellentesque. Proin vel arcu quam. Suspendisse lectus nulla, interdum et porta tempus, efficitur et arcu. Suspendisse neque ex, facilisis vitae tristique eu, mollis at enim. Donec molestie, dui eget rhoncus viverra, leo eros dictum dolor, eu blandit purus tellus ac quam. Suspendisse potenti. Duis elementum mauris ut mattis cursus. Quisque placerat suscipit ante, id tristique nisl euismod in.Nunc finibus hendrerit arcu, non pretium lorem cursus aliquam. Duis fermentum id justo sodales vulputate. Nunc pretium turpis nisi, eget placerat neque viverra et. Suspendisse non eros ligula. Nulla quis nisl vitae nisl scelerisque consequat. Donec laoreet purus lacus. Cras faucibus lorem nec ex aliquam, eget malesuada sem vestibulum.Integer vel quam eu eros molestie rutrum at vel ante. Cras sapien velit, tempus et suscipit in, posuere vel enim. Curabitur cursus lacinia turpis, ut hendrerit nunc cursus vitae. Proin maximus pulvinar ipsum id luctus. Fusce quam ligula, vestibulum a risus sed, ullamcorper eleifend ante. Aliquam venenatis mauris ut leo sollicitudin, eu euismod massa fermentum. Integer consequat nulla vitae lectus porta, fringilla sodales elit semper. Curabitur ut scelerisque lorem, nec viverra risus. Proin at dictum massa. Pellentesque et fringilla nunc, a volutpat purus. Mauris vitae velit et orci condimentum porta. Nam mollis, est nec vehicula pretium, massa nulla pharetra justo, a imperdiet tortor nisi sit amet libero. Praesent molestie finibus sapien at fermentum.
            </Text>
            </ScrollView>
        </View>

        
        <View style={styles.footer}>
            <TouchableOpacity>
            <Image 
            source={require('../assets/menu.png')}
            style={styles.footerIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            >
            <Image 
            source={require('../assets/account.png')}
            style={styles.footerIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            >
            <Image 
            source={require('../assets/settings.png')}
            style={styles.footerIcon}
            />
            </TouchableOpacity>
        </View>

        </SafeAreaView>
    </View>
);


const styles = StyleSheet.create({
    bg:{
        backgroundColor: '#fdf8dd',
        flex:1,
    },
    header: {
        justifyContent: 'center',
        position: "fixed",
        backgroundColor: '#fdf8dd',
        borderBottomWidth: 3,
        borderBottomColor: '#e4c0ae',
        height: height * 0.075,
        
    },
    headerText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
    },
    scrollPart: {
        backgroundColor: '#fdf8e1',
    },
    footer: {
        position: "absolute",
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: height * 0.9,
        height: height * 0.1,
        width: width,
        backgroundColor: "#f8eed4",
        borderTopWidth: 3,
        borderColor: "#ddd9c4",
    },
    footerIcon: {
        height: height * 0.05,
        width: height * 0.05,
        marginLeft: width * 0.09,
        marginRight: width * 0.09,
        marginTop: height * 0.01,
    }
});

export default Home