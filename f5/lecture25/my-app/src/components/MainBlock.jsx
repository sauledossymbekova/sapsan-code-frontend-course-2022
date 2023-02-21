import { AvatarComponent } from "./AvatarComponent";
import { InfoBlock } from "./InfoBlock";
import { QuoteComponent } from "./QuoteComponent";

export function MainBlock() {
  let myUrl = 'https://avatars.githubusercontent.com/u/44088023?v=4';

  return (
    <div>
      <AvatarComponent url={myUrl}></AvatarComponent>
      <AvatarComponent url='https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/US0044-NPUB31700_00-UACAPABILT000003/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000'></AvatarComponent>
      <InfoBlock></InfoBlock>
      <QuoteComponent></QuoteComponent>
    </div>
  );
}
