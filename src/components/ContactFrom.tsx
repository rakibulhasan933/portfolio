"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

interface SendEmailIProps {
	email: string,
	message: string
}


const formSchema = z.object({
	message: z.string().min(2, {
		message: "Message must be at least 2 characters.",
	}),
	email: z.string().min(10, {
		message: "Email must be valid characters.",
	}),

});



export function ContactFrom() {

	// Send FeedBack
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ email, message }: SendEmailIProps) => {
			const response = await axios.post("/api/send", {
				email, message
			});
			return response.data;
		},
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			message: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		const email = values.email;
		const message = values.message;

		mutate({ email, message }, {
			onSuccess: ({ message, result }: { message: any, result: any }) => {
				toast("Message sent Successfully");
				form.reset();
			},
			onError: (error) => {
				toast("Message sent Failed try again");
			}
		});

	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  text-gray-300 font-medium">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="">Email</FormLabel>
							<FormControl>
								<Input className=" border-2 border-color-sub text-gray-300 font-medium" placeholder="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea className=" border-2 border-color-sub text-gray-300 font-medium" placeholder="Message" rows={6} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{
					isPending ? <Button disabled>Loading...</Button> : <Button className=' text-[15px] bg-inherit hover:bg-emerald-400 border-2 hover:text-black hover:border-emerald-400 border-emerald-400 pb-1 text-emerald-400' type="submit">Submit</Button>
				}
			</form>
		</Form>
	)
}
