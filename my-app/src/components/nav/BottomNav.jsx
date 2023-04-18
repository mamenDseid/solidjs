import HomeActiveIcon from "./HomeActiveIcon";

import  ManageSearchOutlinedIcon from "@suid/icons-material/ManageSearchOutlined"
import  PersonOutlineOutlinedIcon from "@suid/icons-material/PersonOutlineOutlined"
import HomeIcon from "@suid/icons-material/Home";
import ShoppingBagOutlinedIcon from "@suid/icons-material/ShoppingBagOutlined"
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
                                <span>New</span>

                            </span>
                        </li>
                        <li>
                            <span class="navspan">
                                <span>
                                    Me
                                </span>
                            </span>
                        </li>
                        <li>
                            <span>five</span>
                        </li>
                    </ul>
                </nav>
            </header>
        
    );
}
export default BottomNav;