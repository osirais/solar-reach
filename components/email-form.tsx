"use client";

import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const zString = z.string().trim().min(1).max(10000);

const volunteerSchema = z.object({
  name: zString,
  email: zString.email(),
});

const fieldIds = {
  name: "1335873332",
  email: "1825697131",
};

export function EmailForm() {
  const form = useForm<z.infer<typeof volunteerSchema>>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof volunteerSchema>) {
    const baseUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSck7xgzEnACKgVz1LkIPcRAqTafc01DUwpEhAqeoIVRW1TF1A/formResponse?";
    const params = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      const id = fieldIds[key as keyof typeof fieldIds];
      if (id) {
        if (Array.isArray(value)) {
          value.forEach((val) => params.append("entry." + id, val));
        } else {
          params.append("entry." + id, value);
        }
      }
    });

    window.location.href = `${baseUrl}${params.toString()}`;
  }

  return (
    <>
      <Card className="min-w-full rounded-lg bg-white/70 shadow-2xl backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="mb-1 font-bold">Stay Connected</CardTitle>
          <CardDescription className="text-black">
            Sign up for our email list to stay informed about our latest
            projects, success stories, and ways you can get involved.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Name</FormLabel>
                    <FormControl className="bg-white/60">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Email address
                    </FormLabel>
                    <FormControl className="bg-white/60">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
