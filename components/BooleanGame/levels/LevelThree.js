import BooleanGame from "..";

export default () => {
  return (
    <BooleanGame
      shapes={["▢", "⧍", "○", "◊"]}
      colors={["#ff7af5", "#00ff00", "#00b8ff", "#fbff00"]}
      title={"Level 3"}
      size={5}
    />
  );
};
