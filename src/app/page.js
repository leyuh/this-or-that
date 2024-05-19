"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import OPTIONS_DATA from "../modules/optionsData";

function OptionDiv ({ optionData, options, nextIndex, setNextIndex, setOption }) {

  if (!optionData) return;
  const {
    name,
    desc,
    image
  } = optionData;

  return (
    <div className="bg-gray-200 grow rounded-md relative p-4 option-div" onClick={() => {
      setOption(options[nextIndex])
      setNextIndex(prev => Math.min(prev + 1, OPTIONS_DATA.length - 1));
    }}>
      <div className="overflow-hidden w-[200px] h-[200px] mx-auto mt-4 relative">
        <Image 
          src={image}
          alt={name}
          className="rounded-md"
          fill={true}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
      
      <h3 className="text-center font-bold my-2 text-md">{name}</h3>
      <p className="text-center text-sm">{desc}</p>
    </div>
  )
}

export default function Home() {

  const [options, setOptions] = useState(null);

  const [optionA, setOptionA] = useState(null);
  const [optionB, setOptionB] = useState(null);

  const [nextIndex, setNextIndex] = useState(2);

  useEffect(() => {
    let shuffledOptions = OPTIONS_DATA.sort((a, b) => (Math.floor(Math.random() * 2) - 1));
    setOptions(shuffledOptions);
    setOptionA(shuffledOptions[0]);
    setOptionB(shuffledOptions[1]);
  }, [])

  return (
    <section>
      <div className="grid grid-cols-2 bg-gray-100 max-w-2xl mx-auto mt-20 gap-4 p-4 rounded-md">
        <OptionDiv 
          optionData={optionA}
          options={options}
          nextIndex={nextIndex}
          setNextIndex={setNextIndex}
          setOption={setOptionB}
        />
        <OptionDiv 
          optionData={optionB}
          options={options}
          nextIndex={nextIndex}
          setNextIndex={setNextIndex}
          setOption={setOptionA}
        />
      </div>
    </section>
  );
}
