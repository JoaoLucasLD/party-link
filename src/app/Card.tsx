import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className="flex flex-col justify-center w-[388px] h-[509px] bg-[#E9511C] rounded-[18px]">
      <div className="flex flex-col justify-center items-center mt-5 gap-8">
        <Image width={128} height={128} alt={props.alt} src={props.source} />
        <p className="font-bold text-2xl text-center">{props.title}</p>
      </div>
      <div className="flex justify-center items-center w-full my-9">
        <div className="w-[70%]">
          <p className="text-xl text-center">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
