import svgPaths from "./svg-c20v3n2n5o";
import imgImage31 from "figma:asset/a7ecb9177bc918bd9f2cfe1604ec9f94881dd537.png";

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

function Spacer() {
  return <div className="h-full shrink-0 w-[8px]" data-name="Spacer" />;
}

function Title() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[7px]" data-name="Title">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">Player</p>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[10px] px-[16px] relative shrink-0 w-[393px]" data-name="Toolbar">
      <div className="flex items-center justify-center min-w-[36px] relative shrink-0 size-[36px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "36" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="content-stretch flex h-[36px] items-center justify-center leading-[0] px-[8px] relative rounded-[100px] text-[17px] text-center whitespace-nowrap" data-name="Text">
            <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center relative shrink-0 text-white" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
              <p className="leading-[normal]">{`\u{100BF6}`}</p>
            </div>
            <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center relative shrink-0 text-[#A0A0A0]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
              <p className="leading-[normal]">Label</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Spacer />
      </div>
      <Title />
    </div>
  );
}

function NavBars() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[393px]" data-name="NavBars">
      <div className="h-[62px] relative shrink-0 w-[393px]" data-name="Status Bar">
        <DynamicIsland />
      </div>
      <Toolbar />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] not-italic relative shrink-0 text-center w-full">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-white text-[18px] w-full">Master Your Sound</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">{`bossound`}</p>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="progress_bar">
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[50px]" data-name="bg" />
      <div className="absolute bg-white h-[8px] left-0 rounded-[50px] top-0 w-[125px]" data-name="progress" />
    </div>
  );
}

function ProgressBarSection() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="progress_bar_section">
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">1:49</p>
      <ProgressBar />
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">-1:56</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <ProgressBarSection />
    </div>
  );
}

function Fill() {
  return <div className="absolute inset-0 rounded-[461.76px]" data-name="Fill" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[#222] left-1/2 rounded-[468px] size-[78px] to-[#111] top-1/2" data-name="BG">
      <div aria-hidden="true" className="absolute border-[#333] border-[1.092px] border-solid inset-0 pointer-events-none rounded-[468px]" />
      <Fill />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[56.16px] items-center justify-center min-w-[56.159996032714844px] px-[12.48px] relative rounded-[156px] shrink-0" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-white text-[31.2px] text-center tracking-[0.624px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
        <p className="leading-[37.44px]">{`\u{100286}`}</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[18.72px] items-center justify-center min-w-[68.63999938964844px] px-[3.12px] relative rounded-[468px] shrink-0 size-[78px]" data-name="Button Group 1">
      <Bg />
      <Text />
    </div>
  );
}

function Leading() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#222] h-[78px] items-start relative rounded-[249.6px] shrink-0 to-[#111]" data-name="Leading">
      <div aria-hidden="true" className="absolute border-[#333] border-[1.092px] border-solid inset-0 pointer-events-none rounded-[249.6px]" />
      <ButtonGroup />
    </div>
  );
}

function PlaybackControls() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="playback controls">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-white text-[24px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`\u{10028A}`}</p>
      <Leading />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-white text-[24px] tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`\u{10028C}`}</p>
    </div>
  );
}

function ControlsSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="controls section">
      <PlaybackControls />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[16px] top-[250px] w-[361px]">
      <div className="aspect-[1400/1400] relative rounded-[30px] shrink-0 w-full" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImage31} />
      </div>
      <Frame2 />
      <ControlsSection />
    </div>
  );
}

function Tint() {
  return <div className="absolute bg-black inset-0 rounded-[1000px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1),0px_1px_8px_0px_rgba(0,0,0,0.12)]" data-name="Tint" />;
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Text1() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0 w-[300px]" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Rounded:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-center text-white tracking-[1px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
        <p className="leading-[normal]">Try equalizer</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1A1A1A] border-[#333] border-[0.7px] border-solid h-[108px] left-1/2 rounded-[29px] top-[124px] w-[361px]">
      <p className="absolute font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[1.2] left-[100.3px] not-italic text-white text-[17px] top-[15.3px] w-[159px]">Equalize your music!</p>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] h-[52px] items-center justify-center left-1/2 px-[20px] py-[6px] rounded-[1000px] top-[51.3px] w-[353px]" data-name="Button">
        <Tint />
        <GlassEffect />
        <Text1 />
      </div>
    </div>
  );
}

export default function Player() {
  return (
    <div className="bg-black relative size-full" data-name="Player">
      <NavBars />
      <div className="-translate-x-1/2 absolute bottom-0 flex h-[49.257px] items-center justify-center left-1/2 w-[393px]">
        <div className="flex-none rotate-180">
          <DynamicIsland2 />
        </div>
      </div>
      <Frame3 />
      <Frame />
    </div>
  );
}