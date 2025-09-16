// components/login-form.tsx
"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/stateful-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import Link from "next/link";

export const loginSchema = z.object({
  email: z.email({ error: "Invalid email address." }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    const res = await signIn("credentials", {
      redirect: false, // avoid full-page redirect
      email: values.email,
      password: values.password,
    });

    if (res?.ok && !res.error) {
      // ✅ redirect to /main after success
      router.push("/main");
    } else {
      // ❌ show error (you can also set form error)
      //   console.error(res?.error);
      alert("Invalid email or password");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-muted-foreground text-balance">
            Welcome back. Please enter your details.
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-full"
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Password</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-full"
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="rounded-full bg-foreground">
            Sign In
          </Button>
        </div>
        <div className="text-center text-sm font-light">
          Don&apos;t have an account?{" "}
          <Link
            href={"/auth/register"}
            className="underline underline-offset-4 font-semibold"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
