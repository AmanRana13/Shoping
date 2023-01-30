import "./Header.scss"

import ListItem from '../../Components/ListItem'
import Image from "../../Components/Image"

import Images from "../../Assets/Images"
import Icons from "../../Components/Icons/Icons"


function Header() {
    return (
        <div className="header_main_container">
            <div className="header_wapper_container">
                <div className="header_top_container">

                    <div className="header_top_container_left">
                        <ul className="header_logo">
                            <ListItem path={'/'} item={<Image src={Images.logo} />} />
                        </ul>
                        <ul className="header_everything">
                            <ListItem item={'Everything'} />
                            <ListItem item={'Groceries'} />
                            <ListItem item={'Juice'} />
                        </ul>
                    </div>

                    <div className="header_top_container_right">
                        <ul className="header_about">
                            <ListItem item={'About'} />
                            <ListItem item={'Contact'} />
                        </ul>
                        <ul className="header_price">
                            <ListItem item={"0.00"} path={"false"} />
                            {/* <ListItem path={'basket'} item={<Image src={Images.basket} />} /> */}
                        </ul>
                        <ul className="header_profile">
                            <ListItem path={'contact'} item={<Icons id={"profile"} title="pofile" height={30} width={30} />} />
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header