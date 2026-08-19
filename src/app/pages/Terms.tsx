import { motion } from "motion/react";

export default function Terms() {
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
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter uppercase">Terms of Use</h1>
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
                <p>These Terms of Use ("Terms") govern your access to and use of the Application provided by aqua eco d.o.o. ("aqua eco", "we", "our", or "us").</p>
                <p>By downloading, installing, accessing, or using the Application, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Application.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">1. About the Application</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application is developed, published, and maintained by aqua eco d.o.o..</p>
                <p>The Application is designed to work with compatible Sonos products and allows users to discover, connect, manage, and control supported devices using the features available within the Application.</p>
                <p>Some features may require compatible hardware, an active local network connection, internet access, or software provided by Sonos or other third-party services.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">2. Authorization</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>aqua eco d.o.o. has received authorization from Sonos, Inc. to develop, distribute, and operate applications compatible with supported Sonos products and to use approved Sonos trademarks and branding in connection with such applications.</p>
                <p>All Sonos trademarks, logos, product names, product images, and related intellectual property remain the exclusive property of Sonos, Inc.</p>
                <p>The authorization granted to aqua eco does not transfer ownership of any Sonos intellectual property to aqua eco or to users of the Application.</p>
                <p>Unless expressly stated otherwise, the Application is independently developed, operated, and supported by aqua eco.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">3. License</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>aqua eco grants you a limited, non-exclusive, non-transferable, revocable license to use the Application solely for your personal and lawful use.</p>
                <p>You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>copy, modify, distribute, or sell the Application;</li>
                  <li>reverse engineer or attempt to extract the source code except where permitted by law;</li>
                  <li>use the Application for unlawful purposes;</li>
                  <li>interfere with the operation of the Application or connected services;</li>
                  <li>use the Application to gain unauthorized access to any device, account, or network.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">4. Subscriptions</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>Certain features of the Application may require an active subscription.</p>
                <p>Subscription prices, billing periods, trial offers, and available plans are displayed before purchase.</p>
                <p>Subscriptions automatically renew unless canceled through your Apple ID account at least 24 hours before the end of the current billing period.</p>
                <p>Deleting the Application does not cancel an active subscription.</p>
                <p>Payments are processed by Apple through the App Store.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">5. Third-Party Services</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application may communicate with compatible Sonos products and services.</p>
                <p>Some functionality depends on third-party products, operating systems, local network availability, or services that are not controlled by aqua eco.</p>
                <p>aqua eco is not responsible for interruptions, compatibility issues, or service changes introduced by Sonos, Apple, internet providers, or other third parties.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">6. Intellectual Property</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application, including its software, interface, design, graphics, and original content, is owned by or licensed to aqua eco and is protected by applicable intellectual property laws.</p>
                <p>All Sonos trademarks and related branding remain the exclusive property of Sonos, Inc.</p>
                <p>Nothing contained in these Terms transfers ownership of any intellectual property to you.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">7. User Responsibilities</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>You agree to use the Application responsibly and only with devices that you own or are authorized to control.</p>
                <p>You are responsible for maintaining the security of your devices, local network, and user accounts.</p>
                <p>You are solely responsible for any activity performed through your device.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">8. Availability</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>We may update, improve, modify, suspend, or discontinue any part of the Application at any time without prior notice.</p>
                <p>Certain features may become unavailable due to software updates, compatibility changes, network limitations, or modifications made by Sonos or other third-party providers.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">9. Disclaimer</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>The Application is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
                <p>To the maximum extent permitted by law, aqua eco makes no warranties regarding uninterrupted availability, compatibility, reliability, or error-free operation.</p>
                <p>We do not guarantee that every feature will function with every supported device, operating system version, or network environment.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">10. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>To the fullest extent permitted by law, aqua eco shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of the Application.</p>
                <p>aqua eco is not responsible for losses resulting from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>unsupported devices;</li>
                  <li>local network issues;</li>
                  <li>internet outages;</li>
                  <li>third-party services;</li>
                  <li>Sonos software or firmware updates;</li>
                  <li>Apple platform changes;</li>
                  <li>user configuration errors.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">11. Termination</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>We reserve the right to suspend or terminate access to the Application if these Terms are violated or if continued access may create legal, technical, or security risks.</p>
                <p>You may discontinue using the Application at any time.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">12. Changes to These Terms</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>We may revise these Terms from time to time.</p>
                <p>Updated versions become effective once published within the Application or on our official website.</p>
                <p>Your continued use of the Application after changes become effective constitutes acceptance of the updated Terms.</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tight">13. Contact</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-medium text-lg">
                <p>If you have any questions regarding these Terms, please contact:</p>
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
