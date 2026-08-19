import img132028681 from "./d21b7af873714f7a86c86e41c7d57877707a089d.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[30px] items-center leading-[0.97] left-1/2 not-italic text-[116px] text-black text-center top-[110px] tracking-[-11px] w-[1320px]">
      <p className="relative shrink-0 w-[1315px]">{`Sonos S1 & S2`}</p>
      <p className="relative shrink-0 w-[1446px]">Controller</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="1320-2868-1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img132028681} />
      <Frame />
    </div>
  );
}