import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={
          "https://avatars.githubusercontent.com/u/78318848?s=400&u=6e590db140362afa35ac339b390a6d4839a1ce02&v=4"
        }
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
