import { motion } from "motion/react";

export default function Privacy() {
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
              Privacy Policy
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
              <p>This Privacy Policy explains how information is handled when you use our mobile application ("App").</p>
              <p>We designed the App with a privacy-focused approach. The App does not require you to create an account, does not operate a proprietary user-data backend, and is designed to keep application data on your device except where limited information must be processed by Apple, Apphud, or other system functionality that you intentionally use.</p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">1. Overview</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App provides functionality for connecting to and controlling compatible audio devices, managing playback, accessing user-selected media, streaming supported audio, adjusting sound effects, and controlling supported lighting features.</p>
                <p>The App does not use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>user accounts or registration;</li>
                  <li>our own backend for storing personal information;</li>
                  <li>Firebase;</li>
                  <li>advertising SDKs;</li>
                  <li>third-party advertising;</li>
                  <li>analytics SDKs; or</li>
                  <li>crash-reporting SDKs.</li>
                </ul>
                <p>We do not operate a server that receives or stores your personal media, playback history, connected-device information, or other locally maintained application data.</p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">2. Information Stored on Your Device</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may store information locally on your device when necessary to provide its functionality and remember your preferences.</p>
                <p>Depending on how you use the App, locally stored information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>application settings;</li>
                  <li>audio and playback preferences;</li>
                  <li>sound-effect settings;</li>
                  <li>lighting-effect settings;</li>
                  <li>information necessary to remember compatible or previously used device configurations;</li>
                  <li>temporary application state; and</li>
                  <li>other preferences necessary for the App to operate.</li>
                </ul>
                <p>This information is intended to remain on your device and is not transmitted to our servers because we do not operate a backend for collecting this information.</p>
                <p>Removing the App may remove locally stored application data in accordance with the behavior of your operating system.</p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">3. User-Selected Media and Files</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may allow you to select and use audio or other supported media available on your device.</p>
                <p>The App accesses such content only when necessary to perform functionality initiated by you, such as selecting, playing, or transmitting a media file.</p>
                <p>Your selected media is not uploaded to or stored on our servers.</p>
                <p>Where you choose to play or transmit content to another compatible device using system functionality such as AirPlay, the content or associated technical information may be transmitted between devices as necessary to perform the action you requested.</p>
                <p>Such transmission is part of the device or operating-system functionality selected by you and does not result in us storing your media on our servers.</p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">4. Device Access and System Permissions</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Depending on your device, operating-system version, and the features you choose to use, the App may request access to certain device capabilities or content.</p>
                <p>Such access may include access necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>select and use audio or media files;</li>
                  <li>discover or communicate with compatible devices where required by the operating system;</li>
                  <li>use supported playback or streaming functionality; and</li>
                  <li>perform other functions expressly initiated by you.</li>
                </ul>
                <p>The exact system permission prompts available to you are determined by the functionality being used and the operating system.</p>
                <p>We use device access only to provide the corresponding feature.</p>
                <p>You can review or modify permissions through your device settings where supported by the operating system. Disabling a permission may prevent the related feature from functioning correctly.</p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">5. AirPlay and Compatible Devices</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may use or interact with AirPlay functionality made available through Apple platforms to enable supported playback or transmission to compatible devices.</p>
                <p>When you choose to use AirPlay, communication necessary to perform that action is handled through Apple's system functionality and the devices or networks involved in the connection.</p>
                <p>We do not receive or store the content you transmit through AirPlay on our own servers.</p>
                <p>Availability and operation of AirPlay are subject to the user's device, network environment, compatible hardware, operating system, and Apple's applicable technologies and terms.</p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">6. Subscriptions and Purchases</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may offer subscriptions or other in-app purchases.</p>
                <p>Purchases made through the Apple App Store are processed by Apple. We do not directly receive or store your full payment-card details.</p>
                <p>Apple may process information associated with your purchase in accordance with Apple's own privacy practices.</p>
                <p>The App uses Apphud to support subscription-related functionality, such as determining whether a subscription or premium entitlement is active.</p>
                <p>For this purpose, limited technical and purchase-related information may be processed as necessary to validate and manage subscription status. This may include information such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>purchase and subscription status;</li>
                  <li>product identifiers;</li>
                  <li>transaction-related identifiers;</li>
                  <li>subscription entitlement information; and</li>
                  <li>limited technical information necessary for subscription functionality.</li>
                </ul>
                <p>This processing is limited to providing and maintaining purchase and subscription functionality.</p>
                <p>We do not use Apphud for advertising or behavioral tracking.</p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">7. Analytics and Tracking</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App does not use third-party analytics SDKs.</p>
                <p>We do not use Firebase Analytics or similar analytics services to monitor your activity within the App.</p>
                <p>The App does not use advertising SDKs and does not display third-party advertising.</p>
                <p>We do not use information collected through the App to track you across applications or websites owned by other companies for advertising purposes.</p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">8. Crash Reporting</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App does not use a third-party crash-reporting service.</p>
                <p>Technical issues may therefore be investigated using information voluntarily provided by a user when contacting support, together with ordinary diagnostic information that the user chooses to provide.</p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">9. Accounts</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App does not require account registration or a user profile.</p>
                <p>We therefore do not collect information such as your name, postal address, password, or profile information for the purpose of creating an App account.</p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">10. Communications With Us</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>If you contact us by email for support or another inquiry, we will receive the information that you voluntarily provide in your message.</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your email address;</li>
                  <li>the contents of your message;</li>
                  <li>attachments you choose to provide; and</li>
                  <li>technical information you voluntarily include for troubleshooting.</li>
                </ul>
                <p>We use this information to respond to your request, provide support, investigate technical issues, and maintain necessary business correspondence.</p>
                <p>Please avoid sending sensitive personal information that is not necessary for us to address your request.</p>
              </div>
            </div>

            {/* 11 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">11. Brand and Trademark Information</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Certain Amazon and Alexa names or trademarks may be used in connection with the App pursuant to authorization granted by the applicable rights holder.</p>
                <p>Such trademark authorization does not change how personal information is handled under this Privacy Policy. The respective trademark owners retain their applicable intellectual-property rights.</p>
              </div>
            </div>

            {/* 12 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">12. Information We Do Not Intentionally Collect</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Based on the App's current functionality, we do not intentionally collect through our own servers:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your name or physical address;</li>
                  <li>account credentials;</li>
                  <li>contacts;</li>
                  <li>precise location;</li>
                  <li>health or fitness information;</li>
                  <li>browsing history;</li>
                  <li>search history;</li>
                  <li>advertising identifiers for behavioral advertising;</li>
                  <li>user media files;</li>
                  <li>audio recordings;</li>
                  <li>payment-card details; or</li>
                  <li>the contents of media transmitted through AirPlay.</li>
                </ul>
                <p>If the App's functionality changes in a way that materially changes these practices, this Privacy Policy will be updated accordingly.</p>
              </div>
            </div>

            {/* 13 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">13. Sharing of Information</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>We do not sell your personal information.</p>
                <p>We do not share personal information with advertising networks or data brokers.</p>
                <p>Limited information may be processed by service providers only where necessary to provide functionality requested by you, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Apple, for App Store distribution, purchases, subscriptions, and applicable system functionality; and</li>
                  <li>Apphud, for subscription and entitlement management.</li>
                </ul>
                <p>Information may also be disclosed if required by applicable law, legal process, or a valid request from a competent authority.</p>
              </div>
            </div>

            {/* 14 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">14. Data Retention</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Application settings and related information stored locally remain on your device until they are removed through the App, overwritten through ordinary use, or removed when the App is deleted, depending on the applicable functionality and operating-system behavior.</p>
                <p>Information associated with App Store purchases and subscriptions may be retained by Apple and Apphud in accordance with their respective requirements and privacy practices.</p>
                <p>If you contact us directly, we may retain your correspondence for as long as reasonably necessary to respond to your request, maintain appropriate business records, resolve disputes, or comply with legal obligations.</p>
              </div>
            </div>

            {/* 15 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">15. Data Security</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>We take reasonable measures appropriate to the nature of the App to protect information within our control.</p>
                <p>Because most application information is designed to remain locally on your device, the security of such information also depends on the security of your device, operating system, accounts, and network environment.</p>
                <p>No electronic system can be guaranteed to be completely secure.</p>
              </div>
            </div>

            {/* 16 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">16. Children's Privacy</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App is not designed to knowingly collect personal information from children through an account, advertising system, analytics platform, or proprietary backend.</p>
                <p>Because the App does not require account registration and we do not operate a backend for collecting ordinary App usage data, we do not knowingly maintain profiles of children.</p>
                <p>If you believe that a child has provided personal information directly to us, for example through a support email, please contact us so that we can review the request and take appropriate action.</p>
              </div>
            </div>

            {/* 17 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">17. International Users</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>The App may be available in multiple countries and regions.</p>
                <p>Most App information is processed locally on the user's device. Where information is processed by Apple, Apphud, or another platform service selected by the user, processing may occur in accordance with that provider's infrastructure and privacy practices.</p>
                <p>Where applicable law provides users with specific privacy rights, those rights remain available to the extent required by law.</p>
              </div>
            </div>

            {/* 18 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">18. Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Depending on where you live, applicable privacy law may provide rights relating to personal information, including rights to request access, correction, deletion, or information about certain processing activities.</p>
                <p>Because we do not maintain user accounts or a proprietary database of ordinary App usage information, we may not possess information that can be associated with you in response to such a request.</p>
                <p>For information processed directly by Apple or another independent provider, you may need to exercise applicable rights directly with that provider.</p>
                <p>For information you have provided directly to us, you may contact us using the address below.</p>
              </div>
            </div>

            {/* 19 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">19. Third-Party Services</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>Third-party platforms and technologies used in connection with the App operate under their own terms and privacy practices.</p>
                <p>This Privacy Policy describes our own handling of information and does not replace the privacy policies of Apple, Apphud, device manufacturers, or other third parties whose services you independently use.</p>
                <p>We encourage you to review the applicable privacy information provided by those services where relevant.</p>
              </div>
            </div>

            {/* 20 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">20. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>We may update this Privacy Policy to reflect changes to the App, its functionality, legal requirements, platform requirements, or our information-handling practices.</p>
                <p>When this Privacy Policy is updated, the Effective Date above will be revised.</p>
                <p>If a change materially affects the way personal information is handled, additional notice or consent will be provided where required by applicable law.</p>
              </div>
            </div>

            {/* 21 */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold uppercase tracking-tight">21. Contact Us</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[17px]">
                <p>If you have questions about this Privacy Policy, privacy practices, or information you have provided directly to us, contact:</p>
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
