"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/components/container/Container";

const TeacherRegister = () => {
	const [formData, setFormData] = useState({
		name: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
		specialization: "",
		languages: "",
		teachingCategories: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		alert("Registration successful!");
	};

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12">
			<Container>
				<div className="w-full">
					<div className="space-y-10">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
							<div className="space-y-2">
								<label htmlFor="name" className="register-label">
									Name
								</label>
								<Input
									id="name"
									name="name"
									type="text"
									placeholder="Name"
									value={formData.name}
									onChange={handleInputChange}
									className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="lastname" className="register-label">
									Lastname
								</label>
								<Input
									id="lastname"
									name="lastname"
									type="text"
									placeholder="Lastname"
									value={formData.lastname}
									onChange={handleInputChange}
									className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="email" className="register-label">
								Email
							</label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleInputChange}
								className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
							/>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
							<div className="space-y-2">
								<label htmlFor="password" className="register-label">
									Password
								</label>
								<Input
									id="password"
									name="password"
									type="password"
									placeholder="Password"
									value={formData.password}
									onChange={handleInputChange}
									className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="confirmPassword" className="register-label">
									Confirm Password
								</label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									placeholder="Confirm Password"
									value={formData.confirmPassword}
									onChange={handleInputChange}
									className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="specialization" className="register-label">
								Specialization
							</label>
							<Input
								id="specialization"
								name="specialization"
								type="text"
								placeholder="e.g. Expert in Web Development, etc"
								value={formData.specialization}
								onChange={handleInputChange}
								className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
							/>
						</div>

						{/* Languages Spoken */}
						<div className="space-y-2">
							<label htmlFor="languages" className="register-label">
								Languages Spoken
							</label>
							<Input
								id="languages"
								name="languages"
								type="text"
								placeholder="Languages"
								value={formData.languages}
								onChange={handleInputChange}
								className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="teachingCategories" className="register-label">
								Teaching Categories
							</label>
							<Input
								id="teachingCategories"
								name="teachingCategories"
								type="text"
								placeholder="Subjects like Programming, Design, Marketing, etc."
								value={formData.teachingCategories}
								onChange={handleInputChange}
								className="h-12 rounded-full bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
							/>
						</div>

						<div className="pt-3 flex justify-end">
							<Button
								onClick={handleSubmit}
								size="lg"
								className="w-max self-end rounded-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
							>
								Register
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default TeacherRegister;
