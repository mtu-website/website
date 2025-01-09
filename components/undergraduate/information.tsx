import Link from 'next/link';

import { ArrowDownIcon } from '@radix-ui/react-icons';

export default function Information() {
  const textContent = [
    {
      boxes: [
        {
          id: '1',
          title: 'Select your programme',
          content:
            'Discover programmes that interest you and select your top two programme choices.',
        },
        {
          id: '2',
          title: 'Check admission requirement',
          content:
            'Check the admission requirements before you select the programmes of your choice.',
        },
      ],
    },
    {
      directions: [
        {
          id: '1',
          title: 'Visit the Mountain Top University Admission Portal',
          content: 'Click here to the portal',
        },
        {
          id: '2',
          title: 'Click View Programmes Entry Requirements',
          content:
            'Discover programmes that interest you and select your top two programme choices',
        },
        {
          id: '3',
          title: 'Click Begin Application',
          content:
            'Either from the programmes’ page on the website, or from the Admission Portal, click on “Begin Application',
        },
        {
          id: '4',
          title: 'Select the Application Type',
          content:
            'Select the Application Type to “Undergraduate” from the options',
        },
        {
          id: '5',
          title: 'Fill the page with your correct details',
          content:
            'Fill the rest of the form with all of the appropriate information',
        },
        {
          id: '6',
          title: 'Check the button “I agree to the Terms and Conditions”',
          content:
            'Agree to the terms and conditions and click the “Continue” button',
        },
        {
          id: '7',
          title: 'Note the “Reference Number”',
          content:
            'Take note of the reference number that pops up in the successful registration notification',
        },
        {
          id: '8',
          title: 'Click on “Pay Online”',
          content: '',
        },
        {
          id: '9',
          title: 'Select your ATM Card Issuer',
          content: '',
        },
        {
          id: '10',
          title: 'You will see the details of the fee with the charges',
          content: '',
        },
        {
          id: '11',
          title: 'Click “Continue” to proceed to the payment page',
          content: '',
        },
        {
          id: '12',
          title: 'Enter your card details',
          content: '',
        },
        {
          id: '13',
          title:
            'Enter the OTP sent to your phone number by your bank to complete the transaction successfully',
          content: '',
        },
        {
          id: '14',
          title: 'Log back into Application portal and submit form',
          content: 'Don’t forget to generate and download payment advice',
        },
      ],
    },
  ];

  const boxes = textContent[0].boxes;
  const directions = textContent[1].directions;

  return (
    <section className="my-9">
      <div className="flex items-center justify-center bg-[url('/images/undergraduate/apply-info.svg')] bg-cover bg-no-repeat px-6 py-9 lg:py-24">
        <div className="flex w-fit flex-col items-center justify-center">
          <h1 className="mb-6 w-[270px] text-center font-sans text-xl font-semibold leading-[34.6px] tracking-[-3%] text-white sm:w-fit sm:text-[48.06px] sm:leading-[83.14px] lg:mb-32 lg:leading-[93.42px] xl:text-[54px]">
            Applying for Undergraduate Studies
          </h1>

          <div className="flex flex-col justify-between gap-[62.5px] xl:flex-row">
            {boxes?.map((item) => (
              <div
                key={item.id}
                className="bg-[#6C006D] p-6 lg:my-auto lg:p-12"
              >
                <div className="w-[250.56px] sm:w-[428.26px] lg:w-[440px]">
                  <h3 className="mb-3 font-sans text-[16px] font-bold leading-[20.51px] tracking-[-4%] text-white sm:text-[26.7px] sm:leading-[37.38px] lg:text-3xl lg:leading-[48px]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs font-normal leading-[13.67px] tracking-[-4%] text-white sm:text-[17.8px] sm:leading-[28.48px] lg:text-xl lg:leading-8">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex w-fit justify-center text-center lg:mt-40">
            <div>
              {directions?.map((item) =>
                item.id === '1' ? (
                  <div
                    key={item.id}
                    className="mx-auto my-6 flex flex-col items-center justify-center sm:w-[400px] lg:my-9 lg:w-[690px]"
                  >
                    <article className="mb-12 w-[281.51px] sm:w-[529.1px] lg:mb-24">
                      <h1 className="mb-3 font-sans text-[16px] font-bold leading-[20.51px] tracking-[-4%] text-white sm:text-[26.7px] sm:leading-[37.38px] lg:text-3xl lg:leading-[48px]">
                        {item.title}
                      </h1>
                      <Link
                        href="https://applications.mtu.edu.ng"
                        target="_blank"
                        className="font-sans text-xs font-normal leading-[13.67px] tracking-[-4%] text-white underline sm:text-[17.8px] sm:leading-[28.48px] lg:text-xl lg:leading-8"
                      >
                        {item.content}
                      </Link>
                    </article>
                    <ArrowDownIcon className="h-auto w-[16px] text-white lg:w-[60px]" />
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className="mx-auto mb-6 flex flex-col items-center justify-center sm:w-[400px] lg:mb-9 lg:w-[690px]"
                  >
                    <article className="my-12 w-[281.51px] sm:w-[529.1px] lg:my-24">
                      <h1 className="mb-3 font-sans text-[16px] font-bold leading-[20.51px] tracking-[-4%] text-white sm:text-[26.7px] sm:leading-[37.38px] lg:text-3xl lg:leading-[48px]">
                        {item.title}
                      </h1>
                      <p className="font-sans text-xs font-normal leading-[16px] tracking-[-4%] text-white sm:text-[17.8px] sm:leading-[28.48px] lg:text-xl lg:leading-8">
                        {item?.content}
                      </p>
                    </article>
                    <ArrowDownIcon className="h-auto w-[16px] text-white lg:w-[60px]" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
