import React from 'react';
import {
    FaFileMedicalAlt,
    FaHandHoldingMedical,
    FaHospitalUser,
    FaLaptopMedical,
    FaPumpMedical,
} from 'react-icons/fa';
import { GrTapeOption } from 'react-icons/gr';

const Testimonial = () => {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-center font-bold text-xl md:text-2xl">
                BEST HOSPITAL IN TOWN
            </h2>
            <p className="text-center font-normal text-sm md:text-xl">
                When It Comes to Health Care
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-x-8 gap-y-8 my-5">
                <div className="text-center p-5">
                    <GrTapeOption className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Powerful Theme Options
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument.
                    </p>
                </div>
                <div className="text-center p-5">
                    <FaHospitalUser className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Easy to Customize
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument.
                    </p>
                </div>
                <div className="text-center p-5">
                    <FaHandHoldingMedical className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Drag & Drop Page Builder
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument.
                    </p>
                </div>
                <div className="text-center p-5">
                    <FaPumpMedical className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Theme Documentation
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument..
                    </p>
                </div>
                <div className="text-center p-5">
                    <FaLaptopMedical className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Years of Experience
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument.
                    </p>
                </div>
                <div className="text-center p-5">
                    <FaFileMedicalAlt className="inline-block text-5xl" />
                    <h2 className="text-xl my-3 font-medium">
                        Responsive Layout
                    </h2>
                    <p className="my-5">
                        Try to think about paragraphs in terms of thematic
                        unity: a paragraph is a sentence or a group of sentences
                        that supports one central, unified idea. Paragraphs add
                        one idea at a time to your broader argument.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
