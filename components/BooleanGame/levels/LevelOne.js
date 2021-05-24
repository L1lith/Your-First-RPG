import BooleanGame from "..";

export default () => (
  <BooleanGame
    title={"Level 1"}
    size={3}
    rulesOptions={{ allowNots: false, minColors: 2, minShapes: 2 }}
  />
);
