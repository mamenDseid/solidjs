import styles from './HeaderScreen.module.css'
import { IconButton } from "@suid/material";
import {
  FavoriteBorderOutlined,
  Menu,
  MailOutlined,
  SearchOutlined
} from "@suid/icons-material";
export default function HeaderScreen() {
  return (
    <header class={styles.mt}>
<div class="">
        <IconButton>
          <Menu />
        </IconButton>
      </div>
      <div class="title">SHEIN</div>
      <div class="">
        <IconButton>
          <SearchOutlined sx={{}} />
        </IconButton>
      </div>
    </header>
  )
}
