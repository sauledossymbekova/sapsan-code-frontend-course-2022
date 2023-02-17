import { AvatarComponent } from "./AvatarComponent";
import { InfoBlock } from "./InfoBlock";
import { QuoteComponent } from "./QuoteComponent";

export function MainBlock() {
  return (
    <div>
      <AvatarComponent></AvatarComponent>
      <InfoBlock></InfoBlock>
      <QuoteComponent></QuoteComponent>
    </div>
  );
}
