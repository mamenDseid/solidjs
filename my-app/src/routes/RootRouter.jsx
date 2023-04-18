import { Routes, Route } from "@solidjs/router";
import NewItemsScreen from "../screens/NewItemsScreen";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import BottomNav from "../components/nav/BottomNav";
 function RootRouter() {

    return (
        <>
        <BottomNav/>
          <Routes>
        <Route path="/new" component={NewItemsScreen} />
        <Route path="/" component={HomeScreen} />
        <Route path="/category" component={CategoryScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/cart" component={CartScreen} />

        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
        </>
    );
}
    export default RootRouter;