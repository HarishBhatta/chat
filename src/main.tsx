import App from "./App";
import { createRoot } from "react-dom/client";
const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
} else console.log("Root element not found");
