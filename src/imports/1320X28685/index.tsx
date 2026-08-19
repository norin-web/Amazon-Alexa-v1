import svgPaths from "./svg-g2quqctr";
import imgEllipse1 from "./dc000bb3e9b93c826ce88506bd8eb87fa03eb694.png";
import imgEllipse2 from "./da865c446e1e9d7642034b028ce82a6a1865f27d.png";
import imgEllipse3 from "./50caacbf9465aa31c949b4aebb3e9a2e5c79e335.png";
import imgEllipse4 from "./fd875d45df24e8455f8bdf1481d8af1795ed8a96.png";
import imgEllipse5 from "./8845a45194f9007bbf707abbad20097b38d28d2f.png";
import imgEllipse6 from "./a994231722e6e016e28144e721151cabc453efaa.png";
import imgEllipse7 from "./9b934395b86d2af58e31dd1c9bafb0e94cad5d02.png";
import imgEllipse8 from "./ed4f6def4b1b0fc5db868d2a03441fa7d13c55b9.png";
import imgEllipse9 from "./4684a31ac1551eeff134db2d3fd3b6c50d4ab10d.png";
import { imgBlur } from "./svg-bky5u";

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[120px] w-[1320px]">
      <p className="[word-break:break-word] font-['SF_Pro_Rounded:Bold',sans-serif] leading-[1.04] not-italic relative shrink-0 text-[140px] text-center text-white tracking-[1.4px] w-full" dir="auto">
        Stream from
        <br aria-hidden />
        {`Files & Apps`}
      </p>
    </div>
  );
}

function DynamicIsland1() {
  return <div className="-translate-x-1/2 absolute bg-[#008edd] h-[78.551px] left-[calc(50%+1.27px)] rounded-[32.246px] top-[20.27px] w-[278.729px]" data-name="Dynamic Island" />;
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+61.92px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border-[2.534px] border-black border-solid bottom-[33.33%] left-[calc(50%+145.82px)] opacity-35 rounded-[4.506px] top-[42.59%] w-[63.347px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+232.6px)] top-[51.45%] w-[3.365px]" data-name="Cap">
        <svg className="absolute block inset-0 size-full" fill="none" height="10.3268" preserveAspectRatio="none" viewBox="0 0 3.36511 10.3268" width="3.36511">
          <path d={svgPaths.p8f403c0} fill="black" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[37.04%] left-[calc(50%+145.82px)] rounded-[2.62px] top-[46.3%] w-[53.212px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[136.83px] left-[63.61%] opacity-0 right-0 top-[calc(50%+8.8px)]" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%-12.56px)] top-[43.77%] w-[43.435px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" height="31.2387" preserveAspectRatio="none" viewBox="0 0 43.4352 31.2387" width="43.4352">
          <path clipRule="evenodd" d={svgPaths.p2afede00} fill="black" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-77.6px)] top-[43.59%] w-[48.651px]" data-name="Cellular Connection">
        <svg className="absolute block inset-0 size-full" fill="none" height="30.9805" preserveAspectRatio="none" viewBox="0 0 48.6508 30.9805" width="48.6508">
          <path clipRule="evenodd" d={svgPaths.p111359f2} fill="black" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[136.83px] left-0 opacity-0 right-[64.89%] top-[calc(50%+8.8px)]" data-name="Time">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Semibold',sans-serif] inset-[33.96%_47.33%_23.63%_26.58%] leading-[55.746px] not-italic text-[43.08px] text-black text-center whitespace-nowrap">9:41</p>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="absolute h-[119.236px] left-0 top-0 w-[950.211px]" data-name="Dynamic Island">
      <div className="absolute h-[145.07px] left-0 top-0 w-[950.211px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d={svgPaths.p10be9200} fill="black" id="Subtract" opacity="0" />
        </svg>
      </div>
      <DynamicIsland1 />
      <Levels />
      <Time />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 top-0">
      <p className="[word-break:break-word] font-['SF_Pro_Rounded:Bold',sans-serif] leading-[99.131px] not-italic relative shrink-0 text-[82.207px] text-black tracking-[0.9671px] whitespace-nowrap">Stream</p>
    </div>
  );
}

function Title() {
  return (
    <div className="flex-[1_0_0] h-[99.131px] min-w-px relative" data-name="Title">
      <Frame />
    </div>
  );
}

function ToolbarTop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar - Top">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[38.685px] relative size-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function NavBarsDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="NavBars/Default">
      <div className="h-[149.906px] relative shrink-0 w-[950.211px]" data-name="Status Bar">
        <DynamicIsland />
      </div>
      <ToolbarTop />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[950.211px]">
      <NavBarsDefault />
    </div>
  );
}

function Grabber() {
  return (
    <div className="content-stretch flex flex-col h-[38.718px] items-start pt-[12.099px] relative shrink-0" data-name="Grabber">
      <div className="bg-[#ccc] h-[12.099px] relative rounded-[241.985px] shrink-0 w-[87.115px]" data-name="Grabber" />
    </div>
  );
}

function Blur1() {
  return (
    <div className="absolute blur-[24.198px] inset-[67.76px_62.92px_58.08px_62.92px] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-183.908px_-188.748px] mask-size-[calc(100%+367.817px)_calc(100%+367.817px)] rounded-[2419.847px]" style={{ maskImage: `url("${imgBlur}")` }} data-name="Blur">
      <div aria-hidden className="absolute backdrop-blur-[48.397px] bg-[rgba(0,0,0,0.04)] inset-0 mix-blend-hard-light pointer-events-none rounded-[2419.847px]" />
    </div>
  );
}

