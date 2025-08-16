import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Export from "./pages/Export";
import Contact from "./pages/Contact";
import { CurrencyProvider } from "./CurrencyContext";
import "./i18n";

function App() {
  return (
    <ChakraProvider>
      <CurrencyProvider>
        <Router>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Box flex="1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/export" element={<Export />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </CurrencyProvider>
    </ChakraProvider>
  );
}

export default App;
