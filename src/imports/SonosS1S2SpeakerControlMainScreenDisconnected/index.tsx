import imgImage6 from "./c7b86abdf52a9c6b7999d9e90e5941ac07ee81cf.png";
import svgPaths from "./svg-2wx5zrjn51";
import imgImage22 from "./d151ebbf500e0d791e0f899abc01c416c188a5c7.png";
import img181323 from "./4a6a54f74e4802658bb79b5b9fc923a9d8cdd1bc.png";

function AirpodsProLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="Airpods Pro / Left">
      <div className="absolute left-0 size-[24px] top-0" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[67.9%] left-[-0.53%] max-w-none top-[16.43%] w-[101.05%]" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Bg() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f4f4] h-[812px] left-1/2 top-1/2 w-[375px]" data-name="BG" />;
}

function BgGradient() {
  return <div className="-translate-x-1/2 absolute h-[524px] left-1/2 rounded-bl-[64px] rounded-br-[64px] top-[50px] w-[375px]" style={{ backgroundImage: "linear-gradient(157.00547445724558deg, rgba(216, 212, 196, 0) 0.40725%, rgba(246, 177, 86, 0.656) 117.05%)" }} data-name="BG / Gradient" />;
}

function ItemBg() {
  return <div className="-translate-x-1/2 absolute bg-gradient-to-b from-[13.517%] from-[rgba(248,242,231,0)] h-[337px] left-1/2 rounded-[50px] to-white top-[221px] w-[343px]" data-name="Item / BG" />;
}

function ButtonConnect() {
  return (
    <div className="-translate-x-1/2 absolute h-[64px] left-1/2 rounded-[100px] top-[253px] w-[303px]" style={{ backgroundImage: "linear-gradient(180.2867231632947deg, rgb(0, 0, 0) 41.584%, rgb(34, 33, 32) 98.843%)" }} data-name="Button / Connect">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Sofia_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-1/2 text-[18px] text-center text-white top-1/2 whitespace-nowrap">
          <p className="leading-[normal]">Connect</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#222120] border-solid inset-[-2px] pointer-events-none rounded-[102px]" />
    </div>
  );
}

function ItemText() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center leading-[0] left-1/2 text-center top-[157px] whitespace-nowrap" data-name="Item / Text">
      <div className="flex flex-col font-['Sofia_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#1a1a1a] text-[22px]">
        <p className="leading-[normal]">{`Sonos: S1 & S2 Speaker Control `}</p>
      </div>
      <div className="flex flex-col font-['Sofia_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(26,26,26,0.5)]">
        <p className="leading-[normal] mb-0 whitespace-pre">{`To get started, click the connect button `}</p>
        <p className="leading-[normal] whitespace-pre">below to select your speaker control</p>
      </div>
    </div>
  );
}

function ItemIconSonos() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f7b45e] left-[23px] overflow-clip rounded-[121.8px] size-[87px] to-[#d79744] top-[23px]" data-name="Item / Icon / Sonos">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Sofia_Sans:Bold',sans-serif] font-bold h-[25px] justify-center leading-[0] left-1/2 text-[#1a1a1a] text-[20px] text-center top-1/2 w-[67px]">
        <p className="leading-[normal]">SONOS</p>
      </div>
    </div>
  );
}

function ItemLogo() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[133px] top-[4px]" data-name="Item / Logo">
      <div className="absolute left-0 size-[133px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="133" preserveAspectRatio="none" viewBox="0 0 133 133" width="133">
          <circle cx="66.5" cy="66.5" fill="white" fillOpacity="0.3" id="Ellipse 15" r="66.5" />
        </svg>
      </div>
      <div className="absolute left-[12px] size-[109px] top-[12px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="109" preserveAspectRatio="none" viewBox="0 0 109 109" width="109">
          <circle cx="54.5" cy="54.5" fill="white" fillOpacity="0.5" id="Ellipse 16" r="54.5" />
        </svg>
      </div>
      <ItemIconSonos />
    </div>
  );
}

