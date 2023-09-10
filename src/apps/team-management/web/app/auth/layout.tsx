import Image from 'next/image';
import { Suspense } from 'react';
import banner from '../../public/images/Group 8.png';
import { BackButton } from './_module/components/BackButton';
import Loading from './loading';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 box-border h-full w-full ">
        <div className="overflow-x-hidden flex flex-col min-h-full w-full min-w-full max-w-full no_scroll md:overflow-y-hidden">
          <div className="w-full flex justify-between items-center h-[10%] px-[15px] box-border mt-4">
            <h1 className="text-3xl font-bold">Ducen</h1>
            <BackButton to={'/auth/login'} text={'Back to login'}></BackButton>
          </div>
          <div className="h-full w-full md:overflow-y-hidden">

            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col box-border w-full">
          <div className="hidden md:flex bg-[#9747FF] h-full w-full justify-center items-center">
            <Image src={banner} alt="banner" className="h-[75%] w-[85%] aspect-[1/1]"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
