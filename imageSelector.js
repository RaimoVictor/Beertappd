import React, {useState} from 'react'
import { View,Text,StyleSheet,Button, Image,Alert} from 'react-native'
 import { launchCameraAsync ,useCameraPermissions} from "expo-image-picker";
import * as ImagePicker from 'expo-image-picker';

const ImageSelector = props =>{
    const [pickedImage, setPickedImage]=useState(null)
const takeImageHandler =async()=>{

    

   const image = await ImagePicker.launchImageLibraryAsync({ 
    allowsEditing:true,
        aspect:[16,9],
        quality:0.5
         
    });
    setPickedImage(image.uri)
    props.onImageTaken(image.uri)

}
        
       

    return ( 
<View style={styles.imagePick}>
<View style = {styles.ShowImage}>
{!pickedImage ? (<Text>
    Image have not been picked! </Text>) :
(<Image style={styles.image} source={{uri:pickedImage}}/>)}
</View>
<Button title="Take picture of your beer " onPress={takeImageHandler}/>
</View>

    )
    
}
const styles=StyleSheet.create({
    imagePick:{
        alignItems:'center', 
        marginBottom:25,
    },
    ShowImage:{
        width:'100%',
        height:200,
        margin: 10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ccc',
        borderWidth:1
    },
    image:{
        height: '100%',
        width: '100%'
    },




});
export default ImageSelector;
// export default function ImageSelector() {
//     const [cameraPermissionInformation,requestPermission]=useCameraPermissions();
//     const verfiyPermission=async ()=>{
//     if(cameraPermissionInformation.status===PermissionStatus.UNDETERMINED)
//     {
//     const permissionResponse= await requestPermission();
//     return permissionResponse.granted;
//     }
//     if(cameraPermissionInformation.status===PermissionStatus.DENIED)
//     {
//     Alert.alert('Permission not suffishint')
//     return false;
//     }
//     return true;
//     }
    
//     const [image, setImage] = useState(null);
    
//     async function pickImage() {
//     const haspermissiion= await verfiyPermission();
//     if(!haspermissiion)
//     {
//     return ;
//     }
  
//     const result = await launchCameraAsync({
    
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 0.5,
//     });
    
//     console.log(result);
    
//     if (!result.cancelled) {
//     setImage(result.uri);
//     }
//     };
    
//     return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Button title="Pick an image from camera roll" onPress={pickImage} />
//     <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//     </View>
//     );
//     }