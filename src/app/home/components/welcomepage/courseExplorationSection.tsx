'use client'

import React, { useState } from 'react';
import { Search, Star, Image, Clock } from 'lucide-react';

interface Course {
    id: string;
    name: string;
    category: string;
    rating: number;
    studentCount: number;
    description: string;
    level: string;
    weeks: string;
    price: string;
    image?: string;
}

interface FilterState {
    categories: string[];
    levels: string[];
}
export default function CourseExplorationSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<FilterState>({
        categories: [],
        levels: []
    });

    const courses: Course[] = [
        {
            id: '1',
            name: 'Course Name',
            category: 'Category',
            rating: 4.7,
            studentCount: 100,
            description: 'Description of the course text. In this space users will see a brief annotation about course content.',
            level: 'Level',
            weeks: 'X',
            price: '340.56 XLM'
        },
        {
            id: '2',
            name: 'Course Name',
            category: 'Category',
            rating: 4.7,
            studentCount: 100,
            description: 'Description of the course text. In this space users will see a brief annotation about course content.',
            level: 'Level',
            weeks: 'X',
            price: '340.56 XLM'
        },
        {
            id: '3',
            name: 'Course Name',
            category: 'Category',
            rating: 4.7,
            studentCount: 100,
            description: 'Description of the course text. In this space users will see a brief annotation about course content.',
            level: 'Level',
            weeks: 'X',
            price: '340.56 XLM'
        },
        {
            id: '4',
            name: 'Course Name',
            category: 'Category',
            rating: 4.7,
            studentCount: 100,
            description: 'Description of the course text. In this space users will see a brief annotation about course content.',
            level: 'Level',
            weeks: 'X',
            price: '340.56 XLM'
        },
        {
            id: '5',
            name: 'Course Name',
            category: 'Category',
            rating: 4.7,
            studentCount: 100,
            description: 'Description of the course text. In this space users will see a brief annotation about course content.',
            level: 'Level',
            weeks: 'X',
            price: '340.56 XLM'
        }
    ];

    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    const levels = ['Beginner', 'Intermediate', 'Advanced'];

    const handleCategoryChange = (category: string) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const handleLevelChange = (level: string) => {
        setFilters(prev => ({
            ...prev,
            levels: prev.levels.includes(level)
                ? prev.levels.filter(l => l !== level)
                : [...prev.levels, level]
        }));
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filters.categories.length === 0 || filters.categories.includes(course.category);
        const matchesLevel = filters.levels.length === 0 || filters.levels.includes(course.level);

        return matchesSearch && matchesCategory && matchesLevel;
    });

    const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
        <div className="bg-gray-800 border border-gray-500 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                <Image size={150} className="text-gray-400" />
                <span className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                    {course.category}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{course.name}</h3>

                <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white ml-1 text-sm font-medium">
                        {course.rating} ({course.studentCount} students)
                    </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {course.description}
                </p>

                <div className="flex gap-2 mb-4">
                    <span className="border border-blue-400 text-blue-400 px-2 py-1 rounded-full text-xs">
                        {course.level}
                    </span>
                    <span className="flex border border-pink-500 text-pink-500 px-2 py-1 rounded-full text-xs">
                        <Clock size={13} className='m-[1px] text-center'/>
                        {course.weeks} Weeks
                    </span>
                </div>
                <div className='bg-gray-500 my-2 h-[1px]'></div>
                <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">{course.price}</span>
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 my-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-purple-600">
                        Explore courses
                    </h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-purple-500 focus:outline-none w-64"
                        />
                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h2 className="text-white text-lg font-semibold mb-4">Filters</h2>
                            <div className="mb-6">
                                <h3 className="text-gray-300 font-medium mb-3">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <label key={category} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={filters.categories.includes(category)}
                                                onChange={() => handleCategoryChange(category)}
                                                className="w-4 h-4 appearance-none border border-gray-500 rounded bg-transparent checked:bg-purple-600
             checked:border-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-gray-300 text-sm">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-300 font-medium mb-3">Level</h3>
                                <div className="space-y-2">
                                    {levels.map((level) => (
                                        <label key={level} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={filters.levels.includes(level)}
                                                onChange={() => handleLevelChange(level)}
                                                className="w-4 h-4 appearance-none border border-gray-500 rounded bg-transparent checked:bg-purple-600 checked:border-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="ml-2 text-gray-300 text-sm">{level}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                            {filteredCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        {filteredCourses.length === 0 && (
                            <div className="text-center text-gray-400 mt-12">
                                <p className="text-lg">No courses found matching your criteria.</p>
                                <p className="text-sm mt-2">Try adjusting your filters or search term.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
