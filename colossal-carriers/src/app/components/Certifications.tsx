import Image from 'next/image';
import c1 from '../../../public/images/ace.webp';
import c2 from '../../../public/images/aci.webp';
import c3 from '../../../public/images/csa.webp';

export default function Certifications() {
    return(
      <div className="z-5 flex gap-12 flex-row items-center justify-center w-full h-[12vh] bg-gray-200 border-t-2 border-b-2 border-[#59890c] p-8 shadow-2xl">
          <Image
          width={618}
          height={382}
          src={c1.src}
          alt="ace"
          className="w-[25%] lg:w-[12%] xl:w-[8%] h-auto"
          />
            <Image
          width={593}
          height={384}
          src={c3.src}
          alt="aco"
          className="w-[25%] lg:w-[12%] xl:w-[8%] h-auto"
          />
          <Image
          width={593}
          height={384}
          src={c2.src}
          alt="aco"
          className="w-[25%] lg:w-[12%] xl:w-[8%] h-auto"
          />

      </div>
    )
}