function ItemConnectSpeakerControl() {
  return (
    <div className="-translate-x-1/2 absolute h-[337px] left-1/2 rounded-[50px] top-[221px] w-[343px]" data-name="Item / Connect Speaker Control">
      <ButtonConnect />
      <ItemText />
      <ItemLogo />
    </div>
  );
}

function ItemConnectionStatusConnected() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item / Connection Status / Connected">
      <div className="relative shrink-0 size-[8px]" data-name="Green">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#B2062F" id="Green" r="4" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Sofia_Sans:Bold',sans-serif] font-bold justify-end leading-[0] relative shrink-0 text-[#b2062f] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Disconnected</p>
      </div>
    </div>
  );
}

function ItemText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item / Text">
      <div className="[word-break:break-word] flex flex-col font-['Sofia_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[28px] whitespace-nowrap">
        <p className="leading-[normal]">Speaker Control</p>
      </div>
      <ItemConnectionStatusConnected />
    </div>
  );
}

function ButtonSettings() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[48px]" data-name="Button / Settings">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-[5px] size-[24px] top-1/2" data-name="Bold / Settings, Fine Tuning / Settings">
        <div className="absolute inset-[8.33%_8.33%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 19 20" width="19">
            <path clipRule="evenodd" d={svgPaths.p15cf6600} fill="#1A1A1A" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemMenu() {
  return (
    <div className="absolute content-stretch flex gap-[95px] items-center left-[16px] top-[72px]" data-name="Item / Menu">
      <ItemText1 />
      <ButtonSettings />
    </div>
  );
}

