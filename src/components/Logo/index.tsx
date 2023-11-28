import { Image, StyleSheet, View } from 'react-native';

interface IProps {
  image: string
}
export default function RenderImage({ image }: IProps) {
  // const selectedImage = imagesApp.map((item) => { item.key === image; }) as unknown as IImageResponse
  // console.log("path", selectedImage)

  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
