import HomeActiveIcon from "./HomeActiveIcon";

import  ManageSearchOutlinedIcon from "@suid/icons-material/ManageSearchOutlined"
import  PersonOutlineOutlinedIcon from "@suid/icons-material/PersonOutlineOutlined"
import HomeIcon from "@suid/icons-material/Home";
import ShoppingBagOutlinedIcon from "@suid/icons-material/ShoppingBagOutlined"
import DressOutlined from "./DressOutlined";
function BottomNav() {

    return (
        

            <header class="btmheader">
                <nav class="btmnav">
                    <ul>
                        <li>
                            <span class="navspan">
                                <HomeActiveIcon/>
                                <span>Shop</span>
                            </span>
                        </li>
                        <li>
                            <span class="navspan">
                                <ManageSearchOutlinedIcon
                                sx={{fontSize: '30px'}}
                                />
                                <span>Category</span>
                            </span>
                        </li>
                        <li>
                            <span class="navspan">
                                <DressOutlined/>
                                <span>New</span>

                            </span>
                        </li>
                        <li>
                            <span class="navspan">
                                <ShoppingBagOutlinedIcon/>
                                <span>
                                    Bag
                                </span>
                            </span>
                        </li>
                        <li>
                            <span class="navspan">
                                <PersonOutlineOutlinedIcon/>
                                <span>Me</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>
        
    );
}
export default BottomNav;