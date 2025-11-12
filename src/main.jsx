import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

import StarRating from "./components/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating maxRating={10} />

    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </StrictMode>
);
