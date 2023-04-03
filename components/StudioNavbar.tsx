import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#2cf608] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#2cf608] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#2cf608]">
          <h1 className="font-bold text-white">Code on github</h1>
          <Link href="https://github.com/Supakornn" className="text-[#2cf608] font-bold ml-2">
            Supakornn
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