function AirpodsRight() {
  return (
    <div className="absolute left-[2px] size-[18px] top-[2px]" data-name="Airpods - Right">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <g id="Airpods - Right">
            <path d={svgPaths.p13e46300} id="Ellipse 6" stroke="black" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2" />
            <path d={svgPaths.p34ee19d8} id="Ellipse 5" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Airpods() {
  return (
    <div className="absolute contents left-[9.5px] top-[5px]" data-name="Airpods">
      <div className="absolute blur-[0px] opacity-0 overflow-clip right-[6px] size-[22px] top-[7px]" data-name="Airpods Pro / Right">
        <AirpodsRight />
      </div>
      <AirpodsProLeft className="absolute left-[10.5px] opacity-0 size-[24px] top-[6px]" />
    </div>
  );
}

function Silent() {
  return (
    <div className="absolute contents left-[3.5px] top-[5px]" data-name="Silent">
      <div className="absolute bg-black blur-[0px] h-[24px] left-[4.5px] opacity-0 rounded-[40px] top-[6px] w-[54px]" data-name="Silent Icon / Left">
        <div className="absolute inset-[13.64%_34.56%_13.55%_35.46%]" data-name="􀋞">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.4731" preserveAspectRatio="none" viewBox="0 0 16.1876 17.4731" width="16.1876">
            <path d={svgPaths.p2b44b600} fill="black" id="ô" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[22px] opacity-0 right-[9px] top-[7px] w-[38px]" data-name="Silent Text / Right">
        <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[0_-2.63%] leading-[22px] not-italic text-[15px] text-black text-center whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
          Silent
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-black h-[17px] left-0 rounded-bl-[7px] rounded-tl-[7px] top-0 w-[25px]" />;
}

function Frame2() {
  return <div className="absolute bg-black h-[6px] left-[33px] rounded-[2px] top-[5px] w-[2px]" />;
}

function Frame() {
  return (
    <div className="absolute bg-black inset-[13.64%_4.11%_9.09%_52.05%] rounded-[7px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Charging() {
  return (
    <div className="absolute contents left-[5.5px] top-[6px]" data-name="Charging">
      <div className="absolute h-[22px] opacity-0 right-[7px] top-[7px] w-[73px]" data-name="Charging Icon / Right">
        <Frame />
        <p className="[word-break:break-word] absolute bottom-0 font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] not-italic right-[40px] text-[15px] text-black text-right top-0 whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
          75%
        </p>
      </div>
      <div className="absolute h-[22px] left-[6.5px] opacity-0 top-[7px] w-[62px]" data-name="Charging Text / Left">
        <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[0_-3.23%_0_-1.61%] leading-[22px] not-italic text-[15px] text-black text-center whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
          Charging
        </p>
      </div>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="absolute contents inset-[calc(19.44%-0.61px)_calc(40.66%-0.19px)_calc(19.44%-0.61px)_calc(25.31%-0.49px)]" data-name="Phone Call">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.44%_40.66%_19.44%_25.31%] leading-[22px] not-italic opacity-0 text-[13px] text-black" style={{ fontFeatureSettings: '"case" 1' }}>
        mobile
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-black h-[20px] left-[6.5px] opacity-0 rounded-[50px] top-[8px] w-[32px]">
      <div className="absolute h-[13px] left-[7px] top-[3.5px] w-[18px]" data-name="image 22">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-2.43%] max-w-none top-0 w-[104.86%]" src={imgImage22} />
        </div>
      </div>
    </div>
  );
}

function Lyft() {
  return (
    <div className="absolute contents left-[5.5px] top-[6px]" data-name="Lyft">
      <Frame3 />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[19.44%_7.47%_19.44%_56.85%] leading-[22px] not-italic opacity-0 text-[15px] text-black text-center" style={{ fontFeatureSettings: '"case" 1' }}>
        2 min
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[20px] left-[66.5px] opacity-0 top-[8px] w-[47px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 47 20" width="47">
        <g id="Frame 15">
          <rect fill="black" height="6" id="Rectangle 13" rx="1" width="2" x="1" y="7" />
          <rect fill="black" height="14" id="Rectangle 14" rx="1" width="2" x="4" y="3" />
          <rect fill="black" height="17" id="Rectangle 14_2" rx="1" width="2" x="7" y="2" />
          <rect fill="black" height="18" id="Rectangle 15" rx="1" width="2" x="10" y="1" />
          <rect fill="black" height="11" id="Rectangle 16" rx="1" width="2" x="13" y="5" />
          <rect fill="black" height="11" id="Rectangle 17" rx="1" width="2" x="16" y="5" />
          <rect fill="black" height="9" id="Rectangle 18" rx="1" width="2" x="19" y="6" />
          <rect fill="black" height="7" id="Rectangle 19" rx="1" width="2" x="22" y="7" />
          <rect fill="black" height="11" id="Rectangle 20" rx="1" width="2" x="30" y="5" />
          <rect fill="black" height="13" id="Rectangle 21" rx="1" width="2" x="33" y="4" />
          <rect fill="black" height="7" id="Rectangle 22" rx="1" width="2" x="36" y="7" />
          <rect fill="black" height="9" id="Rectangle 23" rx="1" width="2" x="40" y="6" />
          <circle cx="27.25" cy="10.25" fill="black" id="Ellipse 10" r="1.25" />
          <circle cx="45.25" cy="10.25" fill="black" id="Ellipse 11" r="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-0 size-[15px] top-[4px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Frame 16">
          <path d={svgPaths.p3b14b300} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[22px] left-[6.5px] opacity-0 top-[7px] w-[56px]">
      <Frame5 />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] inset-[0_0_0_23.21%] leading-[22px] not-italic text-[15px] text-black text-center" style={{ fontFeatureSettings: '"case" 1' }}>
        0:25
      </p>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute contents left-[5.5px] top-[6px]" data-name="Phone">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function DynamicIsland1() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border border-black border-solid h-[36px] left-1/2 overflow-clip rounded-[32px] top-0 w-[120.5px]" data-name="Dynamic Island">
      <Airpods />
      <Silent />
      <Charging />
      <PhoneCall />
      <Lyft />
      <Phone />
    </div>
  );
}

function Lens() {
  return (
    <div className="absolute h-[11px] left-[99.76px] top-[12px] w-[10.865px]" data-name="Lens">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 10.8648 11" width="10.8648">
        <g id="Lens">
          <ellipse cx="5.43238" cy="5.5" fill="#0E101F" id="Ellipse 1" rx="5.43238" ry="5.5" />
          <ellipse cx="5.43295" cy="5.5" fill="#01031A" id="Ellipse 2" rx="4.44467" ry="4.5" />
          <g filter="url(#filter0_f_0_54)" id="Ellipse 3">
            <ellipse cx="5.43236" cy="3" fill="#CBB6FF" fillOpacity="0.15" rx="2.46926" ry="1" />
          </g>
          <g filter="url(#filter1_f_0_54)" id="Ellipse 4">
            <ellipse cx="5.43236" cy="7.5" fill="#CBB6FF" fillOpacity="0.15" rx="2.46926" ry="1.5" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4" id="filter0_f_0_54" width="6.93853" x="1.96309" y="1">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_0_54" stdDeviation="0.5" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter1_f_0_54" width="6.93853" x="1.96309" y="5">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_0_54" stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-0">
      <DynamicIsland1 />
      <Lens />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[36px] left-[127.25px] rounded-[100px] top-[10px] w-[120.5px]">
      <Group />
    </div>
  );
}

function StatusBar() {
  return <div className="absolute h-[54px] left-0 top-px w-[375px]" data-name="Status Bar" />;
}

function Clock() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro_Display:Bold',sans-serif] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[17px] text-black w-[49px] whitespace-nowrap" data-name="clock">
      <p className="relative shrink-0">9</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">41</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8.5px] items-center justify-center relative shrink-0 w-[80px]" data-name="Icons">
      <div className="h-[11px] relative shrink-0 w-[19px]" data-name="iOS 17 - Cellular Signal">
        <div className="absolute bg-black bottom-0 h-[5px] left-0 right-[81.58%] rounded-[1px]" data-name="Bar 1" />
        <div className="absolute bg-black bottom-0 h-[7px] left-[26.32%] right-[55.26%] rounded-[1px]" data-name="Bar 2" />
        <div className="absolute bg-black bottom-0 h-[9px] left-[52.63%] right-[28.95%] rounded-[1px]" data-name="Bar 3" />
        <div className="absolute bg-black bottom-0 h-[11px] left-[78.95%] right-[2.63%] rounded-[1px]" data-name="Bar 4" />
      </div>
      <div className="h-[11.619px] overflow-clip relative shrink-0 w-[16px]" data-name="iOS 17 - Wifi">
        <div className="absolute inset-[69.84%_34.38%_-0.01%_34.32%]" data-name="Bar 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.5052" preserveAspectRatio="none" viewBox="0 0 5.00764 3.5052" width="5.00764">
            <path d={svgPaths.p3761f300} fill="black" id="Bar 1" />
          </svg>
        </div>
        <div className="absolute inset-[33.73%_18.68%_31.83%_18.75%]" data-name="Bar 2">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.00134" preserveAspectRatio="none" viewBox="0 0 10.0118 4.00134" width="10.0118">
            <path d={svgPaths.p2a184900} fill="black" id="Bar 2" />
          </svg>
        </div>
        <div className="absolute inset-[0.01%_0.01%_56.96%_-0.02%]" data-name="Bar 3">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.99924" preserveAspectRatio="none" viewBox="0 0 16.0014 4.99924" width="16.0014">
            <path d={svgPaths.p296b2880} fill="black" id="Bar 3" />
          </svg>
        </div>
      </div>
      <div className="h-[14px] overflow-clip relative shrink-0 w-[27px]" data-name="iOS 17 - Battery">
        <div className="absolute border-[0.5px] border-black border-solid inset-[0_11.11%_0_0] opacity-40 rounded-[5px]" data-name="border" />
        <div className="absolute bg-black inset-[14.29%_18.52%_14.29%_7.41%] rounded-[3px]" data-name="indicator" />
        <div className="-translate-y-1/2 absolute h-[4.333px] right-0 top-[calc(50%+0.17px)] w-[2px]" data-name="cap">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.33333" preserveAspectRatio="none" viewBox="0 0 2 4.33333" width="2">
            <path d={svgPaths.p18944000} fill="black" id="cap" opacity="0.4" />
          </svg>
        </div>
        <div className="absolute h-[12px] left-0 right-[12.5%] rounded-[4px] top-0" />
      </div>
    </div>
  );
}

