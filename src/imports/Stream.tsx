import svgPaths from "./svg-f35kjg19rp";
import imgRectangle2085654391 from "figma:asset/4d96976c6de4cec2a76bea80548b889e9cc8f4dc.png";
import imgRectangle2085654392 from "figma:asset/55b2689bd7b1bd4ceac60bb3ccb34f75b349573b.png";
import imgRectangle2085654393 from "figma:asset/bb7f04b738ca119b5dd352b17aed6f29f5e385c9.png";
import { imgBlur } from "./svg-dgt95";

function DynamicIsland1() {
  return <div className="-translate-x-1/2 absolute bg-black h-[32.488px] left-[calc(50%+0.52px)] rounded-[32.246px] top-[8.38px] w-[115.28px]" data-name="Dynamic Island" />;
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+25.61px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border-[1.048px] border-white border-solid bottom-[33.33%] left-[calc(50%+24.39px)] opacity-35 rounded-[4.506px] top-[42.59%] w-[26.2px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+39.24px)] top-[51.45%] w-[1.392px]" data-name="Cap">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.39178 4.27109">
          <path d={svgPaths.p31a65400} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-white bottom-[37.04%] left-[calc(50%+24.39px)] rounded-[2.62px] top-[46.3%] w-[22.008px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[56.592px] left-[63.61%] right-0 top-[calc(50%+3.64px)]" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%-5.19px)] top-[43.77%] w-[17.964px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9645 12.9201">
          <path clipRule="evenodd" d={svgPaths.p2b54000} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-32.1px)] top-[43.59%] w-[20.122px]" data-name="Cellular Connection">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1216 12.8133">
          <path clipRule="evenodd" d={svgPaths.p4c77780} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[56.592px] left-0 right-[64.89%] top-[calc(50%+3.64px)]" data-name="Time">
      <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] inset-[33.96%_47.33%_23.63%_26.58%] leading-[23.056px] not-italic text-[17.816px] text-white text-center whitespace-nowrap">9:41</p>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="absolute h-[49.315px] left-0 top-0 w-[393px]" data-name="Dynamic Island">
      <div className="absolute h-[60px] left-0 top-0 w-[393px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 60">
          <path d={svgPaths.p218b3680} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
      <DynamicIsland1 />
      <Levels />
      <Time />
    </div>
  );
}

function ToolbarTop() {
  return (
    <div className="content-stretch flex gap-[5px] h-[54px] items-start justify-center pb-[10px] px-[16px] relative shrink-0 w-[393px]" data-name="Toolbar - Top">
      <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Title">
        <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[41px] left-0 right-0 text-[34px] text-white top-0 tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          bossound
        </p>
      </div>
    </div>
  );
}

