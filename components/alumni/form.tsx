'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const selectFields = [
  {
    id: '1',
    placeholder: 'College',
    values: [
      { title: 'College of Basic and Applied Sciences', value: 'cbas' },
      { title: 'College of Humanities and Management Sciences', value: 'chms' },
      { title: 'College of Allied Health Sciences', value: 'cahs' },
    ],
  },
  {
    id: '2',
    placeholder: 'Department',
    values: [
      { title: 'College of Basic and Applied Sciences', value: 'cbas' },
      { title: 'College of Humanities and Management Sciences', value: 'chms' },
      { title: 'College of Allied Health Sciences', value: 'cahs' },
    ],
  },
  {
    id: '3',
    placeholder: 'Programmes',
    values: [
      { title: 'College of Basic and Applied Sciences', value: 'cbas' },
      { title: 'College of Humanities and Management Sciences', value: 'chms' },
      { title: 'College of Allied Health Sciences', value: 'cahs' },
    ],
  },
  {
    id: '4',
    placeholder: 'Year of Graduation',
    values: [
      { title: '2024', value: '2024' },
      { title: '2023', value: '2023' },
      { title: '2022', value: '2022' },
    ],
  },
];

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: 'Firstname must be at least 2 characters.',
  }),
  lastname: z.string().min(2, {
    message: 'Lastname must be at least 2 characters.',
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

export default function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  style={{ border: '1.34px solid #969696' }}
                  className="h-[61.82px] w-[320px] bg-white px-[30.26px] py-[16.91px] font-sans text-sm font-medium leading-[27px] tracking-[-3%] text-[#969696] placeholder-red-500 lg:min-w-[448px]"
                  placeholder="First name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  style={{ border: '1.34px solid #969696' }}
                  className="h-[61.82px] w-[320px] truncate bg-white px-[30.26px] py-[16.91px] font-sans text-sm font-medium leading-[27px] tracking-[-3%] text-[#969696] placeholder-red-500 lg:min-w-[448px]"
                  placeholder="Last name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {selectFields.map((field) => (
          <Select key={field.id}>
            <SelectTrigger
              style={{ border: '1.34px solid #969696' }}
              className="h-[61.82px] w-[320px] truncate bg-white px-[24px] py-[16.91px] font-sans text-sm font-medium leading-[27px] tracking-[-3%] text-[#969696] lg:min-w-[448px]"
            >
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent className="mx-0 px-0">
              {field.values.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}

        <Button
          className="h-[62px] w-[146px] gap-4 rounded-none bg-[#6C006D] px-4 py-[10px] font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white"
          type="submit"
        >
          Register
        </Button>
      </form>
    </Form>
  );
}