function StatusBarIOs() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[54px] items-center justify-between left-1/2 pl-[44px] pr-[32px] py-[16px] top-1/2 w-[375px]" data-name="Status Bar/iOS 17">
      <div className="relative shrink-0" data-name="iOS 17 - Time">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
            <Clock />
          </div>
        </div>
      </div>
      <Icons />
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="-translate-x-1/2 absolute h-[56px] left-1/2 top-0 w-[375px]" data-name="Dynamic Island">
      <div className="absolute h-[56px] left-0 top-0 w-[375px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="56" preserveAspectRatio="none" viewBox="0 0 375 56" width="375">
          <path d={svgPaths.p3b79a680} fill="black" id="Subtract" />
        </svg>
      </div>
      <Frame7 />
      <StatusBar />
      <StatusBarIOs />
    </div>
  );
}

function ButtonDetector() {
  return (
    <div className="bg-[#f4f4f4] overflow-clip relative rounded-[100px] shrink-0 size-[48px]" data-name="Button / Detector">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Bold / Video, Audio, Sound / Soundwave Circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path clipRule="evenodd" d={svgPaths.p3fd2a400} fill="#1A1A1A" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemText3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0" data-name="Item / Text">
      <div className="flex flex-col font-['Sofia_Sans:SemiBold',sans-serif] font-semibold h-[22px] justify-end relative shrink-0 text-[#1a1a1a] text-[18px] w-[115px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[normal]">Detector</p>
      </div>
      <div className="flex flex-col font-['Sofia_Sans:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[16px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">Your personal music detector</p>
      </div>
    </div>
  );
}

