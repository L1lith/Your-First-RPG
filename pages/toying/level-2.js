import LevelTwo from "../../components/BooleanGame/levels/LevelTwo";
import Link from "next/link";

export default () => (
  <div className="level-1">
    <h2>#2.2 Level 2: "Not" Expressions</h2>
    <br />
    <div className="youtube-container">
      <iframe
        src="https://www.youtube.com/embed/fhIdbRp6xeg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </div>
    <br />
    <h2>The "Not" Operator</h2>
    <p>
      Now that we've learned the most basic expression OR, it's time to move
      onto NOT. The NOT operator outputs false when it's input is true, and true
      when it's input is false. You can think of this like an inversion,
      returning what was NOT specified.
    </p>
    <p>
      When playing the second level, make sure NOT to select any colors or
      shapes that are prefixed with "not".
    </p>
    <LevelTwo />
    <br />
    <br />
    <h2>Boolean Logic & the Coding Mindset</h2>
    <p>
      How does boolean logic tie into coding? When a programmer is writing code
      they write in coding language. Every language has a syntax (a syntax is a
      language with a set of rules, kind of like any spoken language, and like
      boolean logic too!). Every programming language can have different syntax
      (or rules), but ultimately it is just a more advanced form of a logic
      model.
      <br />
      <br />
      Rather than writing enormous combinations of ORs, NOTs, and other logical
      operators, software engineers conveniently created programming languages
      packed in with features that allow us to better express what we are trying
      to do. In fact, nearly every programming language has support for boolean
      logic built-in, which is an essential part of your toolkit as a coder.
      <br />
      <br />
    </p>
    <Link href="/toying/level-3">
      <a className="next">
        Up next: Level 3: Boolean Logic & the Coding Mindset
      </a>
    </Link>
  </div>
);
