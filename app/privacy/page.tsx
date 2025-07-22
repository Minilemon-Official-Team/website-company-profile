import React from 'react';
import { Mail } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="bg-[#1b1b1b] py-14 min-h-screen">
            <div className="w-full mx-auto sm:max-w-[1000px] px-4 lg:px-0 mb-10 md:mb-0 flex flex-col gap-y-10">
                <h1 className='leading-[1.8] tracking-[0.04em] text-2xl text-[#d1d9e6]'>Privacy Policy Minilemon AR</h1>
                <div>
                    <p className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Effective Date: 5 April 2025</p>
                    <p className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Last Updated: 27 June 2025</p>
                </div>
                <p className="leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                    Welcome to Minilemon AR (“the App”), developed by Mata Rajawali under the Dtopeng Kingdom Foundation (“we,” “our,” or “us”). We respect your privacy and are committed to protecting any information accessed through the use of this App.
                </p>
                <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                <ol className='list-decimal space-y-10'>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Introduction
                        <div className='mx-4 mt-2'>
                            <p>
                                This Privacy Policy explains how the App interacts with your device and how any accessed data is handled. It also outlines our compliance with the <span className='underline text-orange-500'>Google Play User Data Policy.</span>
                            </p>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Information We Collect
                        <div className='mx-4 mt-2'>
                            <p>
                                The App does not collect, store, or share any personal or sensitive user information. However, to function properly, the App may access limited technical data as outlined below:
                            </p>
                            <div className='mx-4 mt-2'>
                                <ul className='list-disc space-y-2'>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Camera Access
                                        <p>The App requires access to your device&apos;s camera to detect AR markers and display virtual content related to the Minilemon.</p>
                                        <div className='mx-4 mt-2'>
                                            <ul className='list-disc space-y-2 mt-2'>
                                                <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Usage: This access is used exclusively for real-time AR rendering.</li>
                                                <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Data Handling: The App does not record, store, or transmit any images or videos.</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        App Performance and Diagnostic Data
                                        <p>We may collect anonymized crash logs and performance metrics to improve app stability and functionality.</p>
                                        <div className='mx-4 mt-2'>
                                            <ul className='list-disc space-y-2 mt-2'>
                                                <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Data Type: Technical, non-identifiable logs and error reports.</li>
                                                <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>Usage: For debugging and performance monitoring only.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        How We Use This Information
                        <div className='mx-4 mt-2'>
                            <p>
                                Any accessed or collected information is used solely for:
                            </p>
                            <div className='mx-4 mt-2'>
                                <ul className='list-disc space-y-2'>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Enabling the AR features to function as intended.
                                    </li>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Diagnosing and resolving technical issues.
                                    </li>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Improving the overall user experience and app performance.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Data Sharing and Security
                        <div className='mx-4 mt-2'>
                            <div className='mx-4 mt-2'>
                                <ul className='list-disc space-y-2'>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        We do not sell, rent, or share any data with third parties.
                                    </li>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Diagnostic data, if collected, is used internally only for development purposes.
                                    </li>
                                    <li className='leading-[1.8] tracking-[0.04em] text-[#d1d9e6]'>
                                        Reasonable security measures are implemented to protect any data accessed by the App.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Third-Party Services
                        <div className='mx-4 mt-2'>
                            <p>This App does not integrate with any third-party services that collect or process personal data. If any third-party tools are used for analytics or crash reporting, they will process anonymized, non-identifiable data only.</p>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Your Privacy Rights
                        <div className='mx-4 mt-2'>
                            <p>As no personal data is collected by this App, no user action is required for data management or deletion. However, users may contact us with any questions or concerns regarding privacy.</p>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Policy Updates
                        <div className='mx-4 mt-2'>
                            <p>We may update this Privacy Policy to reflect app improvements or changes in legal requirements. Any updates will be posted on this page with the new effective date. Continued use of the App after such changes indicates your acceptance of the revised policy.</p>
                        </div>
                    </li>
                    <div aria-label='Privacy Policy Divider' className='border-b border-[#c5cce0]/90'></div>
                    <li className="ml-5 lg:ml-0 leading-[1.8] tracking-[0.04em] text-[#d1d9e6]">
                        Contact Information
                        <div className='md:mx-4 mt-2'>
                            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                            <div className='md:mx-4 mt-2'>
                                <p>Dtopeng Kingdom Foundation</p>
                                <div className='flex items-center gap-x-2'>
                                    <Mail className='md:block hidden' />
                                    <p>Email: <a href='mailto:dtopengkingdom@gmail.com' className='text-orange-500 underline'>dtopengkingdom@gmail.com</a></p>
                                </div>
                            </div>
                            <p className='mt-5'>Thank you for using Minilemon AR!</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Privacy