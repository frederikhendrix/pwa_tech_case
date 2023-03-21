import { useSpring, animated } from "@react-spring/web";
import { useDrag, useGesture } from "@use-gesture/react";
import { useRef } from "react";

function App() {
  let imageRef = useRef();

  useGesture(
    {
      onDrag: () => {
        console.log("dragging");
      },
    },
    {
      target: imageRef,
    }
  );

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  // Bind it to a component
  return (
    <div>
      <img ref={imageRef} src="/logo192.png" />
    </div>
  );
}

export default App;
