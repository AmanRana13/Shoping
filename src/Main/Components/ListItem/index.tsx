import "./ListItem.scss"

type props = {
    path?: string;
    item: any;
    onclick?: any;
}

const ListItem = ({ item, path, onclick = () => { } }: props) => {
    return (
        <>
            <li onClick={onclick} className='navBar_items'>
                <a href={path} >{item}</a>
            </li>
        </>
    )
}

export default ListItem