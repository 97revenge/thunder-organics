import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Sign from "./screens/sign";
import Feed from "./screens/feed";
import { Config } from "./components/Cookies/Config";
import MaterialProductPage from "./components/Layouts/product-page";
import MaterialRelated from "./components/Shop/related";
import MaterialCheckout from "./screens/checkout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/config" element={<Config />} />
        <Route path="/product/:tag" element={<MaterialProductPage />} />
        <Route path="/product/" element={<MaterialProductPage />} />
        <Route path="/test/" element={<MaterialRelated />} />
        <Route path="/checkout/" element={<MaterialCheckout />} />
      </Routes>
    </BrowserRouter>
  );
}
