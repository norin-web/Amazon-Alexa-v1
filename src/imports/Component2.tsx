import svgPaths from "./svg-ynkisw3lr4";
type StoreDownloadButtonProps = {
  className?: string;
  language?: "English" | "Dutch" | "French" | "German";
  store?: "App Store" | "Google Play";
  type?: "Dark" | "Light";
};

function StoreDownloadButton({ className, language = "English", store = "Google Play", type = "Dark" }: StoreDownloadButtonProps) {
  const isAppStore = store === "App Store";
  const isAppStoreAndFrench = store === "App Store" && language === "French";
  const isAppStoreAndIsDutchOrGermanOrEnglish = store === "App Store" && ["Dutch", "German", "English"].includes(language);
  const isAppStoreAndLight = store === "App Store" && type === "Light";
  const isGooglePlay = store === "Google Play";
  const isLight = type === "Light";
  return (
    <div className={className || `h-[40px] relative rounded-[6px] w-[120px] ${isLight ? "bg-white" : "bg-black"}`}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {isAppStore && (
          <>
            <div className="absolute h-[24px] left-[8px] top-[8px] w-[20px]" data-name="Apple">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
                <g id="Apple">
                  <path d={svgPaths.p39414c00} fill={isAppStoreAndLight ? "var(--fill-0, black)" : "var(--fill-0, white)"} id="<Path>" />
                  <path d={svgPaths.p279a94f0} fill={isAppStoreAndLight ? "var(--fill-0, black)" : "var(--fill-0, white)"} id="<Path>_2" />
                </g>
              </svg>
            </div>
            <div className={`-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[36px] not-italic top-1/2 w-[78px] ${isAppStoreAndLight ? "text-black" : "text-white"}`} data-name="Content">
              <p className="font-['SF_Compact_Text:Medium',sans-serif] leading-[9px] relative shrink-0 text-[9px] w-full">{store === "App Store" && language === "English" ? "Download on the" : store === "App Store" && language === "German" ? "Laden im" : store === "App Store" && language === "Dutch" ? "Download in de" : isAppStoreAndFrench ? "Télécharger dans" : ""}</p>
              <p className={`font-["SF_Compact_Display:Medium",sans-serif] leading-none relative shrink-0 tracking-[-0.47px] w-full ${isAppStoreAndIsDutchOrGermanOrEnglish ? "text-[18px]" : "text-[17px]"}`}>{isAppStoreAndIsDutchOrGermanOrEnglish ? "App Store" : isAppStoreAndFrench ? "l’App Store" : ""}</p>
            </div>
          </>
        )}
        {isGooglePlay && (
          <>
            <div className="absolute h-[24px] left-[8px] top-[8px] w-[21px]" data-name="Playstore">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
                <g id="Playstore">
                  <path d={svgPaths.p3e6f9e80} fill="var(--fill-0, #EA4335)" id="path94" />
                  <path d={svgPaths.p8018300} fill="var(--fill-0, #FBBC04)" id="path98" />
                  <path d={svgPaths.p17386100} fill="var(--fill-0, #4285F4)" id="path102" />
                  <path d={svgPaths.p25fa7f00} fill="var(--fill-0, #34A853)" id="path106" />
                </g>
              </svg>
            </div>
            <div className={`absolute content-stretch flex flex-col gap-[3px] items-start left-[36px] ${store === "Google Play" && ["German", "English"].includes(language) ? "top-[5px]" : "top-[5.5px]"}`} data-name="Content">
              <p className={`font-["Product_Sans:Regular",sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 uppercase w-[min-content] ${store === "Google Play" && type === "Light" && ["German", "English"].includes(language) ? "text-[10px] text-black" : store === "Google Play" && type === "Light" && ["Dutch", "French"].includes(language) ? "text-[9px] text-black" : store === "Google Play" && type === "Dark" && ["German", "English"].includes(language) ? "text-[10px] text-white" : "text-[9px] text-white"}`}>{store === "Google Play" && type === "Light" && language === "English" ? "GET IT ON" : store === "Google Play" && language === "German" ? "Jetzt bei" : store === "Google Play" && language === "French" ? "Disponible sur" : store === "Google Play" && language === "Dutch" ? "Ontdek het op" : "GET IT ON"}</p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="h-[15px] relative w-[74px]" data-name="path90">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 15">
                      <path d={svgPaths.p3d8e9c00} fill={store === "Google Play" && type === "Light" ? "var(--fill-0, black)" : "var(--fill-0, white)"} id="path90" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] ${isLight ? "border-black" : "border-[#a6a6a6]"}`} />
    </div>
  );
}

export default function StoreDownloadButton1() {
  return <StoreDownloadButton className="bg-black relative rounded-[6px] size-full" store="App Store" />;
}