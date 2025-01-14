'use client';

import Image from 'next/image';
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#6C006D]">
        <div className="justify-between px-6 py-6 lg:px-8 lg:py-10 xl:flex">
          {/* Left */}
          <article className="py-4 xl:w-[40%]">
            <div className="flex gap-4">
              <Image
                src="/images/logo.png"
                alt="logo image"
                width={32}
                height={24}
              />
              <h3 className="font-whyte text-xs font-bold uppercase leading-6 text-white sm:text-xl">
                mountain top university
              </h3>
            </div>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'The only University on top of the Mountain',
                4000, // wait 1s before replacing "Mice" with "Hamsters"
                'Empowered to excel',
                8000,
              ]}
              wrapper="span"
              speed={50}
              className="my-4 font-sans text-3xl font-medium leading-10 text-[#FF00FF] lg:text-[50px] lg:leading-[65px]"
              repeat={Infinity}
            />
            {/* 
            <h1 className="my-4 font-sans font-medium text-3xl lg:text-[50px] leading-10 lg:leading-[65px] text-[#C7FFC4]">
              Empowered to excel
            </h1> */}
          </article>
          {/* Right */}
          <div className="xl:w-[55%]">
            <div className="justify-between sm:flex">
              <div className="contact w-[310px] sm:w-[370px] xl:w-[430px]">
                <h2 className="footer-heading font-mono text-[16px] xl:text-[18px]">
                  contact us today
                </h2>
                <div className="phone footer-link my-2 flex gap-2 text-sm xl:text-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="phone"
                    className="h-auto w-4"
                  >
                    <path
                      fill="#DBB8FF"
                      d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"
                    ></path>
                  </svg>{' '}
                  <h3>+23470xxxxxxxxx</h3>
                </div>
                <div className="email footer-link my-2 flex gap-2 text-sm xl:text-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="envelope-shield"
                    className="h-auto w-4"
                  >
                    <path
                      fill="#DBB8FF"
                      d="M21.63,5.12a1,1,0,0,0-.84-.2,2.74,2.74,0,0,1-2.2-.46,1,1,0,0,0-1.18,0,2.74,2.74,0,0,1-2.2.46A1,1,0,0,0,14,5.9V9.21a4.62,4.62,0,0,0,1.84,3.7l1.57,1.16a1,1,0,0,0,1.18,0l1.57-1.16A4.62,4.62,0,0,0,22,9.21V5.9A1,1,0,0,0,21.63,5.12ZM20,9.21a2.61,2.61,0,0,1-1,2.09L18,12l-1-.72a2.61,2.61,0,0,1-1-2.09V7a4.67,4.67,0,0,0,2-.54A4.67,4.67,0,0,0,20,7Zm1,6a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.67l5.88,5.88a3,3,0,0,0,2.11.88,3,3,0,0,0,2.15-.9l-.7-.71-.74-.68a1,1,0,0,1-1.4,0L5.41,8.26H11a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-3A1,1,0,0,0,21,15.26Z"
                    ></path>
                  </svg>
                  <h3 className="lowercase">enquires@mtu.edu.ng</h3>
                </div>
                <Link
                  href="https://maps.app.goo.gl/1ZtJkX9aqMZ2iDRq7"
                  className="location footer-link my-2 flex gap-2 text-sm xl:text-[16px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="location-point"
                    className="h-auto w-[22px]"
                  >
                    <path
                      fill="#DBB8FF"
                      d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                    ></path>
                  </svg>
                  <h3 className="leading-5">
                    Kilometer 12, Lagos-Ibadan Expressway,Prayer City, Ogun
                    State. Nigeria
                  </h3>
                </Link>
              </div>
              <div className="social-media my-8 min-w-[140px] sm:my-0">
                <h2 className="footer-heading font-mono text-[16px] xl:text-[18px]">
                  our social media
                </h2>
                <div className="flex gap-4">
                  <Link
                    href="https://www.youtube.com/@mountaintopuniversityictsu9516"
                    className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#FF00FF]"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="youtube"
                      className="h-4 w-4"
                    >
                      <path
                        fill="#120029"
                        d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/official_mtu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#FF00FF]"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="instagram"
                      className="h-4 w-4"
                    >
                      <path
                        fill="#120029"
                        d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://web.facebook.com/MTUOfficialPage/?_rdc=1&_rdr#"
                    className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#FF00FF]"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="facebook-f"
                      className="h-4 w-4"
                    >
                      <path
                        fill="#120029"
                        d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <section className="justify-between sm:flex">
              <div className="quick-links my-8">
                <h2 className="footer-heading font-mono text-[16px] xl:text-[18px]">
                  Quick Links
                </h2>
                <ul className="footer-link font-sans text-sm xl:text-[16px]">
                  <li>
                    <Link href="/why-mtu">virtual tour</Link>
                  </li>
                  <li>
                    <Link href="/jobs-at-mtu">careers</Link>
                  </li>
                  <li>
                    <Link href="/study-at-mtu/#financial-aid">
                      financial aids & scholarships
                    </Link>
                  </li>
                  <li>
                    <Link href="/helpdesk">contact</Link>
                  </li>
                </ul>
              </div>
              <div className="admissions my-8">
                <h2 className="footer-heading font-mono text-[16px] xl:text-[18px]">
                  admissions
                </h2>
                <ul className="footer-link text-sm xl:text-[16px]">
                  <li>
                    <Link href="/study-at-mtu/undergraduate">
                      undergraduate admissions
                    </Link>
                  </li>
                  <li>
                    <Link href="/study-at-mtu/postgraduate">
                      postgraduate admissions
                    </Link>
                  </li>
                  <li>
                    <Link href="/study-at-mtu">international students</Link>
                  </li>
                  <li>
                    <Link href="/study-at-mtu">prospective students</Link>
                  </li>
                </ul>
              </div>
              <div className="research my-8">
                <h2 className="footer-heading font-mono text-[16px] xl:text-[18px]">
                  research
                </h2>
                <ul className="footer-link text-sm xl:text-[16px]">
                  <li>
                    <Link href="/research">research center</Link>
                  </li>
                  <li>
                    <Link href="/library">library</Link>
                  </li>
                  <li>
                    <Link href="/research">CEGRIB</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="items-center justify-between bg-[#000000] px-5 py-6 font-mono sm:flex">
          <article className="mb-5 font-mono text-xs font-medium leading-[13.68px] text-white lg:mb-0 lg:text-sm">
            <span>
              &#169; 2024 Mountain Top University. All rights reserved.
            </span>
          </article>
          <div className="font-mono text-[10px] font-semibold leading-[13.68px] text-white lg:text-sm">
            <Link href="/documentation" className="mr-2 uppercase">
              documentation
            </Link>
            <Link href="/terms-of-use" className="mx-2 uppercase">
              terms of use
            </Link>
            <Link href="/privacy-policy" className="mx-2 uppercase">
              privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
