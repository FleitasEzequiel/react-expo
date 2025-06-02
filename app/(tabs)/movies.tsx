import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

export default function Index() {

  const [movies,setMovies] = useState([{"Title":"Paddington in Peru","Year":"2024","Rated":"PG","Released":"14 Feb 2025","Runtime":"106 min","Genre":"Animation, Adventure, Comedy","Director":"Dougal Wilson","Writer":"Michael Bond, Paul King, Simon Farnaby","Actors":"Hugh Bonneville, Emily Mortimer, Ben Whishaw","Plot":"Paddington returns to Peru to visit his beloved Aunt Lucy, who now resides at the Home for Retired Bears. With the Brown family in tow, a thrilling adventure ensues when a mystery plunges them into an unexpected journey.","Language":"English, Spanish, French","Country":"United Kingdom, France, Japan, United States","Awards":"2 wins & 5 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzMyNWZlYmYtZDgxMC00ZTU3LWFiYzctNGE0ZDc0OTlhZTRlXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"6.7","imdbVotes":"22,668","imdbID":"tt5822536","Type":"movie","DVD":"N/A","BoxOffice":"$45,770,312","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Eternaut","Year":"2025–","Rated":"TV-MA","Released":"30 Apr 2025","Runtime":"N/A","Genre":"Action, Adventure, Drama","Director":"N/A","Writer":"Bruno Stagnaro","Actors":"Ricardo Darín, Carla Peterson, César Troncoso","Plot":"Follows Juan Salvo along with a group of survivors as they battle an alien threat that is under the direction of an invisible force after a horrific snowfall claims the lives of millions of people.","Language":"Spanish","Country":"Argentina, United States","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BYmIxZDczYjMtODQ0OS00YzQ2LWJhYjMtNjUwNTdjZTU4MDBjXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"5,657","imdbID":"tt27740241","Type":"series","totalSeasons":"1","Response":"True"},
    {"Title":"Ponyo","Year":"2008","Rated":"G","Released":"14 Aug 2009","Runtime":"101 min","Genre":"Animation, Adventure, Comedy","Director":"Hayao Miyazaki","Writer":"Hayao Miyazaki","Actors":"Cate Blanchett, Matt Damon, Liam Neeson","Plot":"A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.","Language":"Japanese, English","Country":"Japan","Awards":"12 wins & 20 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZDkzMzQ5ZmQtOTA3MC00MjhiLTk5M2UtNzk0MjEzZmVjN2UxXkEyXkFqcGc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"86/100"}],"Metascore":"86","imdbRating":"7.6","imdbVotes":"174,851","imdbID":"tt0876563","Type":"movie","DVD":"N/A","BoxOffice":"$16,543,471","Production":"N/A","Website":"N/A","Response":"True"}])
  const navigation = router
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList 
      data={movies}
      renderItem={({item}) => (
      <Pressable onPress={()=>router.navigate({
        pathname:"/movies/[movie]",params:{movie:item.imdbID}})}>
      <View style={{display:"flex", flexDirection:"row", backgroundColor:"red", padding:10,borderCurve:"continuous",borderRadius:4}}>

        <Image source={{"uri":item.Poster}}
        style={{    width: 100,
          height: 100,
          resizeMode: 'stretch'}}/> 
          <View style={{display:"flex", justifyContent:"center"}}>

        <Text>{item.Title  }</Text>
        <Text>{item.imdbRating  }</Text>
          </View>
        </View>
        </Pressable>
        )}
      ListEmptyComponent={<Text>No hay películas agregadas</Text>}
      />
    
    </View>
  );
}
