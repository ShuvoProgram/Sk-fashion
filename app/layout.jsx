import { Footer, Nav, ProductModal, TopNav } from "@/components";
import "./globals.css";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import LocationNav from "@/components/LocationNav";
import CartModal from "@/components/CartModal";
import UpdateProductModal from "@/components/dashboard/add-products/UpdateProductModal";
import Providers from "@/redux/provider";

export const metadata = {
  title: "Sk fashion",
  description: "Export Quality Products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
        <SpeedInsights/>
          <header>
            <TopNav />
            <Nav />
            <LocationNav />
          </header>
          {children}
          <ProductModal />
          <CartModal />
          <UpdateProductModal />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
