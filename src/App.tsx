import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import ArticleDetail from "@/pages/ArticleDetail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/artigos" element={<Articles />} />
          <Route path="/artigos/:slug" element={<ArticleDetail />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}
