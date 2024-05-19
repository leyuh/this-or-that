"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import OPTIONS_DATA from "../modules/optionsData";

function OptionDiv ({
  optionData,
  otherOption,
  options,
  nextIndex,
  setNextIndex,
  setOption,
  neverPicked,
  setNeverPicked,
  lineUp,
  setLineUp,
  disabled=false
}) {

  if (!optionData) return;
  
  const {
    name,
    desc,
    image
  } = optionData;


  return (
    <div className={`bg-gray-200 grow rounded-md relative p-4 ${!disabled && "option-div"} w-[50%]`} onClick={() => {
      console.log(neverPicked, lineUp);
      if (disabled) return;

      if (lineUp.indexOf(otherOption.name) === -1) {
        setNeverPicked(prev => [otherOption.name, ...prev]);
      }
      if (lineUp.indexOf(optionData.name) !== -1) {
        setLineUp(prev => [optionData.name, ...prev.filter(op => op !== optionData.name)]);
      } else {
        setLineUp(prev => [optionData.name, ...prev]);
      }


      setOption(options[nextIndex])
      setNextIndex(prev => Math.min(prev + 1, OPTIONS_DATA.length));
    }}>
      <div className="overflow-hidden w-[200px] h-[200px] mx-auto mt-4 relative">
        <Image 
          src={image}
          alt={name}
          className="rounded-md"
          fill={true}
          sizes={"200px"}
          priority={true}
          style={{
            objectFit: "cover"
          }}
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

  const [neverPicked, setNeverPicked] = useState([]);
  const [lineUp, setLineUp] = useState([]);

  const [showTrash, setShowTrash] = useState(false);

  const [nextIndex, setNextIndex] = useState(2);

  useEffect(() => {
    let shuffledOptions = OPTIONS_DATA.sort((a, b) => (Math.floor(Math.random() * 2) - 1));
    setOptions(shuffledOptions);
    setOptionA(shuffledOptions[0]);
    setOptionB(shuffledOptions[1]);
  }, [])

  return (
    <section className="mt-20">
      <h1 className="text-white text-center mt-2 text-xl font-bold">this or that</h1>
      <div className="flex bg-gray-100 max-w-2xl mx-auto mt-6 gap-4 p-4 rounded-md justify-center">
        {(nextIndex !== options?.length) ? <>
          <OptionDiv 
            optionData={optionA}
            otherOption={optionB}
            options={options}
            nextIndex={nextIndex}
            setNextIndex={setNextIndex}
            setOption={setOptionB}
            neverPicked={neverPicked}
            setNeverPicked={setNeverPicked}
            lineUp={lineUp}
            setLineUp={setLineUp}
          />
          <OptionDiv 
            optionData={optionB}
            otherOption={optionA}
            options={options}
            nextIndex={nextIndex}
            setNextIndex={setNextIndex}
            setOption={setOptionA}
            neverPicked={neverPicked}
            setNeverPicked={setNeverPicked}
            lineUp={lineUp}
            setLineUp={setLineUp}
          />
        </> : <OptionDiv 
          optionData={options.filter(op => op.name === lineUp[0])[0]}
          disabled={true}
        />}
      </div>

      <div className="max-w-2xl mx-auto mt-4 p-2 bg-gray-700 rounded-md">
        <ul className="flex text-white font-bold overflow-x-scroll pb-3 pt-1 gap-2" style={{
          direction: "rtl"
        }}>
          {lineUp.map((name, i) => (
            <li key={i} className="flex flex-col mx-4">
              <span className="text-gray-400 text-center">#{i + 1}</span>
              <span className="text-center whitespace-nowrap">{name}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