function DynamicIsland2() {
  return (
    <div className="h-[49.257px] relative w-[393px]" data-name="Dynamic Island">
      <div className="absolute inset-[0_0_-23.4%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 60.7842">
          <g id="Dynamic Island">
            <path d={svgPaths.p35c2a700} fill="var(--fill-0, black)" id="Subtract" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Blur1() {
  return (
    <div className="absolute blur-[10px] inset-[28px_26px_24px_26px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-25.85%_-125.81%] mask-size-[151.7%_345.16%] rounded-[1000px]" data-name="Blur" style={{ maskImage: `url('${imgBlur}')` }}>
      <div aria-hidden="true" className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.04)] inset-0 mix-blend-hard-light pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Blur() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Blur1 />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#111] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="absolute inset-[-4px]" data-name="BG">
      <Blur />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Setting() {
  return (
    <div className="absolute inset-[3.57%_34.88%]" data-name="setting-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="setting-2">
          <path d={svgPaths.p28128580} fill="var(--fill-0, #EBEBF5)" fillOpacity="0.6" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldSetting() {
  return (
    <div className="absolute contents inset-[3.57%_34.88%]" data-name="vuesax/bold/setting-2">
      <Setting />
    </div>
  );
}

function TabBarButtons() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[10px] relative shrink-0" data-name="Tab Bar Buttons">
      <Bg />
      <div className="content-stretch flex flex-col gap-px items-center justify-center mr-[-10px] pb-[7px] pt-[6px] px-[8px] relative shrink-0 w-[102px]" data-name="Tabs">
        <div className="h-[28px] relative shrink-0 w-[86px]" data-name="Icons">
          <p className="absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-[19.008px] left-[calc(50%-14px)] not-italic text-[21px] text-[rgba(255,255,255,0.6)] top-[calc(50%-10px)] tracking-[-0.3715px] whitespace-nowrap">{`\u{100448}`}</p>
        </div>
        <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center w-[min-content]">Home</p>
      </div>
      <div className="content-stretch flex flex-col gap-px items-center justify-center mr-[-10px] pb-[7px] pt-[6px] px-[8px] relative shrink-0 w-[102px]" data-name="Tabs">
        <div className="absolute bg-[#333] inset-0 rounded-[100px]" data-name="Selection" />
        <div className="h-[28px] relative shrink-0 w-[86px]" data-name="Icons">
          <p className="absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-[19.008px] left-[calc(50%-12px)] not-italic text-[21px] text-white top-[calc(50%-9px)] tracking-[-0.3715px] whitespace-nowrap">{`\u{10066B}`}</p>
        </div>
        <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[10px] text-white text-center tracking-[-0.1px] w-[min-content]">Stream</p>
      </div>
      <div className="content-stretch flex flex-col gap-px items-center justify-center mr-[-10px] pb-[7px] pt-[6px] px-[8px] relative shrink-0 w-[102px]" data-name="Tabs">
        <div className="h-[28px] relative shrink-0 w-[86px]" data-name="Icons">
          <VuesaxBoldSetting />
        </div>
        <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-center w-[min-content]">Setings</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-2.16%_43.07%_-2.16%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2025 16.6922">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1f382840} fill="var(--fill-0, #1AA6F7)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1a756c80} fill="var(--fill-0, #1AA6F7)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2cd03300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p194e0f00} fill="url(#paint0_linear_2004_1226)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2004_1226" x1="11.0993" x2="11.0993" y1="16.6944" y2="3.41334">
            <stop stopColor="#1D77F2" />
            <stop offset="1" stopColor="#18C1FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39px]">
      <Group />
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="content-stretch flex h-full items-center justify-end opacity-40 relative shrink-0" data-name="Accessories and Grabber">
      <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
        <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Disclosure">
          <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[21.88%_0_21.88%_-37.5%] justify-center leading-[0] text-[17px] text-white text-center" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
            <p className="leading-[25px]">{`\u{10018A}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Title and Trailing Accessories">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[17px] text-white text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">Connect</p>
      </div>
      <AccessoriesAndGrabber />
    </div>
  );
}

function Contents() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-px relative size-full">
          <TitleAndTrailingAccessories />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Frame6 />
          <Contents />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39px]">
      <div className="absolute inset-[-0.46%_0_-0.45%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 16.1458">
          <g id="Frame 2147223687">
            <path d={svgPaths.p3b470000} fill="var(--fill-0, #F91313)" id="Subtract" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber1() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
        <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Disclosure">
          <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[21.88%_0_21.88%_-37.5%] justify-center leading-[0] opacity-40 text-[17px] text-white text-center" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
            <p className="leading-[25px]">{`\u{10018A}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Title and Trailing Accessories">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[17px] text-white text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">Library</p>
      </div>
      <AccessoriesAndGrabber1 />
    </div>
  );
}

function Contents1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-px relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="_Separator">
            <div aria-hidden="true" className="absolute border-[#333] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
          </div>
          <TitleAndTrailingAccessories1 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Frame8 />
          <Contents1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-0 size-[18px] top-[-1px]">
      <div className="absolute inset-[0_-0.2%_-0.25%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0451 18.0451">
          <g id="Frame 1244831889">
            <circle cx="9.02253" cy="9.02253" fill="var(--fill-0, #1ED761)" id="Ellipse 2" r="9.02253" />
            <path d={svgPaths.p6fa4700} fill="var(--fill-0, white)" id="Vector 1" stroke="var(--stroke-0, white)" strokeWidth="0.0326789" />
            <path d={svgPaths.pa1e9cf0} fill="var(--fill-0, white)" id="Vector 2" stroke="var(--stroke-0, white)" strokeWidth="0.0326789" />
            <path d={svgPaths.p4ce1000} fill="var(--fill-0, white)" id="Vector 3" stroke="var(--stroke-0, white)" strokeWidth="0.0326789" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39px]">
      <Frame3 />
    </div>
  );
}

