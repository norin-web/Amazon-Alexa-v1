import svgPaths from "./svg-ofnzu4r3rk";
import { imgBlur } from "./svg-5d6rh";

function DynamicIsland() {
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

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-white text-[17px] w-[127px]">Enable equalizer</p>
    </div>
  );
}

function Frame() {
  return <div className="content-stretch flex flex-[1_0_0] h-[10px] items-center justify-center min-h-px min-w-px" data-name="Frame" />;
}

function Knob() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame16 />
      <div className="bg-[#34c759] content-stretch flex items-center justify-between overflow-clip p-[2px] relative rounded-[100px] shrink-0 w-[64px]" data-name="Toggle - Switch">
        <Frame />
        <Knob />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1A1A1A] content-stretch flex flex-col items-start left-1/2 p-[16px] rounded-[29px] top-[124px] w-[361px]">
      <div aria-hidden="true" className="absolute border-[#333] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[29px]" />
      <Frame22 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-white text-[17px] w-[127px]">Bass Boost</p>
    </div>
  );
}

function Frame1() {
  return <div className="content-stretch flex flex-[1_0_0] h-[10px] items-center justify-center min-h-px min-w-px" data-name="Frame" />;
}

function Knob1() {
  return <div className="bg-[#333] h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full">
      <Frame17 />
      <div className="bg-[#555] content-stretch flex items-center justify-start overflow-clip p-[2px] relative rounded-[100px] shrink-0 w-[64px]" data-name="Toggle - Switch">
        <Knob1 />
        <Frame1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[329px] relative w-[16px]">
      <div className="absolute inset-[0_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 329">
          <g id="Group 5">
            <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="329" id="Rectangle 71" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="94" id="Rectangle 72" rx="2" width="4" x="10" />
            <g filter="url(#filter0_d_2004_1339)" id="Ellipse 54">
              <circle cx="12" cy="98" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1339" width="24" x="0" y="90">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1339" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1339" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame24 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[329px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1A1A1A] content-stretch flex flex-col items-start left-[calc(50%-4px)] p-[16px] rounded-[29px] top-[628px] w-[361px]">
      <div aria-hidden="true" className="absolute border-[#333] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[29px]" />
      <Frame23 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-white text-[17px] w-[127px]">Surround sound</p>
    </div>
  );
}

function Frame2() {
  return <div className="content-stretch flex flex-[1_0_0] h-[10px] items-center justify-center min-h-px min-w-px" data-name="Frame" />;
}

