import { category } from "../../utils";
import ping from "./ping";

// if you want to include any etxra emojis for the description you can pass an object on the category
export default category("Debug", [ping], {
  emoji: "🐛",
  description:
    "Estos comandos tienen que desaparecer en Prod, pero quizas me de hueva quitarlos"
});
