import React from "react";

import { storiesOf } from "@storybook/react";
import Link from "../components/atoms/link";
// import Timer from "../components/organisms/timer";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));
// Przykład:
// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
storiesOf("Atoms/Link", module).add("with text", () => <Link>Hello Link</Link>);
// storiesOf("Organism/Timer", module).add("init", () => <Timer />);