function ItemText2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[16px]" data-name="Item / Text">
      <ButtonDetector />
      <ItemText3 />
    </div>
  );
}

function LinearArrowsDoubleAltArrowLeft() {
  return (
    <div className="absolute left-[307px] size-[24px] top-[28px]" data-name="Linear / Arrows / Double Alt Arrow Left">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Linear / Arrows / Double Alt Arrow Left">
          <path d="M9 6L15 12L9 18" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemDetector() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_10px_rgba(31,27,21,0.05)] h-[80px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Item / Detector">
      <ItemText2 />
      <LinearArrowsDoubleAltArrowLeft />
    </div>
  );
}

function ButtonMusic() {
  return (
    <div className="bg-[#f4f4f4] overflow-clip relative rounded-[100px] shrink-0 size-[48px]" data-name="Button / Music">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Bold / Video, Audio, Sound / Vinyl">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="Vector">
              <path d={svgPaths.p1c86ba00} fill="#1A1A1A" />
              <path clipRule="evenodd" d={svgPaths.p1daaa80} fill="#1A1A1A" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemText5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0" data-name="Item / Text">
      <div className="flex flex-col font-['Sofia_Sans:SemiBold',sans-serif] font-semibold h-[22px] justify-end relative shrink-0 text-[#1a1a1a] text-[18px] w-[115px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[normal]">Music</p>
      </div>
      <div className="flex flex-col font-['Sofia_Sans:Medium',sans-serif] font-medium justify-end relative shrink-0 text-[16px] text-[rgba(26,26,26,0.5)] whitespace-nowrap">
        <p className="leading-[normal]">Find music that you like</p>
      </div>
    </div>
  );
}

function ItemText4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[16px]" data-name="Item / Text">
      <ButtonMusic />
      <ItemText5 />
    </div>
  );
}

function LinearArrowsDoubleAltArrowLeft1() {
  return (
    <div className="absolute left-[307px] size-[24px] top-[28px]" data-name="Linear / Arrows / Double Alt Arrow Left">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Linear / Arrows / Double Alt Arrow Left">
          <path d="M9 6L15 12L9 18" id="Vector" stroke="#1A1A1A" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemMusic() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_10px_rgba(31,27,21,0.05)] h-[80px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Item / Music">
      <ItemText4 />
      <LinearArrowsDoubleAltArrowLeft1 />
    </div>
  );
}

function ItemCards() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[48px] content-stretch flex flex-col gap-[16px] items-start left-1/2" data-name="Item / Cards">
      <ItemDetector />
      <ItemMusic />
    </div>
  );
}

