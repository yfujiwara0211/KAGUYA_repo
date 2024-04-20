import Header from "../../../components/Header";
import { ShopContextProvider } from '../../../context/shop-context'

export default function Layout({children}) {
  return (
      <>
        <ShopContextProvider>
          <Header />
          {children}
        </ShopContextProvider> 
      </>
      
  );
}