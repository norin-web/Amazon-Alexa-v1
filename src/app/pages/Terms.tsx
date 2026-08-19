import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="overflow-hidden bg-black text-white selection:bg-white selection:text-black">

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                lineHeight: 0.95,
              }}
            >
              Terms of Use
            </h1>
            <p style={{ fontSize: "14px", fontWeight: 500, color: "#6C8794", letterSpacing: "0.04em" }}>
              Effective Date: August 17, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20 bg-black">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-14 text-white"
          >

            {/* Intro */}
            <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]" style={{ borderTop: "1px solid #10202A", paddingTop: "36px" }}>
              <p>These Terms of Use ("Terms") govern your access to and use of the mobile application ("App") and its related features and services.</p>
              <p>By downloading, accessing, or using the App, you agree to these Terms. If you do not agree with these Terms, do not use the App.</p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">1. About the App</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App is a mobile audio utility designed to help users connect to compatible audio devices and manage supported audio and playback functions from their mobile device.</p>
                <p>Depending on device compatibility, system capabilities, and the content selected by the user, features may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>connection and setup assistance for compatible audio devices;</li>
                  <li>music and audio playback controls;</li>
                  <li>playback of user-selected audio and media files;</li>
                  <li>streaming or transmission of supported audio using compatible system technologies;</li>
                  <li>sound and audio effect controls;</li>
                  <li>supported lighting and visual-effect controls; and</li>
                  <li>related audio-device management functionality.</li>
                </ul>
                <p>Availability of individual features may depend on the user's device, operating system, connected hardware, network environment, media source, geographic region, and third-party technologies.</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">2. Brand Authorization</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Certain Amazon and Alexa names or trademarks may be used in connection with the App pursuant to authorization granted by the applicable rights holder.</p>
                <p>Such authorized trademark use does not transfer ownership of those trademarks to the App publisher. All applicable trademark rights remain with their respective owners.</p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">3. Eligibility</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>You must be legally capable of entering into a binding agreement under the laws applicable to you.</p>
                <p>If you are not legally capable of accepting these Terms on your own, you may use the App only with the involvement and permission of a parent or legal guardian.</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">4. Device Compatibility and Connectivity</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App is designed to work with compatible devices and technologies. Compatibility cannot be guaranteed for every soundbar, speaker, television, receiver, mobile device, operating-system version, network configuration, or media format.</p>
                <p>Some functionality may rely on technologies made available by the user's device or operating system, including AirPlay where supported.</p>
                <p>The App does not control the continued availability, operation, or compatibility of third-party hardware, operating-system functionality, wireless networks, AirPlay, media sources, or other external technologies.</p>
                <p>Updates to hardware, firmware, operating systems, network configurations, or third-party services may affect functionality.</p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">5. User Media and Files</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may allow you to select, access, play, or transmit audio or other media stored on or made available through your device.</p>
                <p>You remain responsible for the files and content you choose to access or use.</p>
                <p>You must have all rights and permissions necessary to use any content through the App. You may not knowingly use the App to reproduce, transmit, distribute, or otherwise use copyrighted or protected material in violation of applicable law or third-party rights.</p>
                <p>Access to user-selected media is used to provide the functionality requested by the user.</p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">6. Acceptable Use</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>You agree to use the App only for lawful purposes and in accordance with these Terms.</p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>use the App in violation of applicable law or third-party rights;</li>
                  <li>attempt to interfere with or disrupt the normal operation of the App;</li>
                  <li>attempt to bypass security or access restrictions;</li>
                  <li>reverse engineer the App except where such restriction is prohibited by applicable law;</li>
                  <li>use the App to knowingly distribute malicious or unlawful content; or</li>
                  <li>falsely represent an affiliation, authorization, or relationship that does not exist.</li>
                </ul>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">7. Subscriptions and In-App Purchases</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may offer auto-renewable subscriptions or other in-app purchases that provide access to premium functionality.</p>
                <p>Purchases made through the Apple App Store are processed by Apple through the user's Apple ID account and are subject to Apple's applicable payment and subscription terms.</p>
                <p>The price, subscription period, and any introductory offer or trial, when available, are displayed on the purchase screen before confirmation.</p>
                <p>Payment will be charged to your Apple ID account upon confirmation of purchase, subject to any applicable trial or introductory offer.</p>
                <p>Auto-renewable subscriptions renew automatically unless canceled in accordance with Apple's subscription-management requirements. Renewal charges are processed by Apple under the terms displayed at the time of purchase.</p>
                <p>You can manage or cancel your subscription through your Apple ID subscription settings.</p>
                <p>Deleting the App does not automatically cancel an active subscription.</p>
                <p>Any refund request for a purchase processed by Apple is handled in accordance with Apple's applicable policies and procedures.</p>
                <p>Apphud may be used to support subscription entitlement and purchase-status functionality. Payment processing remains handled by Apple where the subscription is purchased through the Apple App Store.</p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">8. Free Trials and Promotional Offers</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Where a free trial, introductory price, or promotional subscription offer is available, its duration and conditions will be displayed before purchase.</p>
                <p>Eligibility for an offer may be determined by Apple and may depend on previous subscriptions or purchases.</p>
                <p>Unless canceled in accordance with the terms displayed by Apple, an eligible trial or introductory subscription may convert into a paid subscription at the applicable displayed price.</p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">9. Third-Party Technologies and Services</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Certain functionality may depend upon technologies, devices, platforms, or services provided by third parties.</p>
                <p>AirPlay and other operating-system functionality are provided through their respective platforms and are subject to the availability, compatibility, and terms of those platforms.</p>
                <p>References to third-party products, technologies, services, or trademarks are provided where relevant to compatibility or functionality and do not transfer ownership of any third-party intellectual property.</p>
                <p>The App publisher is not responsible for outages, modifications, discontinuation, compatibility changes, or other actions controlled solely by third parties.</p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">10. No Guarantee of Device Availability</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App does not manufacture or control third-party soundbars, speakers, televisions, receivers, or other compatible hardware.</p>
                <p>Actual functionality may differ between devices. A feature shown or described in the App may not be supported by every device.</p>
                <p>Users should verify the capabilities and compatibility of their own hardware.</p>
              </div>
            </div>

            {/* 11 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">11. Updates and Changes</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may be updated from time to time to improve functionality, maintain compatibility, address security or technical issues, or comply with applicable platform requirements.</p>
                <p>Features may be added, modified, replaced, or discontinued where reasonably necessary.</p>
                <p>We do not guarantee that every previous feature or compatibility configuration will remain available indefinitely.</p>
              </div>
            </div>

            {/* 12 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">12. Intellectual Property</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Except for third-party trademarks, user-owned content, and other materials identified as belonging to their respective owners, the App and its original software, interface, design, graphics, and related materials are protected by applicable intellectual-property laws.</p>
                <p>These Terms grant you a limited, personal, non-exclusive, non-transferable, revocable right to use the App for its intended purposes.</p>
                <p>No ownership rights in the App are transferred to you.</p>
              </div>
            </div>

            {/* 13 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">13. Disclaimer of Warranties</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>To the maximum extent permitted by applicable law, the App is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
                <p>We do not warrant that the App will operate without interruption or error, that every device will be compatible, or that every feature will remain continuously available.</p>
                <p>Nothing in these Terms excludes any warranty or consumer right that cannot lawfully be excluded under applicable law.</p>
              </div>
            </div>

            {/* 14 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">14. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>To the maximum extent permitted by applicable law, the App publisher shall not be liable for indirect, incidental, special, consequential, or similar damages arising from or relating to use of or inability to use the App.</p>
                <p>This includes, where legally permissible, losses resulting from incompatible devices, network interruptions, third-party service interruptions, unavailable media, hardware behavior, or changes made by third-party technology providers.</p>
                <p>Nothing in these Terms limits liability where such limitation is prohibited by applicable law.</p>
              </div>
            </div>

            {/* 15 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">15. Termination</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>You may stop using the App at any time.</p>
                <p>We may restrict access to the App or particular functionality where reasonably necessary to address unlawful use, security risks, material violations of these Terms, technical requirements, or legal obligations.</p>
                <p>Termination of access to the App does not itself cancel an active subscription administered by Apple. Subscription cancellation must be completed through the applicable Apple account settings.</p>
              </div>
            </div>

            {/* 16 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">16. Apple-Specific Terms</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>If you downloaded the App through the Apple App Store, you acknowledge that these Terms are between you and the App publisher, and not Apple.</p>
                <p>Apple is not responsible for the App or its content, except to the extent required under Apple's applicable terms or applicable law.</p>
                <p>Apple has no obligation to provide maintenance or support services for the App.</p>
                <p>In the event of any failure of the App to conform to an applicable warranty, you may notify Apple, and Apple may refund the purchase price, if any, to the extent required by Apple's applicable terms and applicable law. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App.</p>
                <p>You represent that you are not located in a country or region subject to an applicable U.S. government embargo and are not prohibited from receiving the App under applicable U.S. law.</p>
                <p>You must comply with applicable third-party terms when using the App.</p>
                <p>Apple and its subsidiaries are intended third-party beneficiaries of these Terms with respect to the App distributed through the Apple App Store and may enforce the applicable provisions of these Terms against you.</p>
              </div>
            </div>

            {/* 17 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">17. Privacy</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Use of the App is also subject to our Privacy Policy, which explains how information and device-access permissions are handled.</p>
                <p>The App is designed to operate without requiring users to create an account.</p>
              </div>
            </div>

            {/* 18 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">18. Changes to These Terms</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>We may update these Terms where reasonably necessary to reflect changes to the App, applicable law, platform requirements, or business practices.</p>
                <p>The updated Terms will carry a revised effective date. Where required by applicable law, additional notice or consent will be provided.</p>
                <p>Continued use of the App after an update becomes effective constitutes acceptance of the revised Terms to the extent permitted by applicable law.</p>
              </div>
            </div>

            {/* 19 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">19. Governing Law and Consumer Rights</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>These Terms are governed by applicable law, subject to any mandatory consumer-protection rights available to you in your country or region.</p>
                <p>Nothing in these Terms is intended to deprive a consumer of protections that cannot lawfully be waived or limited by contract.</p>
              </div>
            </div>

            {/* 20 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">20. Contact</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>If you have questions regarding these Terms or require support, contact:</p>
                <p>
                  <a
                    href="mailto:tomislav@aquaeco.store"
                    className="text-white font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-200"
                  >
                    tomislav@aquaeco.store
                  </a>
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