function Blur() {
  return (
    <div className="absolute inset-[-62.92px] opacity-67" data-name="Blur">
      <Blur1 />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[716.275px]" data-name="Fill">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[716.275px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[716.275px]" />
        <div className="absolute inset-0 rounded-[716.275px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 247, 247) 0%, rgb(247, 247, 247) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Spacer() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[19.359px]" data-name="Spacer" />
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Controls">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[38.718px] relative size-full">
          <div className="relative shrink-0" data-name="Component 25">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[24.198px] items-center relative size-full">
                <div className="h-[106.473px] min-w-[106.4732894897461px] relative rounded-[716.275px] shrink-0" data-name="Button Group 1">
                  <div aria-hidden className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none rounded-[716.275px]" />
                  <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                    <div className="content-stretch flex gap-[29.038px] items-center justify-center min-w-[inherit] px-[4.84px] relative size-full">
                      <div className="-translate-y-1/2 absolute h-[106.473px] left-0 right-0 top-1/2" data-name="BG">
                        <Blur />
                        <Fill />
                        <GlassEffect />
                      </div>
                      <div className="h-[87.115px] min-w-[87.11450958251953px] relative rounded-[100px] shrink-0" data-name="Text">
                        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[19.359px] relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#404040] text-[41.14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
                              <p className="leading-[normal]">{`\u{100BF6}`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Spacer />
          <div className="h-[106.473px] relative rounded-[716.275px] shrink-0" data-name="Leading Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[29.038px] items-center justify-center px-[9.679px] relative size-full">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[106.473px] top-1/2" data-name="BG">
                  <svg className="absolute block inset-0 size-full" fill="none" height="106.473" preserveAspectRatio="none" viewBox="0 0 106.473 106.473" width="106.473">
                    <circle cx="53.2366" cy="53.2366" fill="#787880" fillOpacity="0.16" id="BG" r="53.2366" />
                  </svg>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] h-full justify-center leading-[0] relative shrink-0 text-[#727272] text-[41.14px] text-center w-[87.115px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
                  <p className="leading-[normal]">{`\u{100184}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[53.237px] left-[calc(50%+1.21px)] top-[31.46px] w-[87.115px]" data-name="Title">
            <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[53.237px] left-0 right-0 text-[#1a1a1a] text-[41.14px] text-center top-0 tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pb-[24.198px] top-0 w-[951px]" data-name="Toolbar">
      <Grabber />
      <TitleAndControls />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Because they want our seat</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">{`Sara Landry & Nico Moreno`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse1} width="96.763" />
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Because they want our seat</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">{`Sara Landry & Nico Moreno`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse2} width="96.763" />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Because they want our seat</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">{`Sara Landry & Nico Moreno`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse3} width="96.763" />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black w-[191.106px]">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px] w-full">Howl</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right w-full">Jake Houlsby</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse4} width="96.763" />
      </div>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Because they want our seat</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">{`Sara Landry & Nico Moreno`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse5} width="96.763" />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">England’s Dreaming</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">Boston Manor</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse6} width="96.763" />
      </div>
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Feel It</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">Luca Fogale</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse7} width="96.763" />
      </div>
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Another light</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">Henry Green</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse8} width="96.763" />
      </div>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.838px] items-start leading-none not-italic relative shrink-0 text-black whitespace-nowrap">
      <p className="font-['SF_Pro_Rounded:Semibold',sans-serif] relative shrink-0 text-[38.71px]">Once moved too slow</p>
      <p className="font-['SF_Pro_Rounded:Regular',sans-serif] opacity-60 relative shrink-0 text-[33.87px] text-right">Tim Schaufert</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[19.353px] items-center left-[38.71px] top-1/2">
      <div className="relative shrink-0 size-[96.763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="96.763" src={imgEllipse9} width="96.763" />
      </div>
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[19.353px] items-start relative shrink-0 w-[873.282px]">
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame4 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame5 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame6 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame7 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100286}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame9 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame11 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame13 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame17 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
      <div className="bg-[#f0f0f0] h-[154.82px] overflow-clip relative rounded-[12px] shrink-0 w-[873.282px]" data-name="Card">
        <Frame19 />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[812.81px] text-[#080808] text-[38.71px] text-center top-1/2 tracking-[0.7742px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss16" 1' }}>
          <p className="leading-[58.058px]">{`\u{100284}`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[227.47px] w-[873.565px]">
      <Frame16 />
    </div>
  );
}

function Sheet() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[-39.87px] drop-shadow-[0px_36.298px_90.744px_rgba(0,0,0,0.18)] h-[1894.74px] left-1/2 rounded-tl-[91.954px] rounded-tr-[91.954px] w-[951px]" data-name="Sheet">
      <Toolbar />
      <Frame15 />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.2)] h-[2060px] left-[calc(50%-0.37px)] overflow-clip top-[calc(50%+0.5px)] w-[950.211px]" data-name="Main">
      <Frame21 />
      <Sheet />
    </div>
  );
}

function HomeConnected() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[12.72px] bg-white h-[2059px] left-[calc(50%-0.13px)] rounded-[145px] top-[calc(50%+186.5px)] w-[949.75px]" data-name="HOME Connected">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Main />
      </div>
      <div aria-hidden className="absolute border-[13.29px] border-[rgba(255,255,255,0.29)] border-solid inset-[-13.29px] pointer-events-none rounded-[158.29px] shadow-[0px_52px_154px_0px_#007dc3]" />
    </div>
  );
}

export default function Component1320X() {
  return (
    <div className="bg-[#008edd] relative size-full" data-name="1320x2868_5">
      <Frame22 />
      <HomeConnected />
    </div>
  );
}