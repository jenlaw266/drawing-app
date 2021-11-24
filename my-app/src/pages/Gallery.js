import { useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  useEffect(() => {
    axios.get("/api/gallery").then((res) => {
      //put it in useStates ==> then displace with cards
      console.log("gallery info", res);
    });
  }, []);

  return (
    <div>
      <>would you like to publish your drawing to the gallery?</>
      Displaying the latest drawings:
      <br />
      the gallery is full, please delete a drawing before saving
    </div>
  );
};

export default Gallery;
