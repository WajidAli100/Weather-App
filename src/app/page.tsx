'use client'
import { Card, Text, Divider, Subtitle } from "@tremor/react";
import CityPicker from "../../components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-[#394F68] to-[#183B7E] flex flex-col justify-center items-center">
      <Card className="bg-slate-100 rounded-md max-w-4xl mx-auto">
        <Text className="text-6xl text-[#394F68] font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center text-[#394F68]">Powered by OpenAI, Next,js 13.2, Tailwind CSS, Tremor 2.0 + more</Subtitle>
        <Divider className="my-10" />
        <Card className="rounded-md bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  )
}
