import HomeActiveIcon from "./HomeActiveIcon";

import  ManageSearchOutlinedIcon from "@suid/icons-material/ManageSearchOutlined"
import  PersonOutlineOutlinedIcon from "@suid/icons-material/PersonOutlineOutlined"
import HomeIcon from "@suid/icons-material/Home";
import ShoppingBagOutlinedIcon from "@suid/icons-material/ShoppingBagOutlined"
import DressOutlined from "./DressOutlined";
import DressIconFilled from "./DressIconFilled";

import { A, useLocation } from "@solidjs/router";
import HomeInActiveIcon from "./HomeInActiveIcon";

function BottomNav() {
const location = useLocation()
function setActiveLoc(cloc){
    console.log(cloc)
}
    return (
        

            <header class="btmheader">
                <nav class="btmnav">
                    <ul>
                        <li>
                          <A href="/" >
                           
                          <span class="navspan" >
                            {/* {location.pathname == "/" ?: <HomeInActiveIcon/>} */}
                                <HomeActiveIcon/>
                                <span>Shop</span>
                            </span>
                          </A>
                        </li>
                        <li>
                           <A href="/category">
                           <span class="navspan">
                                <ManageSearchOutlinedIcon
                                sx={{fontSize: '30px'}}
                                />
                                <span>Category</span>
                            </span>
                           </A>
                        </li>
                        <li>
                            <A href="/new">
                             <span class="navspan">
                                {/* {location.pathname === '/new' ? <DressIconFilled/>: } */}
                                <DressOutlined/>
                                <span>New</span>

                            </span>   
                            </A>
                            
                        </li>
                        <li>
                            <A href="/cart">
                                
                            <span class="navspan">
                                <ShoppingBagOutlinedIcon/>
                                <span>
                                    Bag
                                </span>
                            </span>
                            </A>
                        </li>
                        <li>
                            <A href="/profile">
                               <span class="navspan">
                                <PersonOutlineOutlinedIcon/>
                                <span>Me</span>
                            </span>  
                            </A>
                           
                        </li>
                    </ul>
                </nav>
            </header>
        
    );
}
export default BottomNav;