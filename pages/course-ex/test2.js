import React, { useState, useRef, useEffect } from 'react'
import questions from "questions.json";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

export default () => {

    const route = [
        {
            title: "หน้าหลัก",
            link: "/member",
        },
        {
            title: "คลังความรู้",
            link: "#",
        },
        {
            title: "คอร์สเรียนเสริม",
            link: "#",
        },
        {
            title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1",
            link: "#",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };

    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    questions[currentQuestion].answerOptions.map

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
    };

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
            questions[i].answerOptions.map(
                (answer) =>
                    answer.isCorrect &&
                    answer.answer === selectedOptions[i]?.answerByUser &&
                    (newScore += 1)
            );
        }
        setScore(newScore);
        setShowScore(true);
    };

    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {

        setTimer('00:15:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 900);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <div className="py-[29px]">
            <div className="px-[104px]">
                <MoveToTop />
                <Breadcrumb route={route} />
            </div>
            <div className="grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center">
                การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1
            </div>
            <div className="px-[104px]">
                <div className="grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]">
                    <div className="flex">
                        <a href="/course-ex" className="ml-[31px] py-[14px] px-[11px] my-[13px]">
                            รายละเอียดหลักสูตร
                        </a>
                        <a href="/course-ex/course" className="ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]">
                            เข้าเรียน
                        </a>
                        <a href="#" className="pl-[29px] my-[13px] py-[14px] px-[11px]">
                            ผลการเรียน
                        </a>
                    </div>
                    <hr className="border-1 border-black opacity-25 w-full" />
                    <div className="flex flex-row-2">
                        <div className="flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                            <ol className="ml-[40px] mt-[32px]">
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
                                                <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[339px] h-[48px] ml-[12px] cursor-pointer">ดาวน์โหลดเอกสาร</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[48px] text-black ml-[28px]">บทที่ 2 ทำความรู้จักกับภาษาซี</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 3 การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 4 การเขียนโปรแกรมแบบทางเลือก</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#FFCA61]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-white">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                            </svg>
                                        </div>
                                        <a href="#" className="w-[200px] h-[48px] text-[#FFCA61] ml-[12px]">แบบทดสอบหลังเรียน</a>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className="mx-auto">
                            {showScore ? (
                                <div className="flex flex-col">
                                    <div className="font-semibold text-[22px] mt-[32px] mx-[310px]">แบบทดสอบหลังเรียน</div>
                                    <hr class="class-1" />
                                    <div className="font-semibold text-[32px] mt-[10px] text-[#FFCA61] mx-auto">ผ่าน</div>
                                    <div className="text-[16px] mt-[10px] mb-[20px] text-[#FFCA61] mx-auto">คะแนนของคุณ 4/5 คะแนน</div>
                                    <div className="mx-auto">
                                        <ul class="chart-skills3">
                                            <li>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="text-[18px] mt-[56px] ml-[42px]">จำนวนคำถาม</div>
                                        <div className="text-[18px] mt-[56px] ml-[147px]">5 ข้อ</div>
                                    </div>
                                    <hr class="class-2" />
                                    <div className="flex flex-row">
                                        <div className="text-[18px] mt-[25px] ml-[42px]">จำกัดเวลา</div>
                                        <div className="text-[18px] mt-[25px] ml-[171px]">15 นาที</div>
                                    </div>
                                    <hr class="class-2" />
                                    <div className="flex flex-row">
                                        <div className="text-[18px] mt-[25px] ml-[42px]">เกณฑ์การทำข้อสอบ</div>
                                        <div className="text-[18px] mt-[25px] ml-[96px]">ผู้เรียนต้องทำคะแนนให้ได้เกณฑ์มากกว่า 70 %</div>
                                    </div>
                                    <hr class="class-2" />
                                    <a href="/course-ex/summary2" className="text-[16px] mt-[20px] drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] text-center w-[155px] h-[52px] py-[13px] bg-[#FFCA61] rounded-[8px] mx-auto">ผลการเรียน</a>
                                </div>
                            ) : (
                                <div className="w-[830px] flex flex-col mx-auto">
                                    <div className="flex justify-between items-center mt-[32px] w-full">
                                        <div className="font-semibold text-[22px] ml-[20px]">แบบทดสอบหลังเรียน</div>
                                        <div className="flex flex-row items-center mr-[20px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-[24px] h-[24px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="font-semibold text-[22px] ml-[8px]">{timer}</div>
                                        </div>
                                    </div>
                                    <hr class="class-1" />
                                    <div className="flex flex-col items-start w-full px-[56px]">
                                        <h4 className="mt-10 text-xl text-black/60">
                                            คำถามที่ {currentQuestion + 1} จาก {questions.length}
                                        </h4>
                                        <div className="mt-4 text-[22px] text-black">
                                            {questions[currentQuestion].question}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full px-[56px]">
                                        {questions[currentQuestion].answerOptions.map((answer, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 cursor-pointer rounded-xl"
                                                onClick={(e) => handleAnswerOption(answer.answer)}
                                            >
                                                <input
                                                    type="radio"
                                                    name={answer.answer}
                                                    value={answer.answer}
                                                    checked={answer.answer === selectedOptions[currentQuestion]?.answerByUser}
                                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                                    className="w-5 h-5 bg-black"
                                                />
                                                <p className="ml-6 text-black text-[16px]">{answer.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mx-auto">
                                        <button
                                            onClick={handlePrevious}
                                            className="px-[22px] py-[10px] bg-white rounded-lg drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] mr-[11px] border-[1px] border-[#BFBFBF]"
                                        >
                                            🡸 ข้อก่อนหน้า
                                        </button>
                                        <button
                                            onClick={
                                                currentQuestion + 1 === questions.length
                                                    ? handleSubmitButton
                                                    : handleNext
                                            }
                                            className="px-[22px] py-[10px] bg-[#FFCA61] rounded-lg drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] border-[1px] border-[#FFCA61]"
                                        >
                                            {currentQuestion + 1 === questions.length ? "ส่งคำตอบ 🡺" : "ข้อถัดไป 🡺"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}