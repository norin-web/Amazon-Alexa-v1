import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter uppercase">Privacy Policy</h1>
            <p className="text-xl text-gray-400 font-medium">aqua eco d.o.o.</p>
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
            className="space-y-16 text-white"
          >
            <div>
              <div className="space-y-6 text-gray-400 leading-relaxed font-medium text-lg">
                <p>This Privacy Policy explains how aqua eco d.o.o. ("aqua eco", "we", "our", or "us") processes information when you use the Application.</p>
                <p>The Application is developed, published, operated, and supported by aqua eco d.o.o..</p>
                <p>By downloading, installing, or using the Application, you acknowledge the practices described in this Privacy Policy.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">1. About the Application</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application is designed to work with compatible Sonos products and may allow users to discover, connect to, manage, and control supported devices.</p>
                <p>Some features may require access to your local network, compatible hardware, an internet connection, an active subscription, or services provided by Sonos, Apple, or other third parties.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">2. Authorization from Sonos</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>aqua eco d.o.o. has received authorization from Sonos, Inc. to develop, distribute, and operate applications compatible with supported Sonos products and to use approved Sonos trademarks and branding in connection with such applications.</p>
                <p>All Sonos trademarks, logos, product names, product images, and related intellectual property remain the exclusive property of Sonos, Inc.</p>
                <p>The authorization granted to aqua eco does not transfer ownership of any Sonos intellectual property to aqua eco or to users of the Application.</p>
                <p>The Application is developed, operated, maintained, and supported by aqua eco. aqua eco is responsible for the privacy practices described in this Privacy Policy.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">3. Information Processed by the Application</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may process limited technical information required to provide its functionality.</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>compatible device names and identifiers;</li>
                  <li>device availability and connection status;</li>
                  <li>room, speaker, or group names;</li>
                  <li>playback status;</li>
                  <li>volume and supported device settings;</li>
                  <li>local network information required to discover compatible devices;</li>
                  <li>operating system and application version;</li>
                  <li>subscription or purchase status;</li>
                  <li>technical information related to errors and application performance.</li>
                </ul>
                <p>Information about compatible devices is used only to display, connect to, and control devices selected by the user.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">4. Local Network Access</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may request permission to access your local network.</p>
                <p>Local Network access is required to discover and communicate with compatible Sonos products connected to the same Wi-Fi network.</p>
                <p>The Application may use local network information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>search for compatible devices;</li>
                  <li>establish a connection with selected devices;</li>
                  <li>display device availability;</li>
                  <li>send commands requested by the user;</li>
                  <li>receive current device and playback information.</li>
                </ul>
                <p>Disabling Local Network permission may prevent device discovery and control features from working correctly.</p>
                <p>You can review or disable this permission through your device settings.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">5. Information Stored on Your Device</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Certain information may be stored locally on your device to support the operation of the Application.</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>application preferences;</li>
                  <li>recently connected devices;</li>
                  <li>selected rooms or groups;</li>
                  <li>interface settings;</li>
                  <li>subscription access status;</li>
                  <li>other settings required for convenient use of the Application.</li>
                </ul>
                <p>Locally stored information may be deleted when you remove the Application, clear its data, or reset the relevant settings.</p>
                <p>Information included in an Apple device backup may remain subject to Apple's backup and restoration practices.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">6. Subscriptions and Purchases</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may offer subscriptions, free trials, one-time purchases, or other paid features.</p>
                <p>Payments are processed by Apple through the App Store. aqua eco does not directly receive or store your complete payment-card details.</p>
                <p>To verify access to paid features, the Application may process limited purchase-related information, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>product identifier;</li>
                  <li>transaction status;</li>
                  <li>subscription status;</li>
                  <li>subscription expiration or renewal status;</li>
                  <li>purchase or restoration confirmation.</li>
                </ul>
                <p>This information is used only to activate, maintain, restore, or verify access to purchased features.</p>
                <p>Apple processes payment and account information according to Apple's own privacy policy and applicable terms.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">7. Support Communications</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>If you contact us for support, you may voluntarily provide information such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your name;</li>
                  <li>email address;</li>
                  <li>device model;</li>
                  <li>operating system version;</li>
                  <li>description of the issue;</li>
                  <li>screenshots or other attachments;</li>
                  <li>other information included in your message.</li>
                </ul>
                <p>We use this information only to respond to your request, investigate technical issues, maintain support records, or comply with legal obligations.</p>
                <p>Please do not send passwords, full payment-card details, Sonos account credentials, Apple Account credentials, or unrelated sensitive information.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">8. How Information Is Used</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Information processed through the Application may be used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>provide the requested Application functionality;</li>
                  <li>discover and connect to compatible devices;</li>
                  <li>display device, room, playback, and connection information;</li>
                  <li>execute commands selected by the user;</li>
                  <li>save user preferences;</li>
                  <li>verify subscriptions and purchases;</li>
                  <li>restore previously purchased features;</li>
                  <li>respond to support requests;</li>
                  <li>identify and correct technical issues;</li>
                  <li>maintain security and prevent misuse;</li>
                  <li>comply with legal obligations;</li>
                  <li>protect the rights of users, aqua eco, Sonos, and third parties.</li>
                </ul>
                <p>We do not use local device-control information for unrelated advertising purposes.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">9. Analytics and Diagnostics</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may process limited technical and diagnostic information to identify errors, improve stability, and maintain Application performance.</p>
                <p>Such information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>application version;</li>
                  <li>device model;</li>
                  <li>operating system version;</li>
                  <li>crash or error information;</li>
                  <li>technical events related to Application performance.</li>
                </ul>
                <p>Diagnostic information is not intended to identify you directly and is used only for technical maintenance, reliability, and security.</p>
                <p>Apple may independently provide developers with aggregated or diagnostic information according to your Apple device settings and Apple's privacy practices.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">10. Advertising and Tracking</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application does not sell your personal information.</p>
                <p>The Application does not use information obtained through local network access to create advertising profiles.</p>
                <p>The Application does not track your activity across applications or websites owned by other companies for targeted advertising purposes.</p>
                <p>We do not share personal information with data brokers.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">11. Sharing of Information</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>aqua eco does not sell or rent personal information.</p>
                <p>Information may be shared only where reasonably necessary:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>with service providers that assist in operating subscriptions, purchases, technical infrastructure, or support;</li>
                  <li>with Apple to process and verify App Store purchases;</li>
                  <li>with Sonos-operated services when necessary to provide a feature requested by the user;</li>
                  <li>with professional advisers where required for legal, accounting, or compliance purposes;</li>
                  <li>when required by law, court order, or valid governmental request;</li>
                  <li>to investigate fraud, security incidents, misuse, or violations of legal rights;</li>
                  <li>to protect the rights, safety, and property of aqua eco, Sonos, users, or third parties.</li>
                </ul>
                <p>Service providers may process information only for the purposes for which it was provided and according to their own legal and contractual obligations.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">12. Sonos Services</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Certain Application features may depend on products, software, accounts, interfaces, or services operated by Sonos.</p>
                <p>When you use a Sonos-operated product or service, Sonos may independently process information under its own privacy policy and terms.</p>
                <p>aqua eco does not control how Sonos processes information through Sonos accounts, cloud services, websites, devices, software, or other Sonos-operated systems.</p>
                <p>This Privacy Policy applies only to information processed by aqua eco through the Application.</p>
                <p>The authorization granted by Sonos to aqua eco does not mean that Sonos receives all information processed through the Application.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">13. Third-Party Services</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may depend on services provided by Apple, Sonos, network providers, subscription-management providers, or other third parties.</p>
                <p>These providers may independently process technical, purchase, account, or service information according to their own privacy policies.</p>
                <p>aqua eco is not responsible for the independent privacy practices of third-party services.</p>
                <p>We recommend reviewing the privacy policies of any third-party services you use in connection with the Application.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">14. Data Retention</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Information stored locally remains on your device until you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>delete it through the Application;</li>
                  <li>reset the relevant settings;</li>
                  <li>remove the Application;</li>
                  <li>replace or reset your device.</li>
                </ul>
                <p>Support communications may be retained for as long as reasonably necessary to respond to your request, maintain business records, resolve disputes, prevent abuse, or comply with legal obligations.</p>
                <p>Purchase and subscription records are primarily retained by Apple according to Apple's own policies.</p>
                <p>Limited purchase-validation information may be retained for as long as necessary to provide paid access, restore purchases, prevent fraud, or resolve billing-related issues.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">15. Data Security</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>We use reasonable technical and organizational measures intended to protect information processed through the Application.</p>
                <p>However, no mobile application, local network, wireless connection, electronic communication, or storage system can be guaranteed to be completely secure.</p>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>protecting access to your device;</li>
                  <li>maintaining the security of your Wi-Fi network;</li>
                  <li>using secure account credentials;</li>
                  <li>installing operating system and device updates;</li>
                  <li>preventing unauthorized access to connected products;</li>
                  <li>reviewing permissions granted to the Application.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">16. Children's Privacy</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application is not designed to knowingly collect personal information from children.</p>
                <p>Children should use the Application only with the permission and supervision of a parent or legal guardian.</p>
                <p>We do not knowingly create advertising profiles for children or sell children's personal information.</p>
                <p>If you believe that a child has provided personal information to us through a support request, please contact us so that we can review and, where appropriate, delete the information.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">17. Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Depending on your country or region, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>request access to personal information;</li>
                  <li>request correction of inaccurate information;</li>
                  <li>request deletion of personal information;</li>
                  <li>object to or restrict certain processing;</li>
                  <li>withdraw consent where processing is based on consent;</li>
                  <li>request data portability;</li>
                  <li>submit a complaint to a competent data protection authority.</li>
                </ul>
                <p>Because much of the Application's operational information may be stored locally on your device, aqua eco may not have access to or control over that information.</p>
                <p>Privacy requests may be submitted to: <a href="mailto:nikolic@litcoding.store" className="text-white font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-200">nikolic@litcoding.store</a></p>
                <p>We may request reasonable information necessary to verify your request and determine whether we hold any relevant records.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">18. International Data Processing</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may be available in multiple countries.</p>
                <p>Where information is processed by support providers, Apple, Sonos, or other service providers, it may be transferred to or processed in countries other than your country of residence.</p>
                <p>Where required by applicable law, appropriate measures will be used to protect personal information during international processing.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">19. Business Transfers</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>If aqua eco undergoes a merger, restructuring, financing, acquisition, sale of assets, or similar corporate transaction, limited business and support records may be transferred as permitted by applicable law.</p>
                <p>Any rights relating to Sonos trademarks, branding, products, or technology remain subject to the applicable authorization agreement with Sonos and do not automatically transfer to another company.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">20. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>We may update this Privacy Policy to reflect changes in:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Application functionality;</li>
                  <li>technical practices;</li>
                  <li>legal requirements;</li>
                  <li>App Store policies;</li>
                  <li>Sonos integrations;</li>
                  <li>permissions;</li>
                  <li>third-party services;</li>
                  <li>business or security practices.</li>
                </ul>
                <p>The updated Privacy Policy will include a revised effective date.</p>
                <p>Where required, material changes may be communicated through the Application, the App Store listing, or another appropriate method.</p>
                <p>Continued use of the Application after an updated Privacy Policy becomes effective means that you acknowledge the revised policy.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">21. Contact Us</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>If you have questions, requests, or concerns regarding this Privacy Policy, please contact:</p>
                <p>aqua eco d.o.o.</p>
                <p>
                  Email:{" "}
                  <a href="mailto:nikolic@litcoding.store" className="text-white font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors duration-200">
                    nikolic@litcoding.store
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
