import { Image } from "react-konva"
import useImage from 'use-image'


const Pieces = ({position,imageURL})=> {
    const [image] = useImage(imageURL)
    return(
        <Image image={image} x={position.x} y={position.y}/>
    )
}

export default Pieces