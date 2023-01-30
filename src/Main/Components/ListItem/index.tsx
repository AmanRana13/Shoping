import "./ListItem.scss";

type props = {
  path?: string;
  item?: any;
  onclick?: () => void;
};

const ListItem = ({ item, path, onclick = () => { } }: props) => {

  const pathValue = () => path === "false" ? false : path ? path : item.toLowerCase()

  return (
    <>
      <li onClick={onclick} className="navBar_items">
        <a href={pathValue()}>{item}</a>
      </li>
    </>
  );
};

export default ListItem;



