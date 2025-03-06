import Pic from "/vio.jpg";

interface ImageProps {
  width: string;
  height: string;
  src?: string;
}

function Image(props: ImageProps) {
  return (
    <img
      src={props.src || Pic}
      style={{ width: props.width, height: props.height }}
    ></img>
  );
}
export default Image;
