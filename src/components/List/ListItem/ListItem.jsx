import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{left: isHovered && index * 225 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://e.snmc.io/i/300/s/bb08b4620d35611d6cf7eee763c1ab33/6086501"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem nam
          iste perspiciatis, numquam similique ipsam aperiam nihil qui id
          quibusdam obcaecati esse temporibus nemo fugit architecto vel
          voluptatibus autem?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