function AccessoriesAndGrabber2() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
        <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Disclosure">
          <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[21.88%_0_21.88%_-37.5%] justify-center leading-[0] opacity-40 text-[17px] text-white text-center" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
            <p className="leading-[25px]">{`\u{10018A}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="Title and Trailing Accessories">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[17px] text-white text-ellipsis tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">Library</p>
      </div>
      <AccessoriesAndGrabber2 />
    </div>
  );
}

function Contents2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Contents">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-px relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="_Separator">
            <div aria-hidden="true" className="absolute border-[#333] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
          </div>
          <TitleAndTrailingAccessories2 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Frame9 />
          <Contents2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[132px] w-[393px]">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[16px] relative w-full">
          <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[17px] text-white text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none overflow-hidden text-ellipsis">History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[162px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-none relative shrink-0 text-[16px] text-white w-full">Master Your Sound</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[16px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-full">Premium Audio</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-[224px]">
      <div className="relative rounded-[4px] shrink-0 size-[40px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle2085654391} />
      </div>
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[100px] shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-white text-[16px] text-center tracking-[0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
        <p className="leading-[24px]">{`\u{100286}`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[12px] w-[361px]">
      <Frame4 />
      <Text />
    </div>
  );
}

function Catalog() {
  return (
    <div className="h-[64px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="catalog">
      <Frame12 />
      <div className="-translate-x-1/2 absolute bottom-0 h-px left-1/2 w-[361px]" data-name="_Separator">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-[162px]">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-none relative shrink-0 text-[16px] text-white w-full">Cinema Experience</p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[16px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-full">Spatial Audio</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-[224px]">
      <div className="relative rounded-[5px] shrink-0 size-[40px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgRectangle2085654392} />
      </div>
      <Frame1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center min-w-[36px] px-[8px] relative rounded-[100px] shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-white text-[16px] text-center tracking-[0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
        <p className="leading-[24px]">{`\u{100284}`}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[12px] w-[361px]">
      <Frame5 />
      <Text1 />
    </div>
  );
}

function Catalog1() {
  return (
    <div className="h-[64px] overflow-clip relative rounded-[100px] shrink-0 w-full" data-name="catalog">
      <Frame13 />
      <div className="-translate-x-1/2 absolute bottom-0 h-px left-1/2 w-[361px]" data-name="_Separator">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Catalog />
      <Catalog1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 top-[320px] w-[393px]">
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Display:Regular',sans-serif] gap-[4px] items-start leading-none not-italic relative shrink-0 w-[80px]">
      <p className="relative shrink-0 text-[14px] text-white tracking-[-0.28px] w-full">Spatial Audio</p>
      <p className="relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] tracking-[-0.24px] w-full">2:40</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6px] items-center left-[16px] top-1/2">
      <div className="relative rounded-[5px] shrink-0 size-[30px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgRectangle2085654393} />
      </div>
      <Frame15 />
    </div>
  );
}

export default function Stream() {
  return (
    <div className="bg-black relative size-full" data-name="Stream">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[393px]" data-name="NavBars">
        <div className="h-[62px] relative shrink-0 w-[393px]" data-name="Status Bar">
          <DynamicIsland />
        </div>
        <ToolbarTop />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 flex h-[49.257px] items-center justify-center left-1/2 w-[393px]">
        <div className="flex-none rotate-180">
          <DynamicIsland2 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-start justify-center left-1/2 pb-[25px] pt-[16px] px-[25px] w-[393px]" data-name="Component 27">
        <TabBarButtons />
      </div>
      <Frame7 />
      <Frame11 />
      <div className="-translate-x-1/2 absolute bg-[#1A1A1A] h-[58px] left-[calc(50%+0.5px)] rounded-[100px] top-[684px] w-[334px]" data-name="Card1">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-[2px] left-[28px] opacity-30 rounded-[100px] top-[56px] w-[295px]" />
          <div className="absolute bg-white h-[2px] left-[17px] rounded-[100px] top-[56px] w-[256px]" />
          <Frame14 />
          <div className="absolute h-[24px] left-[296px] top-[17px] w-[18px]" data-name="Icons / card1">
            <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] inset-0 justify-center leading-[0] text-white text-[16px] text-center tracking-[0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
              <p className="leading-[24px]">{`\u{100286}`}</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#333] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      </div>
    </div>
  );
}