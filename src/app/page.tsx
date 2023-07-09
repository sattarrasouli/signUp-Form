"use client"

import Form from "@/components/Form/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Home(): JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  )
}