function Knob2() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full">
      <Frame18 />
      <div className="bg-[#34c759] content-stretch flex items-center justify-between overflow-clip p-[2px] relative rounded-[100px] shrink-0 w-[64px]" data-name="Toggle - Switch">
        <Frame2 />
        <Knob2 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[329px] relative w-[16px]">
      <div className="absolute inset-[0_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 329">
          <g id="Group 5">
            <rect fill="var(--fill-0, white)" fillOpacity="0.2" height="329" id="Rectangle 71" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="94" id="Rectangle 72" rx="2" width="4" x="10" />
            <g filter="url(#filter0_d_2004_1339)" id="Ellipse 54">
              <circle cx="12" cy="98" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1339" width="24" x="0" y="90">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1339" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1339" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame26 />
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[329px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1A1A1A] content-stretch flex flex-col items-start left-[calc(50%-4px)] p-[16px] rounded-[29px] top-[728px] w-[361px]">
      <div aria-hidden="true" className="absolute border-[#333] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[29px]" />
      <Frame25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[24px] py-[12px] relative rounded-[53px] shrink-0">
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-center text-black whitespace-nowrap">Custom</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#1A1A1A] content-stretch flex gap-[4px] items-center px-[24px] py-[12px] relative rounded-[53px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.7px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[53px]" />
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-white text-center whitespace-nowrap">Acoustic</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1A1A1A] content-stretch flex gap-[4px] items-center px-[24px] py-[12px] relative rounded-[53px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.7px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[53px]" />
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-white text-center whitespace-nowrap">Jazz</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#1A1A1A] content-stretch flex gap-[4px] items-center px-[24px] py-[12px] relative rounded-[53px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.7px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[53px]" />
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-white text-center whitespace-nowrap">Custom</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#1A1A1A] content-stretch flex gap-[4px] items-center px-[24px] py-[12px] relative rounded-[53px] shrink-0">
      <p className="font-['SF_Pro_Rounded:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[13px] text-white text-center whitespace-nowrap">Custom</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%+61px)] top-[208px]">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[262px] left-[4px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831836">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="127" id="Rectangle 2085654393" rx="2" width="4" x="10" y="135" />
            <g filter="url(#filter0_d_2004_1369)" id="Ellipse 235">
              <circle cx="12" cy="140" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1369" width="24" x="0" y="132">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1369" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1369" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[286px] relative shrink-0 w-[19px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[9.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">125</p>
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[262px] left-[6px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831845">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="154" id="Rectangle 2085654393" rx="2" width="4" x="10" y="108" />
            <g filter="url(#filter0_d_2004_1391)" id="Ellipse 235">
              <circle cx="12" cy="110" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1391" width="24" x="0" y="102">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1391" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1391" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[286px] relative shrink-0 w-[21px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[10.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">500</p>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[262px] left-0 top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831846">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="104" id="Rectangle 2085654393" rx="2" width="4" x="10" y="158" />
            <g filter="url(#filter0_d_2004_1407)" id="Ellipse 235">
              <circle cx="12" cy="160" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1407" width="24" x="0" y="152">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1407" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1407" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[286px] relative shrink-0 w-[11px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[5.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">1k</p>
      <Frame15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[262px] left-[2px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831837">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="127" id="Rectangle 2085654393" rx="2" width="4" x="10" y="135" />
            <g filter="url(#filter0_d_2004_1374)" id="Ellipse 235">
              <circle cx="12" cy="140" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1374" width="24" x="0" y="132">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1374" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1374" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[286px] relative shrink-0 w-[13px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[6.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">2k</p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[262px] left-[2px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831838">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="203" id="Rectangle 2085654393" rx="2" width="4" x="10" y="59" />
            <g filter="url(#filter0_d_2004_1379)" id="Ellipse 235">
              <circle cx="12" cy="60" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1379" width="24" x="0" y="52">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1379" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1379" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[286px] relative shrink-0 w-[13px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[6.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">4k</p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[262px] left-[2px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831837">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="127" id="Rectangle 2085654393" rx="2" width="4" x="10" y="135" />
            <g filter="url(#filter0_d_2004_1374)" id="Ellipse 235">
              <circle cx="12" cy="140" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1374" width="24" x="0" y="132">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1374" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1374" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[286px] relative shrink-0 w-[13px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[6.5px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">8k</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[262px] left-[4px] top-0 w-[10px]">
      <div className="absolute inset-[0_-70%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 262">
          <g id="Frame 1244831843">
            <rect fill="var(--fill-0, #333)" height="262" id="Rectangle 2085654392" rx="2" width="4" x="10" />
            <rect fill="var(--fill-0, white)" height="73" id="Rectangle 2085654393" rx="2" width="4" x="10" y="189" />
            <g filter="url(#filter0_d_2004_1364)" id="Ellipse 235">
              <circle cx="12" cy="190" fill="var(--fill-0, white)" r="8" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24" id="filter0_d_2004_1364" width="24" x="0" y="182">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2004_1364" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2004_1364" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[286px] relative shrink-0 w-[18px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Rounded:Medium',sans-serif] leading-none left-[9px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[274px] tracking-[-0.72px] whitespace-nowrap">16k</p>
      <Frame13 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[32px] items-center left-[calc(50%+22.5px)] top-[290px]">
      <Frame30 />
      <Frame29 />
      <Frame28 />
      <Frame27 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function DynamicIsland2() {
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

function DynamicIsland1() {
  return (
    <div className="absolute h-[49.315px] left-0 top-0 w-[393px]" data-name="Dynamic Island">
      <div className="absolute h-[60px] left-0 top-0 w-[393px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 60">
          <path d={svgPaths.p218b3680} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
      <DynamicIsland2 />
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
          Equalizer
        </p>
      </div>
    </div>
  );
}

export default function Eq() {
  return (
    <div className="bg-black relative size-full" data-name="Eq">
      <DynamicIsland />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame7 />
      <Frame31 />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[393px]" data-name="NavBars">
        <div className="h-[62px] relative shrink-0 w-[393px]" data-name="Status Bar">
          <DynamicIsland1 />
        </div>
        <ToolbarTop />
      </div>
    </div>
  );
}