function ButtonMusic1() {
  return (
    <div className="bg-[#f4f4f4] opacity-0 overflow-clip relative rounded-[100px] shrink-0 size-[48px]" data-name="Button / Music">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[88.129px] items-center justify-center left-[calc(50%+0.19px)] top-[calc(50%+0.2px)] w-[80.457px]">
        <div className="flex-none rotate-[-24.74deg]">
          <div className="h-[71.368px] relative shadow-[0px_17px_34px_0px_rgba(0,0,0,0.45)] w-[55.702px]" data-name="18132 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[102.82%] left-[-17.19%] max-w-none top-0 w-[131.25%]" src={img181323} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemText7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 tracking-[-0.5px] whitespace-nowrap" data-name="Item / Text">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-end not-italic relative shrink-0 text-[#1a1a1a] text-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[normal]">Premium For You</p>
      </div>
      <div className="flex flex-col font-['Sofia_Sans:ExtraBold',sans-serif] font-extrabold justify-end relative shrink-0 text-[#de9e4a] text-[20px]">
        <p className="leading-[normal]">50% OFF</p>
      </div>
    </div>
  );
}

function ItemText6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[16px]" data-name="Item / Text">
      <div className="-translate-y-1/2 absolute flex h-[88.129px] items-center justify-center left-[-20px] top-[calc(50%-5.94px)] w-[80.457px]">
        <div className="flex-none rotate-[-24.74deg]">
          <div className="h-[71.368px] relative shadow-[0px_17px_34px_0px_rgba(0,0,0,0.45)] w-[55.702px]" data-name="18132 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[102.82%] left-[-17.19%] max-w-none top-0 w-[131.25%]" src={img181323} />
            </div>
          </div>
        </div>
      </div>
      <ButtonMusic1 />
      <ItemText7 />
    </div>
  );
}

function Btn() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[34px] items-center justify-center left-[calc(50%+108.5px)] top-1/2">
      <div className="-scale-y-100 flex-none">
        <div className="bg-gradient-to-b content-stretch flex from-[#d79744] h-[34px] items-center justify-center overflow-clip px-[12px] relative rounded-[200px] shadow-[0px_16px_12px_-8px_rgba(0,0,0,0.2)] to-[#f7b45e]" data-name="btn">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="[word-break:break-word] flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[normal]">Claim Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemMusic1() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_10px_rgba(31,27,21,0.05)] h-[80px] relative rounded-[24px] shrink-0 w-[343px]" data-name="Item / Music">
      <ItemText6 />
      <Btn />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-black content-stretch flex h-[28px] items-center justify-center left-[153px] rounded-[34px] top-[-6px] w-[69px]">
      <p className="[word-break:break-word] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.408px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2:00
      </p>
    </div>
  );
}

function DiscountBanner() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[591px] content-stretch flex flex-col items-center justify-center left-1/2 p-[8px] w-[375px]" data-name="Discount Banner">
      <ItemMusic1 />
      <Frame8 />
    </div>
  );
}

export default function SonosS1S2SpeakerControlMainScreenDisconnected() {
  return (
    <div className="bg-white relative size-full" data-name="Sonos: S1 & S2 Speaker Control_Main Screen_Disconnected">
      <Bg />
      <BgGradient />
      <ItemBg />
      <ItemConnectSpeakerControl />
      <ItemMenu />
      <div className="-translate-x-1/2 absolute bottom-0 flex h-[34px] items-center justify-center left-1/2 w-[375px]">
        <div className="flex-none rotate-180">
          <div className="h-[34px] relative w-[375px]" data-name="Home indicator">
            <div className="absolute h-[58px] left-0 top-0 w-[375px]" data-name="Subtract">
              <svg className="absolute block inset-0 size-full" fill="none" height="58" preserveAspectRatio="none" viewBox="0 0 375 58" width="375">
                <path d={svgPaths.p1255a380} fill="black" id="Subtract" />
              </svg>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[34px] items-center justify-center left-1/2 top-0 w-[375px]">
              <div className="flex-none rotate-180">
                <div className="h-[34px] relative w-[375px]" data-name="Component 24">
                  <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicIsland />
      <ItemCards />
      <DiscountBanner />
    </div>
  );
}