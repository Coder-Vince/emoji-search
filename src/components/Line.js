import React from "react";
import emojiList from "../Assets/emojiList.json";

const Line = ({ search }) => {
  const emoji = emojiList.map(
    (item) =>
      item.keywords.includes(search.toLowerCase()) && (
        <span key={item.title}>
          {item.title} {item.symbol}
        </span>
      )
  );

  return <div className="emojiList">{emoji}</div>;
};

export default Line